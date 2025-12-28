from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return jsonify({"message": "Hello from Flask Backend!"})

@app.route('/api/data')
def get_data():
    return jsonify({"data": [1, 2, 3, 4, 5]})

if __name__ == "__main__":
    # Run on port 5000, accessible externally
    app.run(host="0.0.0.0", port=5000)