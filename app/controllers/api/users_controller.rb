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

  #why is the param :user_id here and not :id like every other follow action?
  def follow
    @user = User.find(params[:id])
    current_user.followed_users << @user
    render :show
  end

  def unfollow
    @user = User.find(params[:id])
    follow = Follow.find_by(
      followable_id: @user.id,
      user_id: current_user.id,
      followable_type: 'User'
    )
    follow.destroy
    render :show
  end

  private
  def user_params
    params.require(:user).permit(:email, :password)
  end
end
