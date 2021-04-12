from flask import Flask, render_template, url_for, request


import smtplib
import ssl

from flask_mail import Mail, Message
from email.mime.text  import MIMEText
from email.mime.multipart import MIMEMultipart


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
        subject = str(request.form.get('subject'))
        message = str(request.form.get('message'))

        msg = MIMEMultipart("alternative")
        msg["Subject"] = subject
        msg["From"] = "monkeymandan15@gmail.com"
        msg["To"] = "email2074@gmail.com"

        companyName = " JWag Pics"
        html = """\
            <html>
            <body>
                <p>Hi, {companyName} <br> 
                {name} at {email} writes {subject}<br>
                {message}
                </p>
            </body>
            </html>
            """.format(companyName = companyName, name = name, email = email, subject = subject, message = message)
        part1 = MIMEText(html, "html")

        msg.attach(part1)


        f = open("mailList.txt", "a")
        f.write(email)
        f.write("\n")
        f.close()

     
        server = smtplib.SMTP("smtp.gmail.com", 587)
        server.starttls()
        
        server.login("monkeymandan15@gmail.com", "MonkeyMan#15*")  # CHANGE TO ENVIRONMENTAL VARIABLE BEFORE PUSHING

        #server.sendmail("monkeymandan15@gmail.com","email2074@gmail.com", (name + ', '+email + ", <br>"+subject + '<br> message')) # Lines used to split them later if needed in data base

        #server.sendmail("monkeymandan15@gmail.com", email, name + ", Thank you for signing up")  -- This one sends the user a message

        server.sendmail("monkeymandan15@gmail.com","email2074@gmail.com", msg.as_string())
    return render_template('contact.html')


@app.route('/gallery')
def gallery():
    return render_template('gallery.html')


@app.route('/home')
def home():
    return render_template('home.html')

if __name__ == "__main__":
    app.run(debug=True)
