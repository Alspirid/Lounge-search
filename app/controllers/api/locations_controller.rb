class Api::LocationsController < ApplicationController
  before_action :require_logged_in

  def index
    @locations = Location.all
    render :index
  end  
  
  def show
    @location = Location.find(params[:id])
    render :show
  end
  
  def create
    @location = Location.new(location_params)
    if @location.save
      render :show
    else
      render json: @location.errors.full_messages, status: 422  
    end  
  end
  
  def destroy
    @location = Location.find(params[:id])
    @location.destroy
    render :index
  end
  
  def search
    @locations = Location.search(params[:term]).order(:area)
    render 'api/locations/index'
  end

  private
  
  def location_params
    params.require(:location).permit(
      :street,
      :area,
      :lat,
      :lng,
      :image_url
    )
  end  

end
