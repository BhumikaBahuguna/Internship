#include<bits/stdc++.h>
using namespace std;
int main(){
    int n;
    cin>>n;
    int x= (floor)(log2(n)) +1;
    int mask=0;
    for(int i=0;i<x;i++){
        mask=(mask<<1)+1;
    }
    mask=mask^n;
    cout<<mask<<endl;
    return 0;
}