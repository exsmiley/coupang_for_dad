# app/routes.py

from flask import Blueprint, jsonify, request
import requests

api_blueprint = Blueprint('api', __name__)

@api_blueprint.route('/hello', methods=['GET'])
def hello_world():
    return jsonify(message="Hello, World!")

@api_blueprint.route('/echo', methods=['POST'])
def echo():
    data = request.json
    return jsonify(data)

@api_blueprint.route('/get-recipes', methods=['GET'])
def get_recipes():
    url = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch"
    querystring = {
        "query": "side salad",
        "diet": "vegetarian",
        "intolerances": "gluten",
        "includeIngredients": "cheese,nuts",
        "excludeIngredients": "eggs",
        "instructionsRequired": "true",
        "fillIngredients": "false",
        "addRecipeInformation": "false",
        "addRecipeInstructions": "false",
        "addRecipeNutrition": "false",
        "maxReadyTime": "45",
        "ignorePantry": "true",
        "sort": "max-used-ingredients",
        "offset": "0",
        "number": "10"
    }

    headers = {
        "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "x-rapidapi-key": "33ee2960efmshec60df803b3cbfap1f8843jsn5407f2ebb6ca"
    }

    response = requests.get(url, headers=headers, params=querystring)

    return jsonify(response.json())