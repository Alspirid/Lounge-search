class Review < ApplicationRecord
  validates :author_id, :user_id, :body, :rating, presence: true
  
  belongs_to :user
end
