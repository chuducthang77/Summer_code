#Arguments
def random_function(name, *args):
    print(args)
    print(type(args))

random_function('Hello', 'my', 'name', 'is')

#Key word arguments
def another_function(name, age, *args, **kwargs):
    print(kwargs)
    print(type(kwargs))

another_function('Thang', 10, 10, 10, 10, 10)