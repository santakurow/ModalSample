Rails.application.routes.draw do
  # devise_for :users, controllers: {
  #   sessions: "users/sessions",
  #   registrations: "users/registrations"
  # }
  devise_for :users, controllers: {
    registrations: "users/registrations",
    sessions: "users/sessions"
  }
  root "tops#index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
