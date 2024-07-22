from typing import Dict, List, Union

from src.insights.jobs import read


def get_max_salary(path: str) -> int:
    list_salarys = read(path)
    salarys = set(int(salary['max_salary'])
                  for salary
                  in list_salarys if salary['max_salary'].isnumeric())
    result = max(salarys)
    return result


def get_min_salary(path: str) -> int:
    list_salarys = read(path)
    salarys = set(int(salary['min_salary'])
                  for salary
                  in list_salarys if salary['min_salary'].isnumeric())
    result = min(salarys)
    return result


def matches_salary_range(job: Dict, salary: Union[int, str]) -> bool:
    pass


def filter_by_salary_range(
    jobs: List[dict],
    salary: Union[str, int]
) -> List[Dict]:
    """Filters a list of jobs by salary range

    Parameters
    ----------
    jobs : list
        The jobs to be filtered
    salary : int
        The salary to be used as filter

    Returns
    -------
    list
        Jobs whose salary range contains `salary`
    """
    raise NotImplementedError
