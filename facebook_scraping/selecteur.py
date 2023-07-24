import conne
from flask import  jsonify

def select_posts():
    db_connection=conne.connection()
    cursor = db_connection.cursor()
    cursor.execute("SELECT * FROM posts")
    data = cursor.fetchall()
    cursor.close()
    return jsonify(data)


def select_comments():
    db_connection=conne.connection()
    cursor = db_connection.cursor()
    cursor.execute("SELECT * FROM comments")
    data = cursor.fetchall()
    cursor.close()
    return jsonify(data)

def select_reactions():
    db_connection=conne.connection()
    cursor = db_connection.cursor()
    cursor.execute("SELECT * FROM reactions")
    data = cursor.fetchall()
    cursor.close()
    return jsonify(data)