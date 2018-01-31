class Location < ApplicationRecord
  validates :street, :area, :lat, :lng, presence: true
  
  belongs_to :user
    
end
