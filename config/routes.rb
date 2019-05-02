Rails.application.routes.draw do
  mount ForestLiana::Engine => '/forest'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'pages#home'
  get 'about', to: 'pages#about'
  get 'reporting', to: 'pages#reporting'

  resources :articles

  get 'signup', to: 'users#new'
  resources :users, except: [:new]

  get 'login', to: 'sessions#new'
  post 'login', to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'

  resources :categories, except: [:destory]
end
