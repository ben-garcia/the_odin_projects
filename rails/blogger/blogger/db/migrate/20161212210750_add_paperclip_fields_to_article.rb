class AddPaperclipFieldsToArticle < ActiveRecord::Migration[5.0]
  # Remember that the code inside the change method is to migrate
  # the database forward, and Rails should automatically figure out how to undo those changes.
  def change
    add_column :articles, :image_file_name, :string
    add_column :articles, :image_content_type, :string
    add_column :articles, :image_file_size, :string
    add_column :articles, :image_updated_at, :string
  end
end
