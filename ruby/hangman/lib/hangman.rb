require "yaml"

class Game
  attr_accessor :secret_word, :number_of_guesses_left, :player_name, :player_array,
                :letters_guessed

  def initialize player_name

    # secret word is returned as a String
    @secret_word = generate_secret_word.downcase
    @number_of_guesses_left = (@secret_word.size / 2) + 5
    @player_name = player_name
    @player_array = ""
    @letters_guessed = ""
    # ... doesn't include @secret_word.size.
    # .. would include
    (0...@secret_word.size).each {|i| @player_array[i] = "_"}

  end

  # Open dictionary.txt file and randomly selects a word between 5-12 letters
  # in length.
  def generate_secret_word

    # not sure why i need this line since.
    Dir.chdir "/home/ben/Documents/the_odin_projects/ruby/hangman/"

    # File.readlines returns an array.
    # File.read returns a string.
    words = File.read "dictionary.txt"

    # scan methods scans the string which contains the contents of the
    # dictionary.txt file.
    # regular expression to math any alphanumeric character at least 5 characters
    # and no longer than 12.
    # method returns an Array
    new_words = words.scan(/^\w{5,12}/)

    # rand method picks a random method between the arguements passed to it.
    secret_word = new_words[rand(0..new_words.size)]

    # return the secret_word that was chosen.
    secret_word

  end

  def print_board

    if @player_array.is_a? Array
      @player_array.each do |i| print i + " " end
    else
      (0...@player_array.size).each {|i| print @player_array[i] + " "}
    end


  end

  def guess_letter letter


    if @secret_word.include?(letter)
      puts "#{letter} is a match"

      (0...@secret_word.size).each do |i|
        if letter == @secret_word[i]
          puts "\nthe letter #{letter} is a match"
          @player_array[i] = letter
        end
      end

    else
      puts "#{letter} doesn't match"
      puts "You have #{@number_of_guesses_left -= 1} left"
      @letters_guessed += letter
    end


  end

  def game_loop

    game_isnt_done = true

    while game_isnt_done do

      # When loading a previous game the player_array turns int a string
      # the split method breaks it apart letter by letter into an array.
      # map method runs the block to every element in the array.
      # i is converted to string and join method the string adding the
      # arguement passed to it.
      # returns a String.
      word = @player_array.split("").map {|i| i.to_s}.join("")



      print " (Incorrect guesses: #{@letters_guessed})    "
      print "(You have #{@number_of_guesses_left} guesses left)    "
      print "\nGuess a letter: (save game by entering 'save')"
      user_guess = gets.chomp

      if user_guess == "save"
        save

      else
        print_board
        guess_letter user_guess


        # once the secret_word equals the player_array
        # then its time to end the loop.
        if (@secret_word == word) == true
          puts "YOU WIN"
          game_isnt_done = false
        elsif @number_of_guesses_left <= 0
          puts "GAME OVER...YOU LOST"
          puts "the word was -----> #{@secret_word} <-----"
          game_isnt_done = false
        end

        print_board
      end

    end

  end


  def save
    # create a saves directory if it doesn't exits.
    Dir.mkdir "saves" unless File.exists? "saves"
    puts "directory 'saves' created"

    Dir.chdir "saves" do
      puts "Enter file name? (file extension added automatically)"

      file_name = gets.chomp + ".yml"

      attributes = [@secret_word, @number_of_guesses_left, @player_name, @player_array, @letters_guessed]
      File.open(file_name, "w") {|f| f.puts attributes.to_yaml} unless File.exists? file_name
      puts "---------> Game Saved <---------"

    end

  end

  def self.load

    if File.directory? "saves"
      Dir.chdir "saves"

      # puts the files with 'yml' file extension.
      puts "++++++++++++++++++++++++++++++++"
      puts Dir.glob "*.yml"
      puts "++++++++++++++++++++++++++++++++"
      puts "Enter the file name to load(EXCLUDING .yml)"

      load_this = gets.chomp + ".yml"

      # read the array and stores into a String
      yaml_string = File.read(load_this)

      attributes = YAML.load(yaml_string) # returns Game object

      @secret_word = attributes[0],
      @number_of_guesses_left = attributes[1],
      @player_name = attributes[2],
      @player_array = attributes[3],
      @letters_guessed = attributes[4]

      puts "LOADED SUCCESSFULLY"

      puts @player_array

      attributes

    else
      puts "There are no previously saved files."
      exit
    end

  end


  def self.to_s

    puts "secret_word: #{@secret_word}"
    puts "number_of_guesses_left: #{@number_of_guesses_left}"
    puts "player_name: #{@player_name}"
    array = @player_array.each {|i| i.to_s}.join("")
    puts "player_array: #{array}"
    puts "letters_guessed: #{@letters_guessed}"

  end

end

puts "The Hangman Game"
puts "Would you like to load a game?('y' or 'n')"
user_input = gets.chomp

if user_input == "y"

  # the load method return a Hash not a populated Game object.
  game = Game.load

  puts game.inspect

  # for that reason a new instance is created and
  # passed the instance variables of the game object.
  resume_game = Game.new game[2]
  resume_game.secret_word = game[0]
  resume_game.number_of_guesses_left = game[1]
  resume_game.player_array = game[3]
  resume_game.letters_guessed = game[4]

  # continue where the player left off.
  resume_game.game_loop

else
  puts "Enter your name?"

  user_name = gets.chomp

  puts "Welcome #{user_name}"
  puts "Generating word..."

  game = Game.new user_name
  game.print_board
  game.game_loop

end
