from flask import Flask, render_template

app = Flask(__name__)

# Home Page Route
@app.route('/')
def home():
    return render_template('index.html')

# Survey Page Route
@app.route('/survey')
def survey():
    return render_template('survey.html')

# Our Therapies Page Route
@app.route('/therapies')
def therapies():
    return render_template('therapiesPage.html')

if __name__ == '__main__':
    app.run(debug=True)