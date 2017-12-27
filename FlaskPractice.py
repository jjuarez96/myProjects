"""

"""

from flask import Flask, render_template, url_for, request
import time

app = Flask(__name__)


@app.route("/")
def hello():
    file_path = url_for('static', filename='js/test.txt')
    return render_template("index.html",
                           file_path=file_path)


@app.route('/data-1', methods=['GET'])
def data_1():
    return 'GOT THIS DATA FROM A GET CALL'


@app.route('/data-2', methods=['POST'])
def data_2():
    data = request.get_json(silent=True)
    if data.get('text') == 'GOT THIS DATA FROM A GET CALL':
        post_data = request.form['GOT THIS DATA FROM A POST CALL']
        return post_data
    else:
        return 'BOO'


@app.route('/test')
def test():
    return render_template("dialog_box.html")

@app.route('/test1')
def test_one():
    return render_template("test1.html")


if __name__ == "__main__":
    app.run(debug=True)