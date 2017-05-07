class Flight < ApplicationRecord
  belongs_to :from_airport, class_name: "Airport", foreign_key: :start_airport_id
  belongs_to :to_airport,   class_name: "Airport", foreign_key: :finish_airport_id

  def self.search(params)
    self.where(from_airport: params[:from_flight],
               to_airport: params[:to_flight],
               start: params[:date])
  end

end
