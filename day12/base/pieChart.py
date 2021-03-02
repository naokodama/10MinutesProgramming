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

LAST_DAY_OF_LAST_MONTH = datetime.date(2021, 1, 31)
FIRST_DAY_OF_NEXT_MONTH = datetime.date(2021, 3, 1)

result = [0, 0, 0, 0, 0]
for node in nodes:
    if not node.get('data-date'):
        continue
    date_str = node.get('data-date')
    level = int(node.get('data-level'))
    date = datetime.datetime.strptime(date_str, '%Y-%m-%d').date()
    if LAST_DAY_OF_LAST_MONTH < date and FIRST_DAY_OF_NEXT_MONTH > date:
        if level == 0:
            result[0] += 1
        elif level == 1:
            result[1] += 1
        elif level == 2:
            result[2] += 1
        elif level == 3:
            result[3] += 1
        elif level == 4:
            result[4] += 1
        else:
            pass

plt.pie(result, colors=["#e1e4e8", "#85e89d", "#34d058", "#22863a", "#144620"])
plt.show()
