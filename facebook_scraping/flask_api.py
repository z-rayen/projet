from flask import Flask
import selecteur as sl 
app = Flask(__name__)
@app.route("/posts", methods=['GET'])
def affich_post():
    posts=sl.select_posts()
    return posts

@app.route("/comments", methods=['GET'])
def affich_comments():
    comments=sl.select_comments()
    return comments

@app.route("/reactions", methods=['GET'])
def affich_reactions():
    reactions=sl.select_reactions()
    return reactions

if __name__ == '__main__':
    app.run()