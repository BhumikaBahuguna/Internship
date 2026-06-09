class Employee:
    def __init__(self,name, employee_id):
        self.name = name
        self.employee_id = employee_id

    def display_info(self):
        print("\nEmployee Details")
        print("Name:", self.name)
        print("Employee ID:", self.employee_id)


name = input("Enter Employee Name: ")
emp_id = int(input("Enter Employee ID: "))

emp = Employee(name, emp_id)
emp.display_info()