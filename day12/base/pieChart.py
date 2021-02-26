# -*- coding: utf-8 -*-
import sys
import requests
from bs4 import BeautifulSoup
import datetime
import matplotlib.pyplot as plt

url = "https://github.com/naokodama"
html = requests.get(url)
soup = BeautifulSoup(html.content, "html.parser")

nodes = soup.select("rect[class*='ContributionCalendar-day']")
# nodes = soup.select("rect")

print(nodes)
