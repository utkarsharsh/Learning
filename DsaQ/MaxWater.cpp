#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    int maxArea(vector<int>& height) {
    
    int l=0;
    int r=height.size()-1;
    int ans=0;
    while(l<r){
     
    if(height[l]>=height[r]){

    ans = max(ans,min(height[r],height[l])*(r-l));
    r--;
    }
    else{
        ans = max(ans,min(height[r],height[l])*(r-l));
       l++;
    }
    }



  return ans;

    


    }
};