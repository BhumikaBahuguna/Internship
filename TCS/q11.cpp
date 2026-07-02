#include<bits/stdc++.h>
using namespace std;
int main(){
    int n;
    cin>>n;
    vector<int>a(n);
    for(int i=0;i<n;i++){
        cin>>a[i];
    }
    int date;
    cin>>date;
    int f;
    cin>>f;
    int fine=0;
    for(int i=0;i<n;i++){
        if(date%2!=a[i]%2)
            fine+=f;   
    }
    cout<<fine<<endl;
    return 0;
}