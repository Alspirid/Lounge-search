class Api::ReviewsController < ApplicationController
  before_action :require_logged_in
  
  def create
    @review = Review.new(review_params)
    if @review.save
      render :show
    else
      render json: @review, status: :unprocessable_entity
    end    
  end
  
  def show
    @review = Review.find([:id])
  end
  
  def index
    @reviews = Review.all
    render :index
  end    
  
  def review_params
    params.require(:review).permit(
      :author_id, 
      :user_id, 
      :location_id, 
      :body, 
      :rating)
  end  
  
end
