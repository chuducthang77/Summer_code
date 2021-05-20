#Final project 201: Work with Pokemon API and display the information
#Ask for user's input
#Create the dynamic URL based on step 1
#Convert JSON to a dictionary
#Print out Pokemon data

import requests
import json
import time


while True:
    user = input("Provide the name of the Pokemon: ")
    url = f"https://pokeapi.co/api/v2/pokemon/{user}"
    req = requests.get(url)
    if req.status_code != 200:
        print("You enter the wrong Pokemon. Please try again")
        continue
    
    pokemon = req.json()
    print('Name of the pokemon: ', pokemon['name'])
    print(f"Abilities of the {pokemon['name']}: ")
    for ability in pokemon['abilities']:
        print(f"\tName of Ability: {ability['ability']['name']}" )
    break