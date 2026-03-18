a = int(input())
b = int(input())

res = []
i = 1
while i * i <= b:
    if i * i >= a:
        res.append(str(i * i))
    i += 1

print(" ".join(res))