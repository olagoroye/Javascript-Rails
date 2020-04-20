Rails.application.routes.draw do
  resources :items
  resources :lists
  delete '/remove_item/:list_id/:item_id', to: "list_items#destroy"
  
  resources :list_items
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

end
