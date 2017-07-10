class AddTitleToPuzzles < ActiveRecord::Migration[5.1]
  def change
    add_column :puzzles, :title, :string
  end
end
