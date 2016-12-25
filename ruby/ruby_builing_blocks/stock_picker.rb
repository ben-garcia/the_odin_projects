def stock_picker(*prices)
  day = 0
  max_profit = 0
  best_buy_date = 0
  best_sell_date = 0

  while day < prices.length
    buy = prices[day]
    (day..prices.length-1).each do |next_day|
      sell = prices[next_day]
      profit = sell - buy
    puts profit
      if profit > max_profit
        max_profit = profit
        best_buy_date = day+1
        best_sell_date = next_day+1
      end
    end
    day += 1
  end
  puts "For a max profit of #{max_profit} buy on day #{best_buy_date} and sell on day #{best_sell_date}."
end

stock_picker(2332,223,339,429,215,118,226,331,340)
