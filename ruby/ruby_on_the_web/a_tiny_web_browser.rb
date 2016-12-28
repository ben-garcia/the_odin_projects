require 'socket'
require 'json'

host = 'localhost'     # The web server
port = 2000                           # Default HTTP port
path = "/index.html"                 # The file we want

puts "which type of request would you like to perfom?(GET or POST)"
user_request = gets.chomp

if user_request == "GET"

  # This is the HTTP request we send to fetch a file
  request = "GET #{path} HTTP/1.0\r\n\r\n"
  socket = TCPSocket.open(host,port)  # Connect to server

  socket.print(request)      # Send request
  response = socket.read     # Read complete response
  print response

elsif user_request == "POST"
  puts "What is the viking's name?"
  name = gets.chomp
  puts "What is you email address #{name}"
  email = gets.chomp

  new_viking = {:viking => {:name => name, :email => email }}

  request = "POST HTTP/1.0\rContent-Length:#{new_viking.to_json.length} #{new_viking.to_json}\r\n\r\n"
  socket = TCPSocket.open(host, port)

  socket.print(request)
  response = socket.read
  print response

else
  puts "Invalid Selection"
end
