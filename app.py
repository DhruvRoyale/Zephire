from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.after_request
def after_request(response):
    # Ensure responses aren't cached
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    response.headers['Cache-Control'] = 'public, max-age=0'
    return response

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/dots-and-boxes")
def dotsAndBoxes():
    return render_template("dotsandboxes.html")

@app.route("/connect-four")
def connectFour():
    return render_template("connectfour.html")

@app.route("/tic-tac-toe")
def ticTacToe():
    return render_template("tictactoe.html")

@app.route("/hangman")
def hangman():
    return render_template("hangman.html")

@app.route("/tambola")
def tambola():
    return render_template("tambola.html")