class Api::BookingsController < ApplicationController
  before_action :require_logged_in
  
  def create
    @booking = Booking.new(booking_params)
    if @booking.save
      render :show
    else
      render json: @booking, status: :unprocessable_entity
    end    
  end 
  
  def index
    @bookings = Booking.all
  end
  
  def show
    @booking = Booking.find(params[:id])
  end 
  
  private
  
  def booking_params
    params.require(:booking).permit(
      :traveler_id,
      :host_id,
      :accepted,
      :arrival,
      :departure
    )
  end  
  
  
end
