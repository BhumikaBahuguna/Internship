class Student:
    # Constructor
    def __init__(self):
        self.__marks = 0   # Private variable

    # Setter method
    def set_marks(self, marks):
        if 0 <= marks <= 100:
            self.__marks = marks
            print("Marks updated successfully.")
        else:
            print("Invalid Marks! Marks should be between 0 and 100.")

    # Getter method
    def get_marks(self):
        return self.__marks


# Create object
student = Student()

# Take user input
marks = int(input("Enter marks (0-100): "))

# Set marks
student.set_marks(marks)

# Get marks
print("Student Marks:", student.get_marks())