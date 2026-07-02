#include<bits/stdc++.h>
using namespace std;
int main(){
    string curtains;
    cin>>curtains;
    int l;
    cin>>l;
    int maxi=0;
    for(int i=0;i<curtains.length();i+=l){
        int count=0;
        for(int j=i;j<min(i+l,(int)curtains.length());j++){
            if(curtains[j]=='a'){
                count++;
            }
        }
        maxi=max(maxi,count);
    }
    cout<<maxi;
    return 0;
}