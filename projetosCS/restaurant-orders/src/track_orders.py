class TrackOrders:
    # aqui deve expor a quantidade de estoque
    def __init__(self) -> None:
        self._data = []

    def __len__(self):
        return len(self._data)

    def add_new_order(self, customer, order, day):
        self._data.append([customer, order, day])

    def get_most_ordered_dish_per_customer(self, customer):
        customer_orders = [
            item for customer_, item, _ in self._data if customer_ == customer]
        order_counts = {}
        for order in customer_orders:
            order_counts[order] = order_counts.get(order, 0) + 1
        return max(order_counts, key=order_counts.get)

    def get_never_ordered_per_customer(self, customer):
        customer_orders = [
            item for customer_, item, _ in self._data if customer_ == customer]
        all_orders = set([item for customer_, item, _ in self._data])
        return all_orders - set(customer_orders)

    def get_days_never_visited_per_customer(self, customer):
        customer_days = [
            day for customer_, _, day in self._data if customer_ == customer]
        all_days = set([day for customer_, _, day in self._data])
        return all_days - set(customer_days)

    def get_busiest_day(self):
        day_counts = {}
        for _, _, day in self._data:
            day_counts[day] = day_counts.get(day, 0) + 1
        return max(day_counts, key=day_counts.get)

    def get_least_busy_day(self):
        day_counts = {}
        for _, _, day in self._data:
            day_counts[day] = day_counts.get(day, 0) + 1
        return min(day_counts, key=day_counts.get)
