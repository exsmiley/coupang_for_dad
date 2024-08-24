from flask import Flask, request
import json
from prompt import extract_data, extract_change_data

app = Flask(__name__)

@app.route("/hello")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/", methods=["GET", "POST"])
def main():
    print("I was called (/)")
    data = extract_data_from_request(request)
    print(data)
    return {
        "username": "bob",
        "theme": "super cool theme",
    }

@app.route("/recipe", methods=["GET", "POST"])
def recipe():
    print("I was called (recipe)")
    data = extract_data_from_request(request)
    print(data)
    return {
        "options": "파인애플 피자\n치즈 피자\n고구마 피자",
    }

@app.route("/ingredients", methods=["GET", "POST"])
def ingredients():
    print("I was called (ingredients)")
    data = extract_data_from_request(request)
    print(data)
    return {
        "ingredients": "토마토\n치즈\n빵",
        "recipe": "super cool recipe",
    }

@app.route("/count", methods=["GET", "POST"])
def product_count():
    print("I was called (count)")
    changes = extract_data_from_request(request)
    print(changes)
    if len(changes) > 0:
        # TODO do changes.
        pass
    return {
        "products": {
            "test": 1,
        },
    }

def extract_data_from_request(req):
    if req.method == "POST":
        content = request.get_json(silent=True)
        content = content.replace("\n", " ")
        jcontent = json.loads(content)
        data = extract_data(jcontent["message"])
        return data
    return None

def extract_change_data_from_request(req):
    if req.method == "POST":
        content = request.get_json(silent=True)
        content = content.replace("\n", " ")
        jcontent = json.loads(content)
        changes = extract_change_data(jcontent["message"])
        return changes
    return []