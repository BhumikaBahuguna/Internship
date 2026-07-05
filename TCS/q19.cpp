#include<bits/stdc++.h>
using namespace std;
int sumofdig(int n){
    int sum=0;
    while(n>0){
        int d=n%10;
        sum+=d;
        n/=10;
    }
    return sum;
}
int main(){
    int n;
    cin>>n;
    int r;
    cin>>r;
    int s=sumofdig(n);
    s*=r;
    int result=(int)(1+(s-1)%9);
    cout<<result<<endl;
}
