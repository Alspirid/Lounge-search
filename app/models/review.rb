# == Schema Information
#
# Table name: reviews
#
#  id          :integer          not null, primary key
#  author_id   :integer          not null
#  user_id     :integer          not null
#  location_id :integer
#  body        :text             not null
#  title       :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Review < ApplicationRecord
  validates :author_id, :user_id, :body, :title, presence: true
  
  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User
  
  belongs_to :author,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :User
end
