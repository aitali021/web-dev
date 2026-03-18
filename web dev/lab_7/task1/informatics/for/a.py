a = int(input())
b = int(input())

res = []
for i in range(a, b + 1):
    if i % 2 == 0:
        res.append(str(i))

print(" ".join(res))