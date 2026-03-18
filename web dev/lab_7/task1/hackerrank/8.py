#Set
a = set(map(int, input().split()))
n = int(input())

result = True
for _ in range(n):
    other_set = set(map(int, input().split()))
    if not (a.issuperset(other_set) and len(a) > len(other_set)):
        result = False
        break

print(result)