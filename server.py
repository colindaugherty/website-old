from flask import Flask, flash, render_template, request, session, redirect, url_for

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/about")
def about():
    return render_template('coming_soon.html')

@app.route("/about")
def projects():
    return render_template('coming_soon.html')

@app.route("/about")
def portfolio():
    return render_template('coming_soon.html')

@app.route("/about")
def blog():
    return render_template('coming_soon.html')

@app.route("/about")
def contact():
    return render_template('coming_soon.html')


if __name__ == "__main__":
    app.run()
