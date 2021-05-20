import requests
import time
import json

# Check the status of the api request
while True:
    req = requests.get("https://swapi.dev/api/planets/3")
    print(req.status_code)
    if req.status_code != 200:
        pass
    else:
        break
    time.sleep(3)

#Json API request
req = requests.get("https://swapi.dev/api/planets/3")
person = req.json()
print(person)
print(f"Name is {person['name']}")

#Json load: from string to dictionary and vice versa
person = json.dumps(person) #from dictionary to string
print(person)
person = json.loads(person) #from string to dictionary
print(person['name'])
