Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do

    resources :users, only: [:create] do 
      member do 
        post :follow
        delete :unfollow
      end
    end
    
    resource :session, only: [:create, :destroy]

    resources :albums, only: [:index, :show] do
      member do 
        post :like
        delete :unlike
      end
    end

    resources :playlists, only: [:index, :show, :create, :update, :destroy] do
      member do 
        post :like
        delete :unlike
      end
    end

    resources :artists, only: [:index, :show] do 
      member do 
        post :follow
        delete :unfollow
      end
    end

    resources :songs do 
      member do 
        post :like
        delete :unlike
      end
    end

    resources :playlist_songs, only: [:create, :destroy]
  end

  #These routes are for testing Active Storage. Delete later
  resources :albums, only: [:show]
  resources :songs, only: [:show]
  ###

  root to: 'static_pages#root'
end
