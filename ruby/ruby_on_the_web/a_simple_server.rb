require 'socket'
require 'json'               # Get sockets from stdlib

server = TCPServer.open(2000)  # Socket to listen on port 2000

loop do

  client = server.accept

  client.puts(Time.now.ctime)

  request = client.gets.split(" ")

  if request[0] == "GET"
    if File.exists? request[1][1..-1]
      string = File.read request[1][1..-1]
      client.puts "#{request[2]} 200 OK\r\nDate: #{Time.now.ctime}\r\nContent-Type: text/html\r\nContent-Length: #{string.length}\r\n#{string}"
    else
      client.puts "#{request[2]} 404 NOT FOUND"
    end


  elsif request[0] == "POST"

    json_object = JSON.parse(request[3])

    params = {name: json_object["viking"]["name"], email: json_object["viking"]["email"]}

    f = File.open("thanks.html", "r")
    thanks = f.read
    f.close

    thanks.gsub!("<%= yield %>", "<li>Name: #{params[:name]}</li><li>Email: #{params[:email]}</li>")

    client.puts thanks


  end


  client.puts "Closing the connection. Bye!"
  client.close

end
