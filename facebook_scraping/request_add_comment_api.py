import requests

url = "http://127.0.0.1:5000/post_comment"
headers = {"Content-Type": "application/json"}
data = {
    "id": "1492170461538289",
    "msg": "<3"
}

response = requests.post(url, headers=headers, json=data)
print(response.text)
