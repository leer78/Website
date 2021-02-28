from flask import Flask, render_template, url_for, request

import smtplib, ssl

from flask_mail import Mail, Message

app = Flask(__name__)

@app.route('/')
@app.route('/aboutMe')
def aboutMe():
    return render_template('aboutMe.html')

@app.route('/buy')
def buy():
    return render_template('buy.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/gallery')
def gallery():
    return render_template('gallery.html')

@app.route('/home')
def home():
    return render_template('home.html')

    


if __name__ == "__main__":
    app.run(debug = True)