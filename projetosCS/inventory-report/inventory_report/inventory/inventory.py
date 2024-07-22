from csv import DictReader
from json import load

from xmltodict import parse

from inventory_report.reports.complete_report import CompleteReport
from inventory_report.reports.simple_report import SimpleReport


class Inventory:
    @classmethod
    def import_data(self, path, type_report):
        with open(path, encoding='utf-8') as file:
            if '.csv' in path:
                file_report = list(DictReader(
                    file, delimiter=',', quotechar='"'))

            elif '.json' in path:
                file_report = list(load(file))

            else:
                file_report = parse(file.read())['dataset']['record']

            if type_report == 'simples':
                result = SimpleReport.generate(file_report)
            elif type_report == 'completo':
                result = CompleteReport.generate(file_report)

            return result
