import requests

url = "http://127.0.0.1:5000/post_comment"
headers = {"Content-Type": "application/json"}
data = {
    "url": "https://m.facebook.com/login.php?next=https://m.facebook.com/photo.php?fbid=619649686955809&id=100067323485578&set=a.427959162791530&eav=AfYw_vUHK1AKHDVbaShKwCrbjRmhhiaaRO9kFFfrH-W4zn-YFnDB6fH0Zqe-6KxVBMU&paipv=0&source=48",
    "msg": "hhh"
}

response = requests.post(url, headers=headers, json=data)
print(response.text)
