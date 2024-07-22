def exists_word(word, instance):
    result = list()
    for index in range(len(instance)):
        search = instance.search(index)
        data_lines = search['linhas_do_arquivo']
        ocurrences = list()
        for index, lines in enumerate(data_lines):
            if word.lower() in lines.lower():
                ocurrences.append({'linha': index + 1})
        if len(ocurrences) > 0:
            results = {
                'palavra': word,
                'arquivo': search['nome_do_arquivo'],
                "ocorrencias": ocurrences
            }
            result.append(results)
    return result


def search_by_word(word, instance):
    """Aqui irá sua implementação"""
