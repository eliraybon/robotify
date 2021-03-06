class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def follow
    @user = User.find(params[:id])
    current_user.followed_users << @user
    render :follow
  end

  def unfollow
    @user = User.find(params[:id])
    follow = Follow.find_by(
      followable_id: @user.id,
      user_id: current_user.id,
      followable_type: 'User'
    )
    follow.destroy
    render :follow
  end

  def show 
    @user = User.find(params[:id])
    render :show
  end

  private
  def user_params
    params.require(:user).permit(:email, :password)
  end
end
