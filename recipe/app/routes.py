from flask import Blueprint, jsonify, request

api_blueprint = Blueprint('api', __name__)

@api_blueprint.route('/hello', methods=['GET'])
def hello_world():
    return jsonify(message="Hello, World!")

@api_blueprint.route('/echo', methods=['POST'])
def echo():
    data = request.json
    return jsonify(data)