#include<bits/stdc++.h>
using namespace std;
int main(){
    string s;
    getline(cin,s);
    int cntstar=0;
    int cnthash=0;
    for(int i=0;i<s.length();i++){
        if(s[i]=='*'){
            cntstar++;
        }
        else if(s[i]=='#'){
            cnthash++;
        }
    }
    cout<<cntstar-cnthash<<endl;
    return 0;

}