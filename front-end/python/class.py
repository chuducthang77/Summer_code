class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        print("Wooffffff")


#Class inheritance
class Dog(Animal):
    pass

dog = Dog('Bubble')
dog.speak()