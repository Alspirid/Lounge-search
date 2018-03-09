Rails.application.routes.draw do
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :index]
    resource :session, only: [:create, :destroy, :show]
    resources :locations, only: [:index, :show, :create]
    resources :bookings
    resources :reviews, only: [:create, :index, :show, :update, :destroy]
    post 'locations/search', to: 'locations#search'
  end  
  root to: 'static_pages#root'
  
end
