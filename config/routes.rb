Rails.application.routes.draw do
resources :users, only: [:index, :create]
  resources :bookings, only: [:create]

resources :hotels, only: [:index, :create, :show] do
  resources :rooms, only: [:index, :create]
  resources :features, only: [:create, :index]

end
resources :pictures, only: [:create]
post "/login", to: "sessions#create"
get "/me", to: "users#show"
delete "/logout", to: "sessions#destroy"
get "/rooms/:id", to: "rooms#show"
resources :reviews, only: [:create, :index]
post "/views", to: "views#create"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
