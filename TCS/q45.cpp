#include <iostream>
#include <string>
#include <vector>

using namespace std;

// Function to convert integer to Roman numeral
string intToRoman(int num) {
    // 1. Store all unique Roman values and symbols in descending order
    int values[] = {1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1};
    string symbols[] = {"M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"};
    
    string result = "";
    
    // 2. Iterate through the values greedily
    for (int i = 0; i < 13; i++) {
        // While the remaining number can fit the current Roman unit value
        while (num >= values[i]) {
            result += symbols[i]; // Append the matching symbol
            num -= values[i];     // Subtract its value
        }
    }
    
    return result;
}

int main() {
    int num;
    // Read the input integer cleanly
    if (cin >> num) {
        // Constraints check (1 <= num <= 3999)
        if (num < 1 || num > 3999) {
            return 0; // Graceful termination if input breaks standard constraints
        }
        
        // Print the converted Roman numeral output
        cout << intToRoman(num) << endl;
    }
    return 0;
}
