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

/* 
avoiding inner loop
#include<bits/stdc++.h>
using namespace std;

int main()
{
    string str;
    cin >> str;

    int L;
    cin >> L;

    int cnt = 0;
    int maxi = 0;

    for(int i = 0; i < str.length(); i++)
    {
        if(str[i] == 'a')
            cnt++;

        if((i + 1) % L == 0 || i == str.length() - 1)
        {
            maxi = max(maxi, cnt);
            cnt = 0;
        }
    }

    cout << maxi;
}
*/
