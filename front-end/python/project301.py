#Project 301: Banking App
#Class Based
# Withdraw and Deposit
# Write the transaction to a python file

class Bank:
    def __init__(self, init=0):
        self.balance = init

    def deposit(self, amount):
        self.balance += amount

    def withdraw(self, amount):
        self.balance -= amount

account = Bank()
while True:
    action = input("What action do you want to take - deposit (d) or withdraw (w): ")
    if action == 'd':
        amount = input('Enter amount you want to deposit: ')
        try:
            amount = float(amount)
        except:
            print("Not a proper amount")
            continue
        account.deposit(amount)

        with open('account.txt', 'a') as file:
            file.write(f"Deposit: {amount}\n")

        print(account.balance)
    elif action == 'w':
        amount = input('Enter amount you want to withdraw: ')
        try:
            amount = float(amount)
        except:
            print("Not a proper amount")
            continue
        account.withdraw(amount)
        with open('account.txt', 'a') as file:
            file.write(f"Withdraw: {amount}\n")

        print(account.balance)