class PassengerMailer < ApplicationMailer
  default from: 'odin-flight-booker@example.com'

  def thank_you(user)
    @user = user
    mail(to: @user.email, subject: 'Thank for booking your flight with us')
  end

end
