from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route('/members')
def members():
    return {'members': ['Member1', 'Member2', 'Member3']}


if __name__ == '__main__':
    app.run()