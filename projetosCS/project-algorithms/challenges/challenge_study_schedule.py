def study_schedule(permanence_period: list[int], target_time: int) -> int:
    try:
        count = 0
        for permanence in permanence_period:
            if permanence[0] <= target_time <= permanence[1]:
                count += 1
        return count
    except TypeError:
        return None
