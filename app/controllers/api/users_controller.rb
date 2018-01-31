class Api::UsersController < ApplicationController
  
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render "/api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end  
  
  def update
    @user = current_user
    if @user && @user.update_attributes(user_params)
      render :show
      elseif !@user
      render json: ['Could not locate user'], status: 400
    else
      render json: @user.errors.full_messages, status: 401
    end    
  end
  
  def show
    @user = selected_user
  end  
  
  def index
    @users = User.all
  end  
  
  def user_params
    params.require(:user).permit(:username, 
                                 :email, 
                                 :password, 
                                 :d_birth, 
                                 :is_host, 
                                 :location_id, 
                                 :about_text, 
                                 :image_url)
  end
    
end
