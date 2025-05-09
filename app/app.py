from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


people = [
    {'id': 1, 'first_name': 'Alice', 'last_name': 'Durand', 'email': 'alice@example.com'},
    {'id': 2, 'first_name': 'Bob', 'last_name': 'Martin', 'email': 'bob@example.com'},
]

@app.route('/api/people', methods=['GET'])
def get_people():
    return jsonify(people)

@app.route('/api/people/<int:person_id>', methods=['GET'])
def get_person(person_id):
    person = next((p for p in people if p['id'] == person_id), None)
    if person:
        return jsonify(person)
    return jsonify({'error': 'Not found'}), 404

@app.route('/api/people', methods=['POST'])
def create_person():
    data = request.json
    new_id = max(p['id'] for p in people) + 1 if people else 1
    person = {
        'id': new_id,
        'first_name': data['first_name'],
        'last_name': data['last_name'],
        'email': data['email']
    }
    people.append(person)
    return jsonify(person), 201

if __name__ == '__main__':
    app.run(debug=True)
