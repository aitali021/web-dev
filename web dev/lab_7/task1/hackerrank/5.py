#Data Types
if __name__ == '__main__':
    n = int(input())
    student_mark = {}
    
    for _ in range(n):
        data = input().split()
        name = data[0]
        marks = list(map(float, data[1:]))
        student_mark[name] = marks
    
    query = input()
    marks = student_mark[query]
    average = sum(marks) / len(marks)
    
    print(f"{average:.2f}")