abstract class Discount {
    public abstract double calculateDiscount(double billAmount);
}

class RegularCustomerDiscount extends Discount {
    @Override
    public double calculateDiscount(double billAmount) {
        return billAmount * 0.05; // 5% discount
    }
}

class PremiumCustomerDiscount extends Discount {
    @Override
    public double calculateDiscount(double billAmount) {
        return billAmount * 0.15; // 15% discount
    }
}

class Customer {
    private int customerId;
    private String customerName;
    private String mobileNumber;

    public Customer(int customerId, String customerName, String mobileNumber) {
        this.customerId = customerId;
        this.customerName = customerName;
        this.mobileNumber = mobileNumber;
    }

    public void displayCustomer() {
        System.out.println("Customer Details");
        System.out.println("ID : " + customerId);
        System.out.println("Name : " + customerName);
        System.out.println("Mobile : " + mobileNumber);
    }
}

class FoodItem {
    private int itemId;
    private String itemName;
    private double price;

    public FoodItem(int itemId, String itemName, double price) {
        this.itemId = itemId;
        this.itemName = itemName;
        this.price = price;
    }

    public double getPrice() {
        return price;
    }

    public String getItemName() {
        return itemName;
    }

    public void displayItem() {
        System.out.println(itemName + " - Rs" + price);
    }
}

class Order {
    private int orderId;
    private Customer customer;
    private FoodItem[] items;
    private int itemCount;

    public Order(int orderId, Customer customer) {
        this.orderId = orderId;
        this.customer = customer;
        items = new FoodItem[5]; // maximum 5 items
        itemCount = 0;
    }

    public void addItem(FoodItem item) {
        if (itemCount < 5) {
            items[itemCount] = item;
            itemCount++;
        } else {
            System.out.println("Cannot add more than 5 items.");
        }
    }

    public double calculateBill() {
        double total = 0;

        for (int i = 0; i < itemCount; i++) {
            total += items[i].getPrice();
        }

        return total;
    }

    public void displayOrder() {
        System.out.println("\n==============================");
        System.out.println("        ORDER SUMMARY");
        System.out.println("==============================");

        customer.displayCustomer();

        System.out.println("\nOrdered Items");

        for (int i = 0; i < itemCount; i++) {
            items[i].displayItem();
        }

        System.out.println("\nTotal Bill : Rs" + calculateBill());
    }
}

public class OnlineFoodOrderingSystem {

    public static void main(String[] args) {

        // Customer
        Customer customer = new Customer(
                101,
                "Rahul Sharma",
                "9876543210"
        );

        // Food Items
        FoodItem burger = new FoodItem(1, "Burger", 150);
        FoodItem pizza = new FoodItem(2, "Pizza", 300);
        FoodItem coffee = new FoodItem(3, "Coffee", 100);

        // Order
        Order order = new Order(1001, customer);

        order.addItem(burger);
        order.addItem(pizza);
        order.addItem(coffee);

        order.displayOrder();

        // Bill Calculation
        double totalBill = order.calculateBill();

        // Runtime Polymorphism
        Discount discount = new PremiumCustomerDiscount();
        // Discount discount = new RegularCustomerDiscount();

        double discountAmount =
                discount.calculateDiscount(totalBill);

        double finalBill =
                totalBill - discountAmount;

        System.out.println("\nDiscount Applied : Rs" + discountAmount);
        System.out.println("Final Bill : Rs" + finalBill);
    }
}