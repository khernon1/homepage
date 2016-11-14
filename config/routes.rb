Rails.application.routes.draw do

  get "home", to: "homes#index"
  get "users", to: "users#index"
  get "taglines", to: "taglines#index"

  get "user/:id", to: "users#show"
    # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
