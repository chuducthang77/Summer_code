class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        print("Wooffffff")

    def eat(self):
        print("I am eating anything")


#Class inheritance
class Dog(Animal):
    def speak(self):
        #Overwrite the function
        print("Wooooooooooo")

    def eat(self):
        #Super method
        super().eat()
        print("I am eating meat")

dog = Dog('Bubble')
dog.eat()