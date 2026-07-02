from models.book import Book
from models.user import Student
from models.user import Staff
from models.user import Librarian
from models.transaction import Transaction
from models.reservation import Reservation
from models.fine import Fine
from services.library import Library


library = Library()

book1 = Book(
    101,
    "Python Programming",
    "Guido"
)

book2 = Book(
    102,
    "Java Fundamentals",
    "James Gosling"
)

library.add_book(book1)
library.add_book(book2)

student = Student(
    1,
    "Bhumika"
)

staff = Staff(
    2,
    "Ashish"
)

librarian = Librarian(
    3,
    "Admin"
)

print("Borrow Limits")

print(
    student.name,
    student.borrow_limit()
)

print(
    staff.name,
    staff.borrow_limit()
)

print(
    librarian.name,
    librarian.borrow_limit()
)

transaction = Transaction()

transaction.issue_book(
    student,
    book1
)

transaction.return_book(
    student,
    book1
)

reservation = Reservation(
    1,
    student,
    4
)

reservation.reserve_seat()

days = 5

fine = Fine.calculate(days)

print(
    f"Fine for {days} days = ₹{fine}"
)

library.show_books()