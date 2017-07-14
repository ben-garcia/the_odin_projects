class PuzzlesController < ApplicationController
  def index
    @puzzles = Puzzle.all
  end

  def show
    @puzzle = Puzzle.find(params[:id])
    @scores = @puzzle.scores.order(number: :desc).limit(20)
  end
end
