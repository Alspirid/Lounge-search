# == Schema Information
#
# Table name: bookings
#
#  id          :integer          not null, primary key
#  traveler_id :integer          not null
#  host_id     :integer          not null
#  accepted    :string           not null
#  arrival     :datetime
#  departure   :datetime
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Booking < ApplicationRecord
  validates :traveler_id, :host_id, :accepted, presence: true
  
  belongs_to :host,
    primary_key: :id,
    foreign_key: :host_id,
    class_name: :User
  
  belongs_to :traveler,
    primary_key: :id,
    foreign_key: :traveler_id,
    class_name: :User
  
  has_one :location,
    through: :host,
    source: :location
  
end
