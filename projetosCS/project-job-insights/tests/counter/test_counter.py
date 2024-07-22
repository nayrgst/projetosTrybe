from src.pre_built.counter import count_ocurrences


def test_counter():
    mock = 'data/jobs.csv'
    assert count_ocurrences(mock, "Python") == 1639
    assert count_ocurrences(mock, 'Javascript') == 122
