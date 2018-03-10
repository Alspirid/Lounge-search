@bookings.each do |booking|
  json.set! booking.id do
    json.partial! 'booking', booking: booking
    json.area booking.location.area
    json.host booking.host.username
  end
end
