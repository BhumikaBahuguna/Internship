class Reservation:

    def __init__(self, reservation_id, user, hours):
        self.reservation_id = reservation_id
        self.user = user
        self.hours = hours

    def reserve_seat(self):
        print(
            f"{self.user.name} reserved a reading seat for {self.hours} hour(s)"
        )