class Payment:
    def process_payment(self, amount):
        pass


class CreditCard(Payment):
    def process_payment(self, amount):
        print(f"Processing ₹{amount} through Credit Card")


class PayPal(Payment):
    def process_payment(self, amount):
        print(f"Processing ₹{amount} through PayPal")


class UPI(Payment):
    def process_payment(self, amount):
        print(f"Processing ₹{amount} through UPI")


# User Input
amount = float(input("Enter Payment Amount: "))

print("Choose Payment Method:")
print("1. Credit Card")
print("2. PayPal")
print("3. UPI")

choice = int(input("Enter your choice: "))

if choice == 1:
    payment = CreditCard()
elif choice == 2:
    payment = PayPal()
elif choice == 3:
    payment = UPI()
else:
    print("Invalid Choice")
    exit()

# Polymorphism
payment.process_payment(amount)