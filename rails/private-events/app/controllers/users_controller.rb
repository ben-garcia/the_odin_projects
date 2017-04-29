class UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
    @upcoming_events = @user.attended_events.upcoming_events
    @past_events = @user.attended_events.past_events
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in @user
      flash[:sucess] = "User created successfully"
      redirect_to @user
    else
      flash.now[:danger] = "Error when trying to create user"
      render 'new'
    end
  end

  private

  def user_params
    params.require(:user).permit(:name)
  end

end
