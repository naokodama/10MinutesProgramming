# -*- coding: utf-8 -*-
import sys
import requests
from bs4 import BeautifulSoup

url = "https://cookpad.com/recipe/1051640"
html = requests.get(url)
soup = BeautifulSoup(html.content, "html.parser")

nodes = soup.select("div [class*='ingredient']")

print(nodes)
