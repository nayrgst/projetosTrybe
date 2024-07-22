from src.pre_built.sorting import sort_by


def test_sort_by_criteria():
    mock = [
        {
            'title': "dev",
            'min_salary': 3200,
            'max_salary': 4000,
            'date_posted': '2021-05-03'
        },
        {
            'title': "police",
            'min_salary': 3000,
            'max_salary': 4000,
            'date_posted': '2021-06-12'
        },
        {
            'title': "sheik",
            'min_salary': 3000000,
            'max_salary': 999999999999999999,
            'date_posted': '2022-11-18'
        }
    ]

    sort_by(mock, 'min_salary')
    assert mock[0]['min_salary'] == 3000
    sort_by(mock, 'max_salary')
    assert mock[0]['max_salary'] == 999999999999999999
    sort_by(mock, 'date_posted')
    assert mock[0]['date_posted'] == "2022-11-18"
