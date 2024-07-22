import pytest

from challenges.challenge_encrypt_message import encrypt_message


def test_encrypt_message():
    assert encrypt_message("RRYYAN", -1) == "NAYYRR"
    assert encrypt_message("RRYYAN", 2) == "NAYY_RR"
    assert encrypt_message("RRYYAN", 3) == "YRR_NAY"
    with pytest.raises(TypeError, match="tipo inválido para key"):
        encrypt_message("NAYYRR", "1")
    with pytest.raises(TypeError, match="tipo inválido para message"):
        encrypt_message(20, 1)
