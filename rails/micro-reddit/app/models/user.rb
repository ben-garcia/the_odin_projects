class User < ApplicationRecord
  has_many :posts
  has_many :comments

  validates :name, presence: true, length: { maximum: 20 },
                   uniqueness: true
  validates :email, presence: true, length: { maximum: 255 }
  validates :password, presence: true, length: { maximum: 10 }
end
