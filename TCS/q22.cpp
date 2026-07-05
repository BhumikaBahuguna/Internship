#include<bits/stdc++.h>
using namespace std;

int main()
{
    int n;
    cin >> n;

    vector<int> a(n);

    for(int i = 0; i < n; i++)
        cin >> a[i];

    int s = 0;
    int e = n - 1;

    while(s < e)
    {
        int mid = s + (e - s) / 2;

        if(mid % 2 == 1)
            mid--;

        if(a[mid] == a[mid + 1])
            s = mid + 2;
        else
            e = mid;
    }

    cout << a[s];

    return 0;
}