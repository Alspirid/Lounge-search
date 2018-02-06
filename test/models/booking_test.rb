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

require 'test_helper'

class BookingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
