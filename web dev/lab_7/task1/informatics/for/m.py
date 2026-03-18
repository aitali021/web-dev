n = int(input())

zero_count = 0
for _ in range(n):
    num = int(input())
    if num == 0:
        zero_count += 1

print(zero_count)