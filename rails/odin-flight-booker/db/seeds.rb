# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Airport.delete_all
Flight.delete_all

Airport.create!([code: "SFO"])
Airport.create!([code: "NYC"])
Airport.create!([code: "LAX"])
Airport.create!([code: "LEO"])
Airport.create!([code: "HOU"])


airports = ["SFO", "NYC","LAX", "LEO", "HOU"]

flights = 0

while flights < 300
  from_airport = rand(0..4)
  to_airport =   rand(0..4)
  start = rand(1..100) + rand(1..50)

  if from_airport != to_airport
    Flight.create!([start_airport_id: Airport.where(code: airports[from_airport]).first.id,
                  finish_airport_id: Airport.where(code: airports[to_airport]).first.id,
                  start: DateTime.now + rand(1..10) + (start * start).minutes,  duration: "#{start} minutes"])

    flights += 1
  else
    flights -= 1
  end


end
