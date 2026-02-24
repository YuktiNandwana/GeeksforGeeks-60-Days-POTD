import java.util.*;

class Solution {
    public int longestSubarray(int[] arr, int k) {
        int n = arr.length;
        
        // HashMap: <Running_Sum, First_Seen_Index>
        HashMap<Integer, Integer> map = new HashMap<>();
        
        int maxLength = 0;
        int running_sum = 0;
        
        for (int i = 0; i < n; i++) {
            // 1. +1 / -1 wala game khelo
            if (arr[i] > k) {
                running_sum += 1;
            } else {
                running_sum -= 1;
            }
            
            // 2. Agar overall score positive hai, toh start se abhi tak sab badhiya hai
            if (running_sum > 0) {
                maxLength = i + 1;
            } 
            // 3. Agar haar rahe hain, toh check karo kya (score - 1) pehle kabhi aaya tha?
            else {
                if (map.containsKey(running_sum - 1)) {
                    int previousIndex = map.get(running_sum - 1);
                    maxLength = Math.max(maxLength, i - previousIndex);
                }
            }
            
            // 4. Diary mein entry tabhi dalo jab ye score PEHLI baar aaya ho
            if (!map.containsKey(running_sum)) {
                map.put(running_sum, i);
            }
        }
        
        return maxLength;
    }
}
