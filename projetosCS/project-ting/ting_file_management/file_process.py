import sys

from ting_file_management.file_management import txt_importer


def process(path_file, instance):
    file = txt_importer(path_file)
    result = {
        'nome_do_arquivo': path_file,
        'qtd_linhas': len(file),
        'linhas_do_arquivo': file
    }
    for index in range(len(instance)):
        if instance.search(index)['nome_do_arquivo'] == path_file:
            return None
    instance.enqueue(result)
    sys.stdout.write(f'{result}')


def remove(instance):
    if (len(instance) == 0):
        sys.stdout.write('Não há elementos\n')
        return None
    file = instance.dequeue()['nome_do_arquivo']
    sys.stdout.write(f'Arquivo {file} removido com sucesso\n')


def file_metadata(instance, position):
    try:
        search = instance.search(position)
        sys.stdout.write(f'{search}')
    except IndexError:
        sys.stderr.write('Posição inválida')
