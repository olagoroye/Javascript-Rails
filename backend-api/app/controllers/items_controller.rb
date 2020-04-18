class ItemsController < ApplicationController
  before_action :set_item, only: [:show, :update, :destroy]

  # GET /items
  def index
    @items = Item.all

    render json: @items, include: :lists
  end

  # GET /items/1
  def show
    render json: @item, include: :lists
  end

  # POST /items
  def create
    @item = Item.new(item_params)

    if @item.save
      render json: @item, include: :lists, status: :created, location: @item
    else
      render json: @item.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /items/1
  def update
    if @item.update(item_params)
      render json: @item
    else
      render json: @item.errors, status: :unprocessable_entity
    end
  end

  #    #DELETE /items/1
  # def destroy  
  #   @item = Item.find(params[:id])
  #   @item.destroy
  #   render json: {}, status: :no_content
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_item
      @item = Item.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def item_params
      params.require(:item).permit(:name, :price, :brand, :description, list_ids: [])
    end
end


#list_items_attributes: [:item_id, :quantity], item_ids: []