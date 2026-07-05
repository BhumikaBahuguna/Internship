#include<bits/stdc++.h>
using namespace std;
int main() {
    int t;
    cin >> t;
    vector<long long> ans(t);
    for(int i = 0; i < t; i++) {
        long long n;
        cin >> n;
        ans[i] = (n * (n - 1)) / 2;
    }
    for(int i = 0; i < t; i++) {
        cout << ans[i] << endl;
    }
    return 0;
}