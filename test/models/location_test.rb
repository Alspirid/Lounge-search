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

require 'test_helper'

class LocationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
