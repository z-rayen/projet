from sqlalchemy import create_engine
from models import Comments ,Reaction,Post , pages
from sqlalchemy.sql import select
import conne
def ajout_page( pg_name):
    if pg_name=='':
        return ("can not add a page without name ! ")
    engine = create_engine(conne.url)
    pages_table = pages.__table__
    with engine.begin() as conn:
        existing_row = conn.execute(
            pages_table.select().where(pages_table.c.page_name == pg_name)
        ).fetchone()

        if existing_row is None:
            insert_query = pages_table.insert().values(
                
                
                page_name= pg_name    
            )
            conn.execute(insert_query)
             
            conn.commit()
            
            return ("page inserted")
        else:
            return ("page exist alredy!!")
def ajout_post(gen,pg_id):
    engine = create_engine(conne.url)
    posts_table = Post.__table__
    with engine.begin() as conn:
        existing_row = conn.execute(
            posts_table.select().where(posts_table.c.post_id == gen['post_id'])
        ).fetchone()

        if existing_row is None:
            insert_query = posts_table.insert().values(
                post_id=gen['post_id'],
                post_time=gen['time'],
                page_id=pg_id
            )
            conn.execute(insert_query)
            print("Post inserted")
            conn.commit()
            print("Post inserted")
        else:
            print("Post exists")
def ajout_comments(gen):
    comments_data = gen['comments_full']

    engine = create_engine(conne.url) 
    

    comments_table = Comments.__table__

    with engine.begin() as conn:
        for comment in comments_data:
            existing_row = conn.execute(
                comments_table.select().where(comments_table.c.comment_id == comment['comment_id'])
            ).fetchone()

            if existing_row is None:
                insert_query = comments_table.insert().values(
                    comment_id=comment['comment_id'],
                    commenter_id=comment['commenter_id'],
                    commenter_name=comment['commenter_name'],
                    comment_text=comment['comment_text'],
                    comment_time=comment['comment_time'],
                    comment_reaction_count=comment['comment_reaction_count'],
                    post_id=gen['post_id']
                )
                conn.execute(insert_query)
                print("Comment inserted")
                
            else:
                print("Comment exists")
        conn.commit()
def ajout_reaction(gen):
    engine = create_engine(conne.url)
    reactions_table = Reaction.__table__
    with engine.begin() as conn:
        post_id = gen['post_id']
        reactors = gen['reactors']
        for reactor in reactors:
            if "?id=" in reactor['link']:
                start_index = reactor['link'].find("?id=") + len("?id=")
                end_index = reactor['link'].find("&")
                reactor_id = reactor['link'][start_index:end_index]
            else:
                end_index = reactor['link'].find("?eav")
                reactor_id = reactor['link'][21:end_index]

            existing_row = conn.execute(
                reactions_table.select()
                .where(reactions_table.c.reactor_id == reactor_id)
                .where(reactions_table.c.post_id == post_id)
            ).fetchone()

            if existing_row is None:
                insert_query = reactions_table.insert().values(
                    reactor_id=reactor_id,
                    name=reactor['name'],
                    type=reactor['type'],
                    post_id=post_id
                )
                conn.execute(insert_query)
                print("Reaction inserted")
            else:
                print("Reaction exists")

        conn.commit() 