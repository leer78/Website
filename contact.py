import smtplib, ssl

from flask import Flask, render_template, url_for, request

from flask_mail import Mail, Message

app = Flask(__name__)


@app.route('/contact', methods = ['GET', 'POST'])

def contact():
    if request.method == 'POST':
        name = str(request.form.get('name'))
        email = str(request.form.get('email'))
        message = str(request.form.get('message'))



        smtp_server = "smtp.gmail.com"
        sender_email = "monkeymandan15@gmail.com" 
        receiver_email = "email2074@gmail.com" 
        password = "MonkeyMan#15*"
        content = 'Subject: {​​}​​\n\n{​​}​​'.format("Finally", (name+" contacted McMaster Rocketry by "+email+". Their message is as follows: \n\n"+message))

        port = 465  # For SSL
        
        context = ssl.create_default_context()

        with smtplib.SMTP_SSL(smtp_server, port, context=context) as server:
            server.login(sender_email, password)
            server.sendmail(sender_email, receiver_email, content)

    return render_template('contact.html')


if __name__ == "__main__":
    app.run(debug = True)