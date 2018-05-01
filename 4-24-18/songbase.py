from flask import Flask, redner_template
app = Flask(__name__)


@app.route('/')
def index():
    return "hello world"

@app.route('/users/<string:username>')
def users(username):
    return "<h1>hello %s<h1>" % username

if __name__ == '__main__':
    app.run()
