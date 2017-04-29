class EventsController < ApplicationController
  def index
    @upcoming_events = Event.upcoming_events
    @past_events     = Event.past_events
    @events          = Event.all
  end

  def show
    @event = Event.find_by(id: params[:id])
  end

  def new
    @event = current_user.events.build
  end

  def create
    @event = current_user.events.build(event_params)
    current_user.attended_events << @event
    if @event.save
      redirect_to events_path
    else
      render 'new'
    end
  end

  private

  def event_params
    params.require(:event).permit(:description)
  end


end
