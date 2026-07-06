#include<bits/stdc++.h>
using namespace std;
int main(){
    int n,k,j,m,p;
    cin>>n;
    cin>>k;
    cin>>j;
    cin>>m;
    cin>>p;
    int banana_eat=m/k;
    int rem_banana=m%k;
    int peanut_eat=p/j;
    int rem_peanut=p%j;
    int left=n-(banana_eat+peanut_eat);
    if(rem_banana!=0 || rem_peanut!=0){
        left--;
    }
    cout<<left<<endl;
    return 0;


}