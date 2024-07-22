import csv
from functools import lru_cache
from typing import Dict, List


@lru_cache
def read(path: str) -> List[Dict]:
    with open(path, encoding="utf-8") as jobs_file:
        list_jobs = csv.DictReader(jobs_file, delimiter=",", quotechar='"')
        result = list(list_jobs)
    return result


def get_unique_job_types(path: str) -> List[str]:
    jobs = read(path)
    list_job = set(job["job_type"] for job in jobs)
    return list_job


def filter_by_job_type(jobs: List[Dict], job_type: str) -> List[Dict]:
    type_job = list(job for job in jobs if job['job_type'] == job_type)
    return type_job
