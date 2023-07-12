import facebook_scraper as fs
import insert as ins       
for post in fs.get_posts('mosaiquefm',  cookies='C:/Users/rayen/Desktop/project/www.facebook.com_cookies.txt',options={"comments":True, "reactors": True}):
    ins.ajout_post(post)
    ins.ajout_reaction(post)
    ins.ajout_comments(post)
