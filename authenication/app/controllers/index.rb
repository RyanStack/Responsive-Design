get '/' do

  erb :form
end

#----------- SESSIONS -----------

post '/sessions' do
  @email = params[:email]
  p @email
  @password = params[:password]
  p @password
  @current_user = User.where('email = ? and password_hash = ?', @email, @password).first
  if @current_user != nil
    erb :account
  else
    @error = "Wrong username or password"
  end
end



