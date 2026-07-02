#include<bits/stdc++.h>
using namespace std;
int main(){
    int n;
    cin>>n;
    int p=1;
    while(n>0){
        int d=n%10;
        p*=d;
        n/=10;
    }
    cout<<p<<endl;
    return 0;
}