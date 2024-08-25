from difflib import SequenceMatcher

def similar(a, b):
    return SequenceMatcher(None, a, b).ratio()

korean_dishes = {
    637440: "Chapchae (Korean Stir-Fried Noodles)",
    649040: "Korean Chicken Stew",
    649062: "Korean Perilla Pesto",
    649030: "Korean Beef Rice Bowl",
    644135: "Galbi Tang (Korean Beef Short Ribs Soup)",
    649066: "Korean Potato Salad",
    648975: "Kkaetnip Jangajji (Korean Pickled Perilla Leaves)",
    641565: "Donkatsu - Korean Breaded Pork Cutlet",
    634965: "Bibimbab (Korean Rice w Vegetables & Beef)",
    648910: "Kimchi",
    649029: "Korean Bibim Naengmyeon (Spicy Buckwheat Noodles)",
    649077: "Korean-Style Hamburg Steak w Tomato Gravy",
    661117: "Spicy Korean Bbq Pork"
}

for k, v in korean_dishes.items():
    korean_dishes[k] = v.lower()

def dish_and_id(dish_name):
    dish_name = dish_name.lower()
    best_score = 0
    best_match = None
    for k, v in korean_dishes.items():
        if dish_name in v:
            return (k, v)
        sim_score = similar(dish_name, v)
        if sim_score > best_score:
            best_score = sim_score
            best_match = (k, v)
    print(best_score, dish_name, best_match)
    if best_score < 0.5:
        return (None, None)
    return best_match
