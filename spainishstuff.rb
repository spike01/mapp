

es = es.split(',').map { |words| words.split(' ') }.map { |pair| [pair[0] + ':',  pair[1].to_i].to_s.gsub(/"/, "").gsub(/,/, "").gsub('[', '').gsub(']', '') }.flatten.to_s.gsub(/"/, "")
p es