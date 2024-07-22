from collections import Counter

from inventory_report.reports.simple_report import SimpleReport


class CompleteReport(SimpleReport):
    @classmethod
    def generate(self, product):
        result = super().generate(product)
        products = Counter(item['nome_da_empresa'] for item in product)
        stock_products = ''

        for company in products:
            stock_products += f'- {company}: {products[company]}\n'

        return (
            f"{result}\n"
            f"Produtos estocados por empresa:\n"
            f"{stock_products}"
        )
