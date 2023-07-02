# RenderIO
![pyversions](https://img.shields.io/pypi/pyversions/scrapy-playwright.svg)<br>
RenderIO exposes an express API endpoint to interact with playwright. it enable integration of highly available and scalable playwright cluster with the requests, scrapy for JS rendering.

## Features
- Optimized for high concurrency using asynchronous programming
- Uses Playwright-extra stealth plugin for avoid detection
- Built-in ad-blocker


## Usage 
```python
import requests

# Make a POST request to the endpoint with the Request payload
url = "http://clusterIP/"
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
url = "http://clusterIP/"
payload = {
    "url": "https://www.example.com",
    # wait for element
    "wait_until": {"selector": "//html", "timeout": 30000, "state": "visible"},
    # explicit wait after page loaded (milliseconds)
    "wait_for": 5000,
    # block images loading
    "images_enabled": False,
    "ads_enabled": False
}

# Send the request
response = requests.post(url, json=payload)

# Access the response data
data = response.json()
print(data)

```


## Contributions
Contributions are welcome! If you have an idea for a new feature or find a bug, please open an issue or submit a pull request.

