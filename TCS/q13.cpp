#include<bits/stdc++.h>
using namespace std;
int main(){
    int n;
    cin>>n;
    vector<int>sizes(n);
    for(int i=0;i<n;i++){
        cin>>sizes[i];
    }
    int count_red=0;
    int count_green=0;
    for(int i=0;i<n;i++){
        int color;
        cin>>color;
        if(color==1){
            count_red++;
        }
        else{
            count_green++;
        }
    }
    if(count_red==count_green){
        cout<<"YES\n"<<endl;
    }
    else{
        cout<<"NO\n"<<endl;
    }
    return 0;
}