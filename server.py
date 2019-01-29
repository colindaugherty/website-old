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
    return render_template('projects.html')

@app.route("/blog")
def portfolio():
    return render_template('blog.html')

@app.route("/portfolio")
def blog():
    return render_template('portfolio.html')

@app.route("/contact")
def contact():
    return render_template('contact.html')

@app.route("/social")
def social():
    return render_template('404.html')

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

@app.errorhandler(500)
def server_overloaded(e):
    return render_template('500.html'), 500

if __name__ == "__main__":
    app.run()
