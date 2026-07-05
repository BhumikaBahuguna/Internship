#include<bits/stdc++.h>
using namespace std;
int main(){
    string s;
    cin>>s;
    int l;
    cin>>l;
    int maxi=0;
    for(int i=0;i<s.length();i+=l){
        int c=0;
        for(int j=i;j<min(i+l,(int)s.length());j++){
            if(s[j]=='a'){
                c++;
            }
        }
        maxi=max(maxi,c);
    }
    cout<<maxi;
    return 0;
}