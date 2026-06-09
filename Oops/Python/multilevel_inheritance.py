class Person:
    def __init__(self, name):
        self.name = name

    def display_person(self):
        print("\nPerson Details")
        print("Name:", self.name)


class Employee(Person):
    def __init__(self, name, emp_id):
        super().__init__(name)
        self.emp_id = emp_id

    def display_employee(self):
        print("\nEmployee Details")
        print("Name:", self.name)
        print("Employee ID:", self.emp_id)


class Manager(Employee):
    def __init__(self, name, emp_id, department):
        super().__init__(name, emp_id)
        self.department = department

    def display_manager(self):
        print("\nManager Details")
        print("Name:", self.name)
        print("Employee ID:", self.emp_id)
        print("Department:", self.department)


# User Input
name = input("Enter Name: ")
emp_id = input("Enter Employee ID: ")
department = input("Enter Department: ")

# Create Manager Object
manager = Manager(name, emp_id, department)

# Call all methods
manager.display_person()
manager.display_employee()
manager.display_manager()