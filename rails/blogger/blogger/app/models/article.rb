class Article < ApplicationRecord
  #We then want to declare the other side of the relationship
  #Now an article "has many" comments, and a comment "belongs to" an article. We have explained to Rails that these objects have a one-to-many relationship
  has_many :comments
  has_many :taggings
  has_many :tags, through: :taggings
  # This has_attached_file method is part of the paperclip library. With that declaration, paperclip will understand that this model should accept a file 
  # attachment and that there are fields to store information about that file which start with image_ in this model’s database table.
  has_attached_file :image
  validates_attachment_content_type :image, :content_type => ["image/jpg", "image/jpeg", "image/png"]

  def tag_list
    self.tags.collect do |tag|
      tag.name
    end.join(", ")
  end

  def tag_list=(tags_string)
    tag_names = tags_string.split(",").collect{|s| s.strip.downcase}.uniq
    new_or_found_tags = tag_names.collect { |name| Tag.find_or_create_by(name: name) }
    self.tags = new_or_found_tags
  end

end
