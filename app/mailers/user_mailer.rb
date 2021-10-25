class UserMailer < ApplicationMailer
  default from: "http://localhost:4000/signup"

    def welcome_email
    user = params[:user]
     @url  = 'http://localhost:4000/signup'
    mail(to: user.email, subject: 'Welcome to My Awesome Site')
  end
end
