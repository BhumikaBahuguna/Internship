
#include<bits/stdc++.h>
using namespace std;
int main(){
    string s;
    getline(cin,s);
    stringstream ss(s);
    int num;
    vector<int>a;
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