import csv
from collections import Counter
from os import path


def most_requested_food(client, orders):
    client_foods = [order[1] for order in orders if order[0] == client]
    return Counter(client_foods).most_common(1)[0][0]


def count_food(client, food, orders):
    return sum(
        1 for order in orders if order[0] == client and order[1] == food)


def unordered_foods(client, orders):
    all_foods = set(order[1] for order in orders)
    client_foods = set(order[1] for order in orders if order[0] == client)
    return all_foods.difference(client_foods)


def never_visited_days(client, orders):
    all_days = set(order[2] for order in orders)
    client_days = set(order[2] for order in orders if order[0] == client)
    return all_days.difference(client_days)


def analyze_log(path_to_file):
    if '.csv' not in path_to_file:
        raise FileNotFoundError(f"Extensão inválida: {path_to_file}")
    if not path.exists(path_to_file):
        raise FileNotFoundError(f'Arquivo inexistente: {path_to_file}')

    with open(path_to_file) as file:
        orders = list(csv.reader(file))
        client_requested_food = most_requested_food('maria', orders)
        client_food_count = count_food('arnaldo', 'hamburguer', orders)
        client_unordered_foods = unordered_foods('joao', orders)
        client_never_visited_days = never_visited_days('joao', orders)
        result = (
            f'{client_requested_food}\n'
            f'{client_food_count}\n'
            f'{client_unordered_foods}\n'
            f'{client_never_visited_days}')

        with open("data/mkt_campaign.txt", "w") as file:
            file.write(result)
