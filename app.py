import os
from flask import Flask, render_template

app = Flask(__name__)

# Home Page Route
@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')

# Survey Page Route
@app.route('/survey')
def survey():
    return render_template('survey.html')

# Our Therapies Page Route
@app.route('/therapies')
def therapies():
    return render_template('therapiesPage.html')

# Products Page Route
@app.route('/products')
def products():
    return render_template('productPage.html')

# Add this route for the cryotherapy page
@app.route('/therapies/cryotherapy')
def therapy_cryotherapy():
    return render_template('therapy_cryotherapy.html')
@app.route('/book-appointment')
def booking():
    return render_template('booking.html')
@app.route('/about')
def about():
    return render_template('about.html')
    # ... existing imports and code ...

@app.route('/faq')
def faq():
    return render_template('faq.html')

# ... rest of your code ...

if __name__ == '__main__':
    app.run(debug=True)