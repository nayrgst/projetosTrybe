from src.pre_built.brazilian_jobs import read_brazilian_file


def test_brazilian_jobs():
    mock = "tests/mocks/brazilians_jobs.csv"
    brazilian_file = read_brazilian_file(mock)
    for job in brazilian_file:
        assert "title" in job
        assert "salary" in job
        assert "type" in job
