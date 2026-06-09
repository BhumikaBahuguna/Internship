class Book:
    # Constructor
    def __init__(self, title, author, price):
        self.title = title
        self.author = author
        self.price = price

    # Method to display book details
    def display_details(self):
        print("\nBook Details")
        print("Title :", self.title)
        print("Author:", self.author)
        print("Price :", self.price)


# Input details for Book 1
print("Enter details for Book 1")
title1 = input("Enter Title: ")
author1 = input("Enter Author: ")
price1 = float(input("Enter Price: "))

# Create Book 1 object
book1 = Book(title1, author1, price1)

# Input details for Book 2
print("\nEnter details for Book 2")
title2 = input("Enter Title: ")
author2 = input("Enter Author: ")
price2 = float(input("Enter Price: "))

# Create Book 2 object
book2 = Book(title2, author2, price2)

# Display details of both books
print("\n--- Book Information ---")
book1.display_details()
book2.display_details()