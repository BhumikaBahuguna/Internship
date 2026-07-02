class Library:

    def __init__(self):
        self.books = []

    def add_book(self, book):
        self.books.append(book)

    def show_books(self):
        for book in self.books:
            book.display()

    def search_book(self, title):
        for book in self.books:
            if book.title.lower() == title.lower():
                return book
        return None