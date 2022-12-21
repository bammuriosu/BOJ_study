def a(years):
    n = 0
    for i in range(7):
        n = n + ((i % years) * years * 30)
    return(n)

print(a(7))

