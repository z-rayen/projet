import facebook_scraper as fs
import insert as ins
import conne
db_connection=conne.connection()
cursor = db_connection.cursor()
cursor.execute("SELECT * FROM pages")
pages = cursor.fetchall()
cursor.close()
for page in pages:
    for post in fs.get_posts(page[1],  cookies='C:/Users/rayen/Desktop/project/www.facebook.com_cookies.txt',options={"comments":True, "reactors": True}):
        ins.ajout_post(post,page[0])
        ins.ajout_reaction(post)
        ins.ajout_comments(post)
