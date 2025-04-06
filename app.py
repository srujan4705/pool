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

# Add routes for other therapy pages
@app.route('/therapies/hyperbaric')
def therapy_hyperbaric():
    return render_template('therapy_hyperbaric.html')

@app.route('/therapies/redlight')
def therapy_redlight():
    return render_template('therapy_redlight.html')

@app.route('/therapies/ems')
def therapy_ems():
    return render_template('therapy_ems.html')

@app.route('/therapies/infrared')
def therapy_infrared():
    return render_template('therapy_infrared.html')
@app.route('/products/cryotherapy')
def product_cryo():
    return render_template('product_cryo.html')

@app.route('/products/iqbody')
def product_iqbody():
    return render_template('product_iqbody.html')

@app.route('/products/redlight')
def product_redlight():
    return render_template('product_redlight.html')

@app.route('/products/ems')
def product_ems():
    return render_template('product_ems.html')
@app.route('/products/hyperbaric')
def product_hyperbaric():
    return render_template('product_hyperbaric.html')

@app.route('/products/infrared')
def product_infrared():
    return render_template('product_infrared.html')

@app.route('/book-appointment')
def booking():
    return render_template('booking.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/faq')
def faq():
    return render_template('faq.html')
@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/submit-contact', methods=['POST'])
def submit_contact():
    # Handle contact form submission
    # You can add email notification or database storage logic here
    return redirect(url_for('thank_you'))
@app.route('/request-quote')
def request_quote():
    return render_template('request_quote.html')

@app.route('/submit-quote', methods=['POST'])
def submit_quote():
    # Here you'll handle the form submission
    # You can add email notification or database storage
    return redirect(url_for('thank_you'))

@app.route('/thank-you')
def thank_you():
    return render_template('thank_you.html')

if __name__ == '__main__':
    app.run(debug=True)