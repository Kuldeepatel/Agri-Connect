from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import tensorflow as tf
from PIL import Image
import io

app = Flask(__name__)
CORS(app)

# Load your trained model
model = tf.keras.models.load_model('model.h5')

# Map class indices to disease names
class_names = ['Apple Scab', 'Black Rot', 'Cedar Apple Rust']  # Update this list based on your model's output classes

def preprocess_image(image):
    image = image.resize((224, 224))
    image = np.array(image)
    image = image / 255.0
    image = np.expand_dims(image, axis=0)
    return image

@app.route('/api/detect', methods=['POST'])
def detect_disease():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    image = Image.open(io.BytesIO(file.read()))
    processed_image = preprocess_image(image)
    prediction = model.predict(processed_image)
    
    # Get the index of the class with the highest probability
    class_index = np.argmax(prediction, axis=1)[0]
    
    # Map the class index to the disease name
    disease_name = class_names[class_index]
    
    return jsonify({'disease': disease_name}), 200

if __name__ == '__main__':
    app.run(debug=True)
