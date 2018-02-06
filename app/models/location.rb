# == Schema Information
#
# Table name: locations
#
#  id         :integer          not null, primary key
#  street     :string           not null
#  area       :string           not null
#  lat        :float            not null
#  lng        :float            not null
#  image_url  :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Location < ApplicationRecord
  validates :street, :area, :lat, :lng, presence: true
  
  has_many :hosts,
    primary_key: :id,
    foreign_key: :location_id,
    class_name: :User
  
  has_many :bookings,
    through: :hosts,
    source: :bookings
    
  has_many :hostings,
    through: :hosts,
    source: :hostings
    
end
