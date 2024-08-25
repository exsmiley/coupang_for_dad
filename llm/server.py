from flask import Flask, request
import json
from prompt import extract_data, extract_change_data
from glenn import trigger_ingredients, finish_him, confirm_him

app = Flask(__name__)

@app.route("/hello")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/", methods=["GET", "POST"])
def main():
    print("I was called (/)")
    data = extract_data_from_request(request)
    print("START", data)
    return {
        "username": "bob",
        "theme": "super cool theme",
    }

@app.route("/recipe", methods=["GET", "POST"])
def recipe():
    print("I was called (recipe)")
    data = extract_data_from_request(request)
    print("MAIN DISH", data)
    return {
        "options": "파인애플 피자\n치즈 피자\n고구마 피자",
    }

@app.route("/ingredients", methods=["GET", "POST"])
def ingredients():
    print("I was called (ingredients)")
    data = extract_data_from_request(request)
    trigger_ingredients()
    print("WITH INGREDIENTS", data)
    return {
        "ingredients": "토마토\n치즈\n빵",
        "recipe": "super cool recipe",
    }

@app.route("/count", methods=["GET", "POST"])
def product_count():
    print("I was called (count)")
    changes = extract_change_data_from_request(request)
    if len(changes) > 0:
        # TODO do changes.
        print("CHANGE", changes)
        pass
    return {
        "products": {
            "test": 1,
        },
    }

@app.route("/confirm", methods=["GET", "POST"])
def confirm():
    print("I was called (confirm)")
    confirm_him()
    return {
        "username": "bob",
        "theme": "super cool theme",
    }

@app.route("/done", methods=["GET", "POST"])
def done():
    print("I was called (done)")
    finish_him()
    return {
        "username": "bob",
        "theme": "super cool theme",
    }

def extract_data_from_request(req):
    if req.method == "POST":
        content = request.get_json(silent=True)
        if type(content) == str:
            content = content.replace("\n", " ")
            jcontent = json.loads(content)
        else:
            jcontent = content
        data = extract_data(jcontent["message"])
        return data
    return None

def extract_change_data_from_request(req):
    if req.method == "POST":
        content = request.get_json(silent=True)
        if type(content) == str:
            content = content.replace("\n", " ")
            jcontent = json.loads(content)
        else:
            jcontent = content
        changes = extract_change_data(jcontent["message"])
        return changes
    return []