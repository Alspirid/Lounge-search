class Api::LocationsController < ApplicationController
  before_action :require_logged_in

  def index
    @locations = Location.all
    render :index
  end  
  
  def show
    @location = Location.find(params[:id])
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
