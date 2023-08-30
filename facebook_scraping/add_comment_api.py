
from selenium import webdriver
import time
from flask import Flask , request , jsonify
import conne
app = Flask(__name__)

def put_comment(postURL,comment_txt):
    browser = webdriver.Chrome("C:/Users/rayen/Downloads/chromedriver-win64/chromedriver-win64/chromedriver.exe")
    
    browser.get(postURL)
    userIdField = browser.find_element("id","m_login_email")
    passwordField = browser.find_element("id","m_login_password")
    loginButton = browser.find_elements("tag name","button")[0]
    userIdField.send_keys(conne.user)
    passwordField.send_keys(conne.fb_password)
    loginButton.click()
    time.sleep(10)
    commentBox = browser.find_element("id","composerInput")
    commentBox.send_keys(comment_txt)
    sendButton = browser.find_elements("tag name","button")[0]
    time.sleep(10)
    sendButton.click()
    browser.quit()
    
@app.route('/post_comment' , methods=['POST'])
def api_post_comment():
    data = request.json
    postURL=data['url']
    comment_txt=data['msg']
    put_comment(postURL,comment_txt)
    return jsonify({"message": "Comment posted successfully!"})
    
if __name__ == '__main__':
    app.run()