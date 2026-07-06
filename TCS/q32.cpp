#include<bits/stdc++.h>
using namespace std;
int main(){
    int n;
    cin>>n;
    char ans='\0';
    vector<char> a(n);
    for(int i=0;i<n;i++){
        cin>>a[i];
    }
    unordered_map<char,int>mp;
    for(int i=0;i<n;i++){
        mp[a[i]]++;
    }
    for(int i=0;i<n;i++){
        if(mp[a[i]]%2!=0){
            ans=a[i];
            break;
        }
    }
    if(ans=='\0'){
        cout<<"All are even";
    }
    else{
        cout<<ans<<endl;
    }
    
    return 0;
}
