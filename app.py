<<<<<<< Updated upstream
from flask import Flask, render_template
=======
import os
from flask import Flask, render_template, request, redirect, url_for, flash
from oauth2client.service_account import ServiceAccountCredentials
import gspread
>>>>>>> Stashed changes

app = Flask(__name__)
app.secret_key = "your_secret_key"  # Required for flash messages

# Google Sheets Setup
scope = ["https://spreadsheets.google.com/feeds", "https://www.googleapis.com/auth/drive"]
creds = ServiceAccountCredentials.from_json_keyfile_name("credentials.json", scope)
client = gspread.authorize(creds)

# Open the Google Spreadsheet
spreadsheet = client.open("Survey Data")  # Change this to match your spreadsheet name

# Get or create the "Booking Schedule" sheet
try:
    booking_sheet = spreadsheet.worksheet("Booking Schedule")
except gspread.exceptions.WorksheetNotFound:
    booking_sheet = spreadsheet.add_worksheet(title="Booking Schedule", rows="100", cols="6")
    booking_sheet.append_row(["Name", "Email", "Phone", "Treatment", "Date", "Notes"])

# Routes
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/survey')
def survey():
    return render_template('survey.html')

<<<<<<< Updated upstream
=======
@app.route('/therapies')
def therapies():
    return render_template('therapiesPage.html')

@app.route('/products')
def products():
    return render_template('productPage.html')

@app.route('/therapies/cryotherapy')
def therapy_cryotherapy():
    return render_template('therapy_cryotherapy.html')

@app.route('/book-appointment')
def booking():
    return render_template('booking.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/faq')
def faq():
    return render_template('faq.html')

@app.route('/submit_booking', methods=['POST'])
def submit_booking():
    try:
        # Debugging: Print form data
        print("Received booking request:", request.form)

        # Get form data
        name = request.form.get('name')
        email = request.form.get('email')
        phone = request.form.get('phone')
        treatment = request.form.get('treatment')
        date = request.form.get('date')
        notes = request.form.get('notes', '')

        # Debugging: Ensure values are not None
        print(f"Name: {name}, Email: {email}, Phone: {phone}, Treatment: {treatment}, Date: {date}, Notes: {notes}")

        if not all([name, email, phone, treatment, date]):
            flash("Error: Missing required fields", "danger")
            return redirect(url_for('booking'))

        # Append data to Google Sheets
        booking_sheet.append_row([name, email, phone, treatment, date, notes])
        flash("Booking Successful!", "success")
    except Exception as e:
        print("Google Sheets Error:", e)
        flash("Error saving data. Please try again.", "danger")

    return redirect(url_for('booking'))

>>>>>>> Stashed changes
if __name__ == '__main__':
    app.run(debug=True)
