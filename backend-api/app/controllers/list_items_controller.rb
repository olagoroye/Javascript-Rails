class ListItemsController < ApplicationController
	#before_action :set_list_items, only: [:destroy]

	# GET /list_items
	def index
	  @list_items = ListItem.all

	  render json: @list_items
	end

	# DELETE /list_items/list_id/item_id
	def destroy
		@list_item = ListItem.find_by(list_id: params[:list_id], item_id: params[:item_id] )
		# binding.pry
		@list_item.destroy
		render json: {}, include: :items, status: :no_content
	end
end 

