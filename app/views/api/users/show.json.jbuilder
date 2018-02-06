json.partial! "api/users/user", user: @user
json.location @user.location
json.home @user.location.area
