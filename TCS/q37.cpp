#include<bits/stdc++.h>
using namespace std;
int main(){
    int r,c;
    cin>>r>>c;
    int maxi_one_index=-1;
    int maxi=0;
    vector<vector<int>> a(r,vector<int>(c));
    for(int i=0;i<r;i++){
        int cnt=0;
        for(int j=0;j<c;j++){
            cin>>a[i][j];
            if(a[i][j]==1){
                cnt++;
            }
        }
        if(cnt>maxi){
            maxi=cnt;
            maxi_one_index=i;
        }
    }
    if(maxi_one_index!=-1){
        maxi_one_index++;
    }
    cout<<maxi_one_index<<endl;
    return 0;
}
