#include<bits/stdc++.h>
using namespace std;
int main(){
    int n;
    cin>>n;
    vector<int> a(n);
    for(int i=0;i<n;i++){
        cin>>a[i];
    }
    int zeroes=0,ones=0,twos=0;
    for(int i=0;i<n;i++){
        if(a[i]==0){
            zeroes++;
        }else if(a[i]==1){
            ones++;
        }else{
            twos++;
        }
    }
    int index=0;
    for(int i=0;i<zeroes;i++){
        a[index++]=0;
    }
    for(int i=0;i<ones;i++){
        a[index++]=1;
    }
    for(int i=0;i<twos;i++){
        a[index++]=2;
    }
    for(int i=0;i<n;i++){
        cout<<a[i]<<" ";
    }
    return 0;
}