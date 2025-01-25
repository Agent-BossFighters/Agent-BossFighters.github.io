class Api::V1::AuthController < ApplicationController
  skip_before_action :authenticate_user!, only: [:login, :signup]

  def signup
    user = User.new(user_params)
    if user.save
      token = generate_token(user)
      response.headers['Authorization'] = "Bearer #{token}"
      render json: {
        message: 'User created successfully',
        user: user.as_json(except: :password_digest)
      }, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def login
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      token = generate_token(user)
      response.headers['Authorization'] = "Bearer #{token}"
      render json: {
        message: 'Logged in successfully',
        user: user.as_json(except: :password_digest)
      }
    else
      render json: { error: 'Invalid credentials' }, status: :unauthorized
    end
  end

  private

  def user_params
    params.permit(:username, :password)
  end

  def generate_token(user)
    JWT.encode(
      { user_id: user.id, exp: 24.hours.from_now.to_i },
      Rails.application.credentials.secret_key_base
    )
  end
end
