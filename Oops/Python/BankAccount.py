class BankAccount:
    # Constructor
    def __init__(self, account_holder):
        self.account_holder = account_holder
        self.__balance = 0  # Private attribute

    # Deposit money
    def deposit(self, amount):
        self.__balance += amount
        print(f"₹{amount} deposited successfully.")

    # Withdraw money
    def withdraw(self, amount):
        if amount <= self.__balance:
            self.__balance -= amount
            print(f"₹{amount} withdrawn successfully.")
        else:
            print("Insufficient Balance!")

    # Display balance
    def get_balance(self):
        return self.__balance


# User Input
holder = input("Enter Account Holder Name: ")

# Create Account Object
account = BankAccount(holder)

# Deposit Amount
deposit_amount = float(input("Enter amount to deposit: "))
account.deposit(deposit_amount)

# Withdraw Amount
withdraw_amount = float(input("Enter amount to withdraw: "))
account.withdraw(withdraw_amount)

# Display Account Details
print("\n--- Account Details ---")
print("Account Holder:", account.account_holder)
print("Current Balance: ₹", account.get_balance())