# PlaywrightKube
![pyversions](https://img.shields.io/pypi/pyversions/scrapy-playwright.svg)
PlaywrightKube exposes an express API endpoint to interact with playwright. it enable integration of highly available and scalable playwright cluster with the requests, scrapy for JS rendering.

## Usage 
```python
import requests

# Make a POST request to the endpoint with the Request payload
url = "http://localhost:8000/"
payload = {
    "url": "https://www.example.com",
}

# Send the request
response = requests.post(url, json=payload)

# Access the response data
data = response.json()
print(data)

```
## Extra arguments 
```python
import requests

# Make a POST request to the endpoint with the Request payload
url = "http://localhost:8000/"
payload = {
    "url": "https://www.example.com",
    # xpath or css selector
    "wait_until": "selector",
    # selector timeout (milliseconds)
    "timeout": 1000,
    # explicit wait after page loaded (milliseconds)
    "wait_for": 5000,
    # block images loading
    "images_enabled": False
}

# Send the request
response = requests.post(url, json=payload)

# Access the response data
data = response.json()
print(data)

```


## Contributions
Contributions are welcome! If you have an idea for a new feature or find a bug, please open an issue or submit a pull request.

