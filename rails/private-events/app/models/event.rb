class Event < ApplicationRecord
  scope :upcoming_events, -> { where "date > ?", DateTime.now}
  scope :past_events, -> { where "date <= ?", DateTime.now}

  belongs_to :creator, class_name: "User"
  has_many :attendee_attended_events, foreign_key: :attended_event_id
  has_many :attendees, through: :attendee_attended_events
  # not needed since attendee already exits in the through table.
                       #source:  :attendee

end
