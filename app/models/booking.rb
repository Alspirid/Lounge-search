class Booking < ApplicationRecord
  validates :traveler_id, :host_id, :accepted, presence: true
  belongs_to :user
end
