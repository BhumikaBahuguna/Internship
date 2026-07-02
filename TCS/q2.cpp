#include<bits/stdc++.h>
using namespace std;
int main(){
    int n;
    cin>>n;
    vector<int>arr(n);
    for(int i=0;i<n;i++){
        cin>>arr[i];
    }
    int ones=0;
    int ans=0;
    for(int i=n-1;i>=0;i--){
        if(arr[i]==1){
            ones+=1;
        }else{
            ans+=ones;
        }
    }
    cout<<ans<<endl;
}