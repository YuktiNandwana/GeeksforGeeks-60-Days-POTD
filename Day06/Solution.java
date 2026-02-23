import java.util.*;

class Solution {
    // Yahan maine naam change karke exactly 'equalSumSpan' kar diya hai
    public int equalSumSpan(int[] arr1, int[] arr2) {
        int n = arr1.length;
        HashMap<Integer, Integer> map = new HashMap<>();
        
        int maxLength = 0;
        int running_sum = 0;
        
        for (int i = 0; i < n; i++) {
            // Difference nikalo aur running sum mein jodo
            running_sum += (arr1[i] - arr2[i]);
            
            // Agar running sum 0 ho gaya, matlab shuru se ab tak score barabar hai
            if (running_sum == 0) {
                maxLength = i + 1;
            }
            
            // Agar ye sum pehle aa chuka hai, toh lamba gap calculate karo
            if (map.containsKey(running_sum)) {
                int previousIndex = map.get(running_sum);
                maxLength = Math.max(maxLength, i - previousIndex);
            } 
            // Agar pehli baar ye sum aaya hai, toh box mein daal do
            else {
                map.put(running_sum, i);
            }
        }
        
        return maxLength;
    }
}
