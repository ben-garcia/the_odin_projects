class Comment < ApplicationRecord
  #A comment relates to a single article, it "belongs to" an article.
  #Now an article "has many" comments, and a comment "belongs to" an article. We have explained to Rails that these objects have a one-to-many relationship
  belongs_to :article

end
