#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

using namespace std;

// Structure to store product details securely
struct Product {
    string name;
    long long sales; // Using long long since constraints state sales can be up to 10^9
};

// Custom comparator function to sort products by sales in descending order
bool compareProducts(const Product& a, const Product& b) {
    return a.sales > b.sales;
}

int main() {
    int n;
    if (!(cin >> n)) return 0;

    vector<Product> products(n);

    // Read N product details
    for (int i = 0; i < n; i++) {
        cin >> products[i].name >> products[i].sales;
    }

    int k;
    cin >> k;

    // 1. Boundary Validation for K
    if (k < 1 || k > n) {
        cout << "Invalid value of K" << endl;
        return 0;
    }

    // 2. Sort the array in descending order based on sales unit metrics
    sort(products.begin(), products.end(), compareProducts);

    // 3. Output the K-th highest selling product (0-indexed match)
    cout << products[k - 1].name << " " << products[k - 1].sales << endl;

    return 0;
}
