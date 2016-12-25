def bubble_sort array
	swap = true
	while swap
		swap = false
		for i in 0..array.length-2
			if array[i] > array[i+1]
				array[i], array[i+1] = array[i+1], array[i]
				swap = true
			end
		end
	end
	return array
end

def bubble_sort_by array
	swap = true
	while swap
		swap = false
		for i in 0..array.length-2
			y = yield(array[i],array[i+1])
			if y == 1
				array[i], array[i+1] = array[i+1], array[i]
				swap = true
			end
		end
	end
	return array
end
array = bubble_sort([4,3,78,2,0,2])

puts array
