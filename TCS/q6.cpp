#include<bits/stdc++.h>
using namespace std;
int main(){
    int n;
    cin>>n;
    vector<int>arr(n);
    for(int i=0;i<n;i++){
        cin>>arr[i];
    }
    int count=1;
    int prevmax=arr[0];
    for(int i=1;i<n;i++){
        if(arr[i]>prevmax){
            count++;
            prevmax=arr[i];
    }
}
cout<<count<<endl;
return 0;
}