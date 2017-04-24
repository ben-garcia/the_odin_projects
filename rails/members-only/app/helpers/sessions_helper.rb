module SessionsHelper

  def log_in(user)
    # Create a new token for the remeber_token
    remember_token = User.new_token
    # Place the remember_token cookie in the users browser.
    cookies.permanent[:remember_token] = remember_token
    # Update the user's remeber_token with the new token.
    user.update_attribute(:remember_token, User.digest(remember_token))
    # Set the current_user to user passed.
    self.current_user = user
  end

  # Setter method.
  def current_user=(user)
    @current_user = user
  end

  def current_user
    remember_token = User.digest(cookies[:remember_token])
    @current_user ||= User.find_by(remember_token: remember_token)
  end

  def sign_out
    # Change the users remember token in case it was stolen.
    current_user.update_attribute(:remember_token, User.digest(User.new_token))
    # Delete the remember cookie from the users' browser.
    cookies.delete(:remember_token)
    # Set the current user.
    self.current_user = nil
  end

  def signed_in?
    # If current_user is nil then the user ins't signed in.
    !current_user.nil?
  end

  def restrict_to_singed_in_users
    unless signed_in?
      redirect_to login_path, notice: "Please sign in"
    end
  end

end
