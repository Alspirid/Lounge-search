Rails.application.routes.draw do
  get 'reviews/new'

  get 'reviews/create'

  get 'reviews/edit'

  get 'reviews/update'

  get 'reviews/index'

  get 'reviews/show'

  get 'reviews/destroy'

  get 'bookings/new'

  get 'bookings/create'

  get 'bookings/edit'

  get 'bookings/update'

  get 'bookings/index'

  get 'bookings/show'

  get 'bookings/destroy'

  get 'locations/new'

  get 'locations/create'

  get 'locations/edit'

  get 'locations/update'

  get 'locations/index'

  get 'locations/show'

  get 'locations/destroy'

  get 'sessions/new'

  get 'sessions/create'

  get 'sessions/destroy'

  get 'users/new'

  get 'users/create'

  get 'users/edit'

  get 'users/update'

  get 'users/index'

  get 'users/show'

  get 'users/destroy'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  root to: 'static_pages#root'
  
  
end
