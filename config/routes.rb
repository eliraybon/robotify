Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
  end

  #These routes are for testing Active Storage. Delete later
  resources :albums, only: [:show]
  resources :songs, only: [:show]
  ###

  root to: 'static_pages#root'
end
