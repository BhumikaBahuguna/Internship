class Vehicle:
    def __init__(self, brand):
        self.brand = brand

    def start(self):
        print(f"{self.brand} vehicle started")


class Car(Vehicle):
    def drive(self):
        print("Car is driving")


class Bike(Vehicle):
    def ride(self):
        print("Bike is riding")


# User Input
car_brand = input("Enter Car Brand: ")
bike_brand = input("Enter Bike Brand: ")

# Create Objects
car = Car(car_brand)
bike = Bike(bike_brand)

# Car Actions
print("\nCar Details:")
car.start()
car.drive()

# Bike Actions
print("\nBike Details:")
bike.start()
bike.ride()