from flask import Flask, flash, render_template, request, session, redirect, url_for

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/about")
def about():
    return render_template('about.html')

@app.route("/projects")
def projects():
    return render_template('coming_soon.html')

@app.route("/blog")
def portfolio():
    return render_template('coming_soon.html')

@app.route("/portfolio")
def blog():
    return render_template('coming_soon.html')

@app.route("/contact")
def contact():
    return render_template('coming_soon.html')


if __name__ == "__main__":
    app.run()
