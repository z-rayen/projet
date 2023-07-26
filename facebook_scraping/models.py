from sqlalchemy import Column, String, TIMESTAMP ,BIGINT, ForeignKey,Integer
from sqlalchemy.orm import declarative_base
from sqlalchemy.orm import relationship
Base = declarative_base()
class pages(Base):
    __tablename__='pages'
    page_id = Column(BIGINT, primary_key=True)
    page_name = Column(String)
    
    def __repr__(self):
        return f"<page(page_id='{self.page_id}', page_name='{self.page_name}')>"


class Post(Base):
    __tablename__ = 'posts'

    post_id = Column(String, primary_key=True)
    post_time = Column(TIMESTAMP)
    page_id = Column(BIGINT, ForeignKey('pages.page_id'))
    post = relationship("pages")

    def __repr__(self):
        return f"<Post(post_id='{self.post_id}', post_time='{self.post_time}')>"

class Reaction(Base):
    __tablename__ = 'reactions'

    reaction_id = Column(BIGINT, primary_key=True)
    reactor_id = Column(String)
    name = Column(String)
    type = Column(String)
    post_id = Column(String, ForeignKey('posts.post_id'))
    post = relationship("Post")

    def __repr__(self):
        return f"<Reaction(reaction_id={self.reaction_id}, reactor_id='{self.reactor_id}', name='{self.name}', type='{self.type}', post_id='{self.post_id}')>"
    
class Comments(Base):
    __tablename__ = 'comments'

    comment_id = Column(String, primary_key=True)
    commenter_id = Column(String)
    commenter_name = Column(String)
    comment_text = Column(String)
    comment_time = Column(TIMESTAMP)
    post_id = Column(String, ForeignKey('posts.post_id'))
    post = relationship("Post")
    comment_reaction_count = Column(Integer)

    def __repr__(self):
        return f"<Comment(comment_id='{self.comment_id}', commenter_id='{self.commenter_id}', commenter_name='{self.commenter_name}', comment_text='{self.comment_text}', comment_time='{self.comment_time}', post_id='{self.post_id}', comment_reaction_count={self.comment_reaction_count})>"