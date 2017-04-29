class CreateAttendeeAttendedEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :attendee_attended_events do |t|
      t.integer :attendee_id
      t.integer :attended_event_id

      t.timestamps
    end
    add_index :attendee_attended_events, :attendee_id
    add_index :attendee_attended_events, :attended_event_id
  end
end
