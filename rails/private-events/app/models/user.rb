class User < ApplicationRecord
  has_many :events, foreign_key: "creator_id"
  has_many :attendee_attended_events, foreign_key: :attendee_id
  has_many :attended_events, through: :attendee_attended_events
  # not needed since attended_events already exits in the through table.
                             #source:  :attended_event  
end
