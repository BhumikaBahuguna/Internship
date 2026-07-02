class Book:

    def __init__(self, book_id, title, author):
        self.book_id = book_id
        self.title = title
        self.author = author
        self.__available = True

    def is_available(self):
        return self.__available

    def borrow_book(self):
        if self.__available:
            self.__available = False
            return True
        return False

    def return_book(self):
        self.__available = True

    def display(self):
        status = "Available" if self.__available else "Issued"
        print(f"{self.book_id} | {self.title} | {self.author} | {status}")