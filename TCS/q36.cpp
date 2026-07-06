#include<bits/stdc++.h>
using namespace std;
int main(){
    int n;
    cin >> n;
    vector<string> arr;
    for(int i = 0; i < n; i++){
        string s;
        cin >> s;
        arr.push_back(s);
    }
    string ans;
    sort(arr.begin(), arr.end());
    string first=arr[0];
    string last=arr[arr.size()-1];
    for(int i=0;i<first.length();i++){
        if(first[i]!=last[i]){
            break;
        }
        else{
            ans+=first[i];
        }
    }
    cout<< ans<<endl;
    return 0;
}