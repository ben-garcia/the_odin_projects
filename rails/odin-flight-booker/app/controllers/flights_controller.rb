class FlightsController < ApplicationController
  def index
    @flight = Flight.new
    @airport_options = Airport.all.limit(5).map { |airport| [airport.code, airport.id] }
    @passenger_options = [["1", 1], ["2", 2], ["3", 3], ["4", 4]]
    @start_options = Flight.distinct.pluck(:start)
    @searched_flight = Flight.search(params)
  end
end
