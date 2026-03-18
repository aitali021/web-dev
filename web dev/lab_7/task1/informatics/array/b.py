n = int(input())
arr = list(map(int, input().split()))

result = []
for num in arr:
    if num % 2 == 0:
        result.append(str(num))

print(" ".join(result))