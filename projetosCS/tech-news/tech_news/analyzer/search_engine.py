from datetime import datetime

from ..database import search_news


# Requisito 6
def search_by_title(title):
    search_title = search_news({"title": {"$regex": title, "$options": "i"}})
    return [(news["title"], news["url"]) for news in search_title]


# Requisito 7
def search_by_date(date):
    try:
        format_date = datetime.fromisoformat(date).strftime("%d/%m/%Y")
        result = search_news({"timestamp": format_date})
        return [(news["title"], news["url"]) for news in result]
    except ValueError:
        raise ValueError("Data inválida")


# Requisito 8
def search_by_tag(tag):
    result = search_news({"tags": {"$regex": tag, "$options": "i"}})
    return [(news["title"], news["url"]) for news in result]


# Requisito 9
def search_by_category(category):
    result = search_news({"category": {"$regex": category, "$options": "i"}})
    return [(news["title"], news["url"]) for news in result]
