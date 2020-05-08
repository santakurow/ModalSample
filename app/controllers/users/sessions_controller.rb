# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  # before_action :configure_sign_in_params, only: [:create]

  # respond_to :html, :js

  # GET /resource/sign_in
  # def new
  #   super
  # end

  # POST /resource/sign_in
  def create
    @resource = User.find_for_database_authentication(email: params[:user][:email])

    @valid_res = true

    if @resource && @resource.valid_password?(params[:user][:password])
      # binding.pry
      sign_in :user, @resource
      redirect_to root_path
    else
      @valid_res = false
      # respond_to do |format|
      #   format.js
      # end
      # render nothing: true
    end
  end

  # DELETE /resource/sign_out
  # def destroy
  #   super
  # end

  # protected


  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  # end
end
