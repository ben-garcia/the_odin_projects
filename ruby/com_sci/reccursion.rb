# Fibonacci Sequence
def fibs n
  arr = []

  (0...n).each do |i|
    if i == 0
      arr[i] = i
    elsif i == 1
      arr[i] = i
    else
      arr[i] = arr[(i - 1).abs] + arr[(i - 2).abs]
    end
  end

  arr.each do |e|
    puts e
  end
end

def fib_rec(n, result = [0, 1])
  return 0 if n == 0
  return result if n == 1
  fib_rec(n-1, result << result[-1] + result [-2])
end

def mergesort(arr)

    left = []; right = []; result = []

    return arr if arr.length <= 1

    midpoint = arr.length/2

    0.upto(midpoint-1) {|i| left << arr[i]}
    midpoint.upto(arr.length-1) {|i| right << arr[i]}

    left = mergesort(left)
    right = mergesort(right)

    result = merge(left,right)
    result

end

def merge(left,right)
    result = []
    until left.empty? or right.empty?
        if left.first <= right.first
            result << left.first
            left = left[1..-1]
        else
            result << right.first
            right = right[1..-1]
        end
    end
    return result + left + right
end

arr = [4,5,2,56,12,32,456,3,-3,8]
puts mergesort(arr)


#print "Enter number: "
#input = gets.chomp.to_i

#puts fib_rec(input).inspect
