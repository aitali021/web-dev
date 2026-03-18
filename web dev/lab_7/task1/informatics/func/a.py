def min(a, b, c, d):
    min1 = a if a < b else b
    min2 = c if c < d else d
    return min1 if min1 < min2 else min2

a, b, c, d = map(int, input().split())
print(min(a, b, c, d))