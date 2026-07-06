#include<bits/stdc++.h>
using namespace std;
int main(){
    int i,j;
    cin>>i>>j;
    if(i>=j ||i<0||j>10000){
        cout<<"Invalid Input"<<endl;
    }
    int ans=0;
    for(int k=i;k<=j;k++){
        ans+=k;
    }
    /*
    cout (j*(j+1)/2)-(i*(i-1)/2)<<endl;
    */
    cout<<ans<<endl;
    return 0;
}