class ListItemsController < ApplicationController
    def destroy 
        
     @list_item= ListItem.find_by(list_id: params[:list_id], item_id: params[:item_id] )
    # binding.pry
         @list_item.destroy
         render json: {}, include: :items, status: :no_content
    end
end 

# @list = List.find(params[:id])

# @item = Item.find(params[:id])

# @list_item= ListItem.find_by(list_id: params[:list_id], item_id: params[:item_id] )