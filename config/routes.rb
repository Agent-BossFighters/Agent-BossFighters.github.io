Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      post 'signup', to: 'auth#signup'
      post 'login', to: 'auth#login'

      resources :rarities, only: [:index]
      resources :builds
    end
  end
end
