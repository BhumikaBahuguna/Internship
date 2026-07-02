#include<bits/stdc++.h>
using namespace std;
int factorial(int n){
    int res=1;
    while(n>0){
        res*=n;
        n--;
    }
    return res;
}
int main(){
    int n;
    cin>>n;
    int ans=2*factorial(n-1);
    cout<<ans<<endl;
}