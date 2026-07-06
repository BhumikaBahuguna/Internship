#include<bits/stdc++.h>
using namespace std;
int main(){
    int n;
    cin>>n;
    vector<int> a(n);
    for(int i=0;i<n;i++){
        cin>>a[i];
    }
    int maxi=a[0];
    int count=1;
    for(int i=1;i<n;i++){
        if(a[i]>maxi){
            count++;
            maxi=max(maxi,a[i]);
        }
    }
    cout<<count<<endl;

}