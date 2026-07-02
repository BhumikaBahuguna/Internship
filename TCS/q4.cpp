#include<bits/stdc++.h>
using namespace std;
int main(){
    string day;
    cin>>day;
    int n;
    cin>>n;
    map<string,int> mp;
    mp["sun"]=0;
    mp["mon"]=1;
    mp["tue"]=2;
    mp["wed"]=3;
    mp["thu"]=4;    
    mp["fri"]=5;
    mp["sat"]=6;
    int start=mp[day];
    int daystosun=(7-start)%7;
    if(daystosun>n){
        cout<<0;
    }
    else{
        int ans=1+(n-daystosun)/7;
        cout<<ans;
    }
    return 0;
}