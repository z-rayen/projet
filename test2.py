import psycopg2 as ps

connection = ps.connect(
    host = 'localhost',
    database='project_db',
    user ='postgres',
    password ='nabta@10102002',
    port = 5433
)
cur=connection.cursor()
create_table_post = '''
    CREATE TABLE IF NOT EXISTS posts (
        post_id TEXT PRIMARY KEY,
        post_time TIMESTAMP,
       
    )
'''
#cur.execute("CREATE TABLE IF NOT EXISTS posts (post_id TEXT PRIMARY KEY,post_time TIMESTAMP)")
cur.execute("CREATE TABLE IF NOT EXISTS reactions (reaction_id BIGSERIAL PRIMARY KEY,reactor_id TEXT,name TEXT,type TEXT,post_id TEXT REFERENCES posts (post_id) )")
"""create_table_comments= '''
CREATE TABLE IF NOT EXISTS comments (
comment_id TEXT PRIMARY KEY, 

commenter_id TEXT,

commenter_name TEXT,
comment_text TEXT,
comment_time TIMESTAMP,
post_id TEXT REFERENCES posts (post_id) ,
comment_reaction_count INTEGER
    )
'''
cur.execute(create_table_comments)
create_table_reaction = '''
CREATE TABLE IF NOT EXISTS reactions (reaction_id BIGSERIAL PRIMARY KEY,reactor_id TEXT,name TEXT,type TEXT,post_id TEXT REFERENCES posts (post_id) )
'''"""
connection.commit()
print ("jawk")



