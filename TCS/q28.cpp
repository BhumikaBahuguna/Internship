#include<bits/stdc++.h>
using namespace std;
int main(){
    string s;
    getline(cin,s);
    vector<int>a;
    if(s.front()=='{' && s.back()=='}'){
        s=s.substr(1,s.length()-2);
    }
    stringstream ss(s);
    string temp;
    while(getline(ss,temp,',')){
        int num=stoi(temp);
        a.push_back(num);
    }
    for(int x:a){
        cout<<x<<" ";
    }
    return 0;
}