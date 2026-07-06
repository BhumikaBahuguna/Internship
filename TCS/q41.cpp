#include<bits/stdc++.h>
using namespace std;
vector<pair<int,int>>adj[100005];
vector<int>dijkstra(int vertices,int source,vector<int>&parent){
    vector<int>dist(vertices+1,INT_MAX);
    dist[source]=0;
    priority_queue<pair<int,int>,vector<pair<int,int>>,greater<pair<int,int>>>pq;
    pq.push({0,source});
    while(!pq.empty()){
        int u=pq.top().second;
        int d=pq.top().first;
        pq.pop();
        if(d>dist[u]) continue;
        for(auto it:adj[u]){
            int v=it.first;
            int w=it.second;
            if(dist[u]+w<dist[v]){
                dist[v]=dist[u]+w;
                parent[v]=u;
                pq.push({dist[v],v});
            }
        }
    }
    return dist;
}
void printpath(const vector<int>&parent,int target){
    if(parent[target]==-1){
        cout<<target<<" ";
        return;
    }
    printpath(parent,parent[target]);
    cout<<" -> "<<target<<" ";
}
int main(){
    int vertices,edges;
    cin>>vertices>>edges;
    for(int i=0;i<edges;i++){
        int u,v,w;
        cin>>u>>v>>w;
        adj[u].push_back({v,w});
        adj[v].push_back({u,w});
    }
    int source,target;
    cin>>source>>target;
    vector<int>parent(vertices+1,-1);
    vector<int>dist=dijkstra(vertices,source,parent);
    cout<<"shortest distance from "<<source<<" to "<<target<<" is: ";
    printpath(parent,target);
    cout<<endl;
    cout<<"total weight="<<dist[target] <<endl;
    return 0;

}
