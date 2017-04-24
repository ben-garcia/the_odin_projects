class SessionsController < ApplicationController

  def create
    user = User.find_by(email: params[:session][:email].downcase)
    if user && user.authenticate(params[:session][:password])
      log_in user
      redirect_to posts_path
    else
      render 'new'
    end
  end

  def destroy
    sign_out if signed_in?
    redirect_to posts_path
  end

end
