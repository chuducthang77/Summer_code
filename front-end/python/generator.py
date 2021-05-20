#Generator: Do not store the number in the number in the number
def my_generator():
    for num in range(50):
        yield num**num

generator_var = my_generator()
print(list(generator_var))

for number in generator_var:
    print(number)

#Very interesting example
for number in my_generator():
    print(number)