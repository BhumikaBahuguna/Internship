#include<bits/stdc++.h>
using namespace std;
bool isprime(int n){
    if(n<=1) return false;
    for(int i=2;i*i<=n;i++){
        if(n%i==0) return false;
    }
    return true;
}
int sumofprimes(int n){
    int sum=0;
    int count=0;
    int num=2;
    while(count<n){
        if(isprime(num)){
            sum+=num;
            count++;
        }
        num++;
    }
    return sum;
}
int main(){
    int n;
    cin>>n;
    int result=sumofprimes(n);
    cout<<result;
    return 0;
}