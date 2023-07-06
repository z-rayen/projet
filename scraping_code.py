import facebook_scraper as fs


import psycopg2 as ps

conn = ps.connect(
    host = 'localhost',
    database='project_db',
    user ='postgres',
    password ='nabta@10102002',
    port = 5433
)


# Create a cursor object
cursor = conn.cursor()
def ajout_comments(gen):
     comments_data=gen['comments_full']
     for comment in comments_data:
          cursor.execute("SELECT * FROM comments WHERE comment_id = %s", (comment['comment_id'],))
          existing_row = cursor.fetchone()

          if existing_row is None:
               insert_query = '''
                    INSERT INTO comments
                    (comment_id,  commenter_id, commenter_name,
                    comment_text, comment_time, comment_reaction_count,post_id)
                    VALUES (%s, %s, %s, %s, %s,%s, %s)
               '''
               values = (
                    comment['comment_id'],  comment['commenter_id'],
                    comment['commenter_name'], comment['comment_text'],
                    comment['comment_time'], comment['comment_reaction_count'],gen['post_id']
               )
               cursor.execute(insert_query, values)
               print("comment inserre")
               conn.commit()
          else:
               print("cemment exist") 
               
def ajout_post(gen):
     cursor.execute("SELECT * FROM posts WHERE post_id = %s", (gen['post_id'],))
     existing_row = cursor.fetchone()

     if existing_row is None:
          insert = '''
               INSERT INTO posts
               ( post_id, post_time)
               VALUES (%s, %s)
          '''
          values = (
               gen['post_id'],
               gen['time']
          )
          cursor.execute(insert, values)
          print("post inserre")
          conn.commit()
     else:
               print("post  exist")
def ajout_raction(gen):
     post_id=gen['post_id']
     reactors=gen['reactors']
     for reactor in reactors :
          if reactor['link'].find("?id=") >0:
               start_index = reactor['link'].find("?id=") + len("?id=")
               end_index = reactor['link'].find("&")
               reactor_id = reactor['link'][start_index:end_index]
          else :
               end_index = reactor['link'].find("?eav")
               reactor_id = reactor['link'][21:end_index]

          cursor.execute("SELECT * FROM reactions WHERE reactor_id = %s AND post_id = %s ", (reactor_id , post_id,))
          existing_row = cursor.fetchone()

          if existing_row is None:
          
               insert = '''
                    INSERT INTO reactions
                    ( reactor_id,
                    name,
                    type,
                    post_id)
                    VALUES (%s, %s,%s, %s)
               '''
               values = (
                    reactor_id,
                    reactor['name'],
                    reactor['type'],
                    post_id
               )
               cursor.execute(insert, values)
               print("reaction inserre")
               conn.commit()
          else:
               print("reaction  exist")

for post in fs.get_posts('mosaiquefm',  cookies='C:/Users/rayen/Desktop/project/www.facebook.com_cookies.txt',options={"comments":True, "reactors": True}):
    ajout_post(post)
    ajout_comments(post)
    ajout_raction(post)


     
conn.close()
