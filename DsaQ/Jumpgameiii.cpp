#include <bits/stdc++.h>
using namespace std;


class Solution {
public:
bool ans(vector<int>& arr,int i,vector<bool>&vis){
       if(i<0 || i>=arr.size() ||vis[i]) return false;
    if(arr[i]==0) return true;
    vis[i]=true;
    int x=false;
    int y=false;
     if((arr[i]+i)<arr.size() && !vis[arr[i]+i] ){
        x= ans(arr,arr[i]+i,vis);
          }
        if((i-arr[i])>=0 && !vis[i-arr[i]]){
                y= ans(arr,i-arr[i],vis);
         }  
     return x || y;
}
    bool canReach(vector<int>& arr, int start) {
        vector<bool>vis(arr.size(),false);
       return ans(arr,start,vis);
       
    }
};

int main() {
    Solution sol;
    vector<int> arr = {4, 2, 3, 0, 3, 1, 2};
    int start = 5;
    bool result = sol.canReach(arr, start);
    cout << (result ? "true" : "false") << endl; // Output: true
    return 0;
}