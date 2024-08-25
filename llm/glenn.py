import requests

def send_dish_to_screen(dish_id):
    r = requests.get("https://us-central1-hackseoul20241.cloudfunctions.net/api/dish?dish_id=" + str(dish_id))
    print(r.text)

def trigger_ingredients():
    r = requests.get("https://us-central1-hackseoul20241.cloudfunctions.net/api/ingredients")
    print(r.text)

def confirm_him():
    r = requests.get("https://us-central1-hackseoul20241.cloudfunctions.net/api/confirm")
    print(r.text)

def finish_him():
    r = requests.get("https://us-central1-hackseoul20241.cloudfunctions.net/api/reset")
    print(r.text)
