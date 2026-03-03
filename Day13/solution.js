class Solution {
    public int totalElements(int[] arr) {
        // code here
        //edge case check
        
        if(arr==null|| arr.length==0){
            return 0;
        }
        
        //hashmmap to store the frequency of elelments in our current windoww
        HashMap<Integer, Integer> map = new HashMap<>();
        
        int left=0;
        int maxLen =0;
        
        // Move the right pointer across the array
        
        for(int right=0;right<arr.length;right++){
            int currentNum = arr[right];
            
            // Add the current element to the map, incrementing its count
            
            map.put(currentNum,map.getOrDefault(currentNum,0)+1);
            
            // If we have more than 2 distinct numbers, shrink the window from the left
            while (map.size() > 2) {
                int leftNum = arr[left];
                
                // Decrease the count of the element at the left pointer
                map.put(leftNum, map.get(leftNum) - 1);
                
                // If a number's count drops to 0, remove it completely from the map
                if (map.get(leftNum) == 0) {
                    map.remove(leftNum);
                }
                
                // Shrink the window
                left++;
            }
            
            // Update the maximum length found so far
            // The size of the current window is (right - left + 1)
            maxLen = Math.max(maxLen, right - left + 1);
        }
        
        return maxLen;
    }
}
