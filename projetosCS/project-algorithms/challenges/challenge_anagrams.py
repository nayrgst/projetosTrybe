#  Implementing Bubble Sort in Python
#  https://realpython.com/sorting-algorithms-python


def sort(word):
    lists = list(word)
    n = len(word)

    for i in range(n):
        sorted = True
        for j in range(n - i - 1):

            if lists[j] > lists[j + 1]:
                lists[j], lists[j + 1] = lists[j + 1], lists[j]
                sorted = False
        if sorted:
            break
    return "".join(lists)


def is_anagram(first_string, second_string):
    orders_string1, order_string2 = first_string.lower(), second_string.lower()
    if first_string == "" and second_string == "":
        return ("", "", False)
    true = sort(orders_string1) == sort(order_string2)

    return (sort(orders_string1), sort(order_string2), true)
