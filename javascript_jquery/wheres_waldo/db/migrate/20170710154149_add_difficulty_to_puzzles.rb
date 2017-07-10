class AddDifficultyToPuzzles < ActiveRecord::Migration[5.1]
  def change
    add_column :puzzles, :difficulty, :string, after: :url
  end
end
