from typing import Dict, List

from src.insights.jobs import read


def get_unique_industries(path: str) -> List[str]:
    all_industries = read(path)
    list_industrie = set(
        industry["industry"]
        for industry in all_industries if industry["industry"])
    return list_industrie


def filter_by_industry(jobs: List[Dict], industry: str) -> List[Dict]:
    type_industry = list(job for job in jobs if job["industry"] == industry)
    return type_industry
