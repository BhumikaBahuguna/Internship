#include<bits/stdc++.h>
using namespace std;
int main(){
    int n;
    cin>>n;
    vector<int> a(n);
    for(int i=0;i<n;i++){
        cin>>a[i];
    }
    int mini=a[0];
    int maxprofit=0;
    for(int i=1;i<n;i++){
        if(a[i]<mini){
            mini=a[i];
        }
        else{
            maxprofit=max(maxprofit,a[i]-mini);
        }
    }
    cout<<maxprofit;
    return 0;
}