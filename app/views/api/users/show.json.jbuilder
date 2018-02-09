json.partial! "api/users/user", user: @user
json.location @user.location
# json.reviews @user.reviews, :id, :title, :body, :author

json.reviews do
  
  json.array! @user.reviews do |review|
    json.id review.id
    json.user_id review.user_id
    json.title review.title
    json.body review.body
      if !review.author.nil?
        json.author_name review.author.username
      else
        json.author_name 'noname'
      end    
  end
end

# json.reviews do
#   @user.reviews.each do |review|
#     json.set! review.id do
#       json.extract! review, :id, :title, :body, :author
#     end
#   end
# end
