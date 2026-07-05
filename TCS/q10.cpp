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
    while(s>9){
        int result=0;
        while(s>0){
            int d=s%10;
            result+=d;
            s/=10;
        }
        s=result;
    }
    cout<<s<<endl;
}
