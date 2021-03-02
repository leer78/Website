from flask import Flask, render_template, url_for, request


import smtplib
import ssl

from flask_mail import Mail, Message


app = Flask(__name__)
mail = Mail()
mail.init_app(app)


@app.route('/')
@app.route('/aboutMe')
def aboutMe():
    return render_template('aboutMe.html')


@app.route('/buy')
def buy():
    return render_template('buy.html')


@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        name =  str(request.form.get('name'))
        email =  str(request.form.get('mail'))
        message = str(request.form.get('message'))



        f = open("mailList.txt", "a")
        f.write(email)
        f.write("\n")
        f.close()

     
        server = smtplib.SMTP("smtp.gmail.com", 587)
        server.starttls()
        
        server.login("monkeymandan15@gmail.com", "MonkeyMan#15*")  # CHANGE TO ENVIRONMENTAL VARIABLE BEFORE PUSHING

        server.sendmail("monkeymandan15@gmail.com","monkeymandan15@gmail.com", (name +"|"+email + "|"+message)) # Lines used to split them later if needed in data base

        #server.sendmail("monkeymandan15@gmail.com", email, name + ", Thank you for signing up")  -- This one sends the user a message

    return render_template('contact.html')


@app.route('/gallery')
def gallery():
    return render_template('gallery.html')


@app.route('/home')
def home():
    return render_template('home.html')


if __name__ == "__main__":
    app.run(debug=True)
