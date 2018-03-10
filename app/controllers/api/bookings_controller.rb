class Api::BookingsController < ApplicationController
  before_action :require_logged_in
  
  def create
    @booking = Booking.new(booking_params)
    if @booking.save
      render :show
    else
      render json: @booking.errors.full_messages, status: 422
    end    
  end
  
  def destroy
    @booking = Booking.find(params[:id])
    @booking.destroy
    render json: @booking
  end
  
  def update
    @booking = Booking.find(params[:id])
    if @booking.update(booking_params)
      render :show
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end
  
  def index
    @bookings = Booking.all.where(traveler_id: current_user.id).or.where(host_id: current_user.id)
    render :index
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
      :departure,
      :description
    )
  end  
  
  
end
