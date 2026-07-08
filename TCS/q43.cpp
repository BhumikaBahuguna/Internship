#include <iostream>
#include <string>
#include <cctype>
#include <iomanip>

using namespace std;

// Function to validate if a string contains exactly two digits
bool isTwoDigits(string s) {
    if (s.length() != 2) return false;
    return isdigit(s[0]) && isdigit(s[1]);
}

int main() {
    string s;
    // Use getline to capture the entire string including the space
    getline(cin, s);

    // 1. Strict length check (HH:MM AM/PM must be exactly 8 characters)
    if (s.length() != 8) {
        cout << "Error in input format" << endl;
        return 0;
    }

    // 2. Strict character structure check
    // Format must match: [Digit][Digit][:][Digit][Digit][ ][A/P][M]
    if (s[2] != ':' || s[5] != ' ') {
        cout << "Error in input format" << endl;
        return 0;
    }

    string hourStr = s.substr(0, 2);
    string minStr = s.substr(3, 2);
    string period = s.substr(6, 2);

    // Validate that hours and minutes components are strictly digits
    if (!isTwoDigits(hourStr) || !isTwoDigits(minStr)) {
        cout << "Error in input format" << endl;
        return 0;
    }

    int hh = stoi(hourStr);
    int mm = stoi(minStr);

    // 3. Boundaries/Value Constraints check
    if (hh < 1 || hh > 12 || mm < 0 || mm > 59) {
        cout << "Error in input format" << endl;
        return 0;
    }

    if (period != "AM" && period != "PM") {
        cout << "Error in input format" << endl;
        return 0;
    }

    // 4. 24-Hour Transformation Logic
    if (period == "AM") {
        if (hh == 12) {
            hh = 0;
        }
    } else { // period == "PM"
        if (hh != 12) {
            hh += 12;
        }
    }

    // 5. Output Formatting
    // Print hour and minute with leading zeros if they are single digits
    if (hh < 10) cout << "0";
    cout << hh << ":";
    if (mm < 10) cout << "0";
    cout << mm << endl;

    return 0;
}
