from flask import Flask, jsonify
from flask_cors import CORS  # Import CORS
import random

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Store previous state to track changes
previous_states = {"p": [], "f": [], "e": [], "r": []}


def generate_numbers(numberid):
    if numberid == "p":
        return [2, 3, 5, 7, 11]
    elif numberid == "f":
        return [0, 1, 1, 2, 3, 5, 8]
    elif numberid == "e":
        return [2, 4, 6, 8, 10]
    elif numberid == "r":
        return [random.randint(1, 100) for _ in range(5)]
    return []


@app.route("/numbers/<numberid>", methods=["GET"])
def get_numbers(numberid):
    if numberid not in previous_states:
        return jsonify({"error": "Invalid number ID"}), 400

    new_numbers = generate_numbers(numberid)
    prev_state = previous_states[numberid]
    previous_states[numberid] = new_numbers  # Update state

    avg = sum(new_numbers) / len(new_numbers) if new_numbers else 0

    return jsonify(
        {
            "windowPrevState": prev_state,
            "windowCurrState": new_numbers,
            "numbers": new_numbers,
            "avg": avg,
        }
    )


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
