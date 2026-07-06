#include<bits/stdc++.h>
using namespace std;
int main(){
    int n;
    cin>>n;
    /*string s;
    cin>>s;*/
    cin.ignore(); // To ignore the newline character after reading n
    string s;
    getline(cin,s);
    cout <<n<<" "<<s<<endl;
    return 0;
}