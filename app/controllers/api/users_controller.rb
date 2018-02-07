class Api::UsersController < ApplicationController
  
  def create
    @user = User.new(user_params)
    location_id = Location.first.id 
    @user.location_id = location_id 
    @user.image_url = 'http://www.iconninja.com/files/411/435/758/casual-girl-user-female-avatar-person-icon.svg';
    if @user.save
      login(@user)
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
    @user = User.find(params[:id])
  end  
  
  def index
    @users = User.all
  end  
  
  def search
    @users = Users.search(params[:term]).order(:username)
  end  
  
  def user_params
    params.require(:user).permit(
      :username, 
      :email, 
      :password, 
      :d_birth, 
      :is_host, 
      :about_text, 
      :image_url)
  end
    
end
