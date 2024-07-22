import statistics
from datetime import datetime


class SimpleReport:
    @classmethod
    def generate(self, products):
        previously = min([old['data_de_fabricacao'] for old in products])
        today = datetime.now().isoformat()
        validate = min(
            [valid['data_de_validade']
             for valid in products
             if valid['data_de_validade'] > today])
        companys = [company['nome_da_empresa'] for company in products]
        result = statistics.mode(companys)
        return (
            f"Data de fabricação mais antiga: {previously}\n"
            f"Data de validade mais próxima: {validate}\n"
            f"Empresa com mais produtos: {result}"
        )
