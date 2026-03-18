#Data Types
if __name__ == '__main__':
    n = int(input())
    records = []
    
    for _ in range(n):
        name = input()
        grade = float(input())
        records.append([name, grade])
    
    grades = sorted(set(record[1] for record in records))
    secound = grades[1]
    
    second_low_stu = [record[0] for record in records if record[1] == secound]
    second_low_stu.sort()
    
    for student in second_low_stu:
        print(student)