#Decorator: Using decorator is a new way to call function in another function
def decorator_function(func):
    def execute():
        print("this is before execution")
        func()
        print("this is after execution")
    return execute

@decorator_function
def function():
    print('Hello world')

function()
print('---------------')
decorator_function(function())