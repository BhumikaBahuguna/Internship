#include<bits/stdc++.h>
using namespace std;
int main(){
    int n;
    cin>>n;
    vector<int> a(n);
    for(int i=0;i<n;i++){
        cin>>a[i];
    }
    int aaxor=0;
    for(int i=0;i<n;i++){
        aaxor^=a[i];
    }
    cout<<aaxor<<endl;
    return 0;
}