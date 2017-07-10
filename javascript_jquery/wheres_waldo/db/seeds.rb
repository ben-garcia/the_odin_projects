# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Puzzle.delete_all

Puzzle.create([{
    url: 'https://s-media-cache-ak0.pinimg.com/originals/86/b9/b1/86b9b1e83140b935031a7c7b0ebf0170.jpg',
    difficulty: "Easy",
    title: "The Town"
  },
  {
    url: 'https://metrouk2.files.wordpress.com/2015/02/x8jz7pq.jpg',
    difficulty: "Medium",
    title: "FVN and Games in Ancient Rome"
  },
  {
    url: 'http://cdn.collider.com/wp-content/uploads/wheres-waldo-book-page-challenge.jpg',
    difficulty: "Hard",
    title: "The Gobbling Gluttons"
  }])
