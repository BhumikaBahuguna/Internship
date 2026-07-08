#include<bits/stdc++.h>
using namespace std;
int main(){
    string line;
    getline(cin,line);
    stringstream ss(line);
    vector<int>arr;
    int num;
    while(ss>>num){
        arr.push_back(num); 
    }
    for(int i=0;i<arr.size();i++){
        cout<<arr[i]<<" ";  
    }
    return 0;
}