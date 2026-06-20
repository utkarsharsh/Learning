#include <bits/stdc++.h>
using namespace std;
class Solution {
public:
    int minOperations(vector<int>& nums, int k) {
        
        int ans=INT_MAX;
        
        vector<int>pre(nums.size()+1,0);
        for(int i=0;i<pre.size()-1;i++){
            pre[i+1]=pre[i]+nums[i];
        }

        unordered_map<int,int>m;
        int sum=0;
        for(int i=nums.size()-1;i>=0;i--){
            sum+=nums[i];
            m[sum]=nums.size()-i;
        }
        m[0]=0;
        for(int i=0;i<pre.size();i++){
            if(m.find(k-pre[i])!=m.end()){
                int x=m[k-pre[i]];
                if(i+x<=nums.size()){
                    ans=min(ans,i+x);
                }
            }
        }
       
    //    for(auto i:m){
    //     cout<<i.first<<" "<<i.second<<endl;
    //    }

        return ans==INT_MAX ? -1 :ans;




    }
};