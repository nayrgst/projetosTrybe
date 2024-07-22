import re
import time

import requests
from bs4 import BeautifulSoup
from parsel import Selector

from .database import create_news


# Requisito 1
def fetch(url):
    time.sleep(1)

    try:
        response = requests.get(
            url, headers={"user-agent": "Fake user-agent"}, timeout=3
        )
        response.raise_for_status()
        return response.text
    except (requests.HTTPError, requests.ReadTimeout):
        return None


# Requisito 2
def scrape_updates(html_content):
    time.sleep(1)

    selector = Selector(html_content)
    return selector.css(".entry-title a::attr(href)").getall()


# Requisito 3
def scrape_next_page_link(html_content):
    time.sleep(1)

    selector = Selector(html_content)
    return selector.css("a.next::attr(href)").get()


# Requisito 4
def scrape_news(html_content):
    time.sleep(1)

    selector = Selector(html_content)
    url = selector.css("link[rel='canonical']::attr(href)").get()
    title = selector.css(".entry-title::text").get()
    title = BeautifulSoup(title, "lxml").get_text(strip=True)
    timestamp = selector.css(".meta-date::text").get()
    writer = selector.css(".url::text").get()
    comments = len(selector.css(".post-comments .title-block::text").getall())
    summary = selector.css(".entry-content p").getall()
    summary = re.sub("<[^>]+?>", "", summary[0])
    summary = re.sub("&amp;", "&", summary)
    summary = BeautifulSoup(summary, "lxml").get_text(strip=True)
    tags = selector.css("section.post-tags a::text").getall()
    category = selector.css(".category-style .label::text").get()

    result = {
        "url": url,
        "title": title,
        "timestamp": timestamp,
        "writer": writer,
        "comments_count": comments,
        "summary": summary,
        "tags": tags,
        "category": category,
    }
    return result


# Requisito 5
def get_tech_news(amount):
    time.sleep(1)

    url = "https://blog.betrybe.com"
    news = []
    index = 0
    while index < amount:
        fetch_url = fetch(url)
        scraped_up = scrape_updates(fetch_url)
        for new in scraped_up:
            fetch_news = fetch(new)
            news.append(scrape_news(fetch_news))
            index += 1
            if index == amount:
                break
        url = scrape_next_page_link(fetch_url)
    create_news(news)
    return news
