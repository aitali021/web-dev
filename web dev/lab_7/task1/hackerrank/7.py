#Set
t = int(input())

for _ in range(t):
    input()
    a = set(map(int, input().split()))
    input()
    b = set(map(int, input().split()))
    
    print(a.issubset(b))