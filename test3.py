"""import sqlite3
conn = sqlite3.connect('comment_react.db')
cursor = conn.cursor()"""
import sqlite3


conn = sqlite3.connect('comment_react.db')

# Create a cursor object
cursor = conn.cursor()
"""
# Create a table to store the comments


cursor.execute(create_table)
""""""

comments_data = [
    {
        'comment_id': '1429608201212132',
        
        'commenter_id': '100067965591238',
       
        'commenter_name': 'Aymen Chtioui',
        'comment_text': 'الماريخوانا؟',
        'comment_time': '2023-06-26 23:31:00',
        
        'comment_reaction_count': 1
    }
]


for comment in comments_data:
    insert_query = '''
        INSERT INTO comments
        (comment_id,  commenter_id, commenter_name,
        comment_text, comment_time, comment_reaction_count)
        VALUES (?, ?, ?, ?, ?, ?)
    '''
    values = (
        comment['comment_id'],  comment['commenter_id'],
         comment['commenter_name'], comment['comment_text'],
        comment['comment_time'], comment['comment_reaction_count']
    )
    cursor.execute(insert_query, values)


# Create a cursor object
cursor = conn.cursor()

# Execute the SELECT query
select_query = "SELECT * FROM comments"
cursor.execute(select_query)

# Fetch all the rows
rows = cursor.fetchall()

# Print the fetched data
for row in rows:
    print(row)
"""
create_table_post = '''
    CREATE TABLE IF NOT EXISTS posts (
        post_id TEXT PRIMARY KEY,
        post_time TIMESTAMP,
       
    )
'''
create_table_comments= '''
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
create_table_reaction = '''
CREATE TABLE IF NOT EXISTS reactions (
    reaction_id TEXT PRIMARY KEY,
    name TEXT,
    type TEXT,
    post_id TEXT REFERENCES posts (post_id) 
    
    )
'''


select_query = "SELECT * FROM comments c , reactions r WHERE r.reaction_id = c.post_id +'_'+c.commenter_id"
cursor.execute(select_query)

# Fetch all the rows
rows = cursor.fetchall()

# Print the fetched data
for row in rows:
    print(row)
conn.commit()
conn.close()
