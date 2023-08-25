import conne
from flask import  jsonify
def select_pages():
    db_connection=conne.connection()
    cursor = db_connection.cursor()
    cursor.execute("SELECT * FROM pages")
    data = cursor.fetchall()
    cursor.close()
    return jsonify(data)

def select_posts(page_id):
    db_connection=conne.connection()
    cursor = db_connection.cursor()
    query = "SELECT * FROM posts WHERE posts.page_id = %s"
    cursor.execute(query, (page_id,))
    data = cursor.fetchall()
    cursor.close()
    return jsonify(data)


def select_comments(post_id):
    p_id=str(post_id)
    db_connection=conne.connection()
    cursor = db_connection.cursor()
    query = "SELECT * FROM comments WHERE comments.post_id = %s"
    cursor.execute(query, (p_id,))
    data = cursor.fetchall()
    cursor.close()
    return data

def select_reactions(post_id):
    p_id=str(post_id)
    db_connection=conne.connection()
    cursor = db_connection.cursor()
    query = "SELECT * FROM reactions WHERE reactions.post_id = %s"
    cursor.execute(query, (p_id,))
    data = cursor.fetchall()
    cursor.close()
    return jsonify(data)