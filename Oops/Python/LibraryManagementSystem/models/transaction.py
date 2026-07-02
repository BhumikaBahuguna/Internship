from datetime import datetime
class Transaction:

    def issue_book(self, user, book):

        if book.borrow_book():

            with open("records.txt", "a") as file:
                file.write(
                    f"{datetime.now()} : "
                    f"{user.name} issued '{book.title}'\n"
                )

            print(f"{book.title} issued to {user.name}")
            return True

        print("Book not available")
        return False

    def return_book(self, user, book):

        book.return_book()

        with open("records.txt", "a") as file:
            file.write(
                f"{datetime.now()} : "
                f"{user.name} returned '{book.title}'\n"
            )

        print(f"{book.title} returned by {user.name}")
