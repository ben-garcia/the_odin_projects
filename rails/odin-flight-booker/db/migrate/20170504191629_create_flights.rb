class CreateFlights < ActiveRecord::Migration[5.0]
  def change
    create_table :flights do |t|
      t.references :start_airport, index: true
      t.references :finish_airport, index: true
      t.date    :start
      t.string  :duration

      t.timestamps
    end
  end
end
