a = [1,2,3]
c = a.map(arg=>arg+100)
console.log(c)
d = c.filter(arg=>arg > 101)
console.log(d)
f = a.map(arg=>arg+100).filter(arg=>arg > 101)