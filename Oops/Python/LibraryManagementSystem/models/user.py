class User:

    def __init__(self, user_id, name):
        self.user_id = user_id
        self.name = name

    def borrow_limit(self):
        return 0


class Student(User):

    def borrow_limit(self):
        return 3


class Staff(User):

    def borrow_limit(self):
        return 5


class Librarian(User):

    def borrow_limit(self):
        return 10