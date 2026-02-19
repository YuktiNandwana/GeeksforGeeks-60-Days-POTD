import java.util.ArrayList;
import java.util.HashSet;

class Solution {
    public ArrayList<Integer> missingRange(int[] arr, int low, int high) {
        
        // HashSet to store array elements for O(1) lookup
        HashSet<Integer> set = new HashSet<>();
        for (int num : arr) {
            set.add(num);
        }
        
        // ArrayList to store the missing numbers
        ArrayList<Integer> ans = new ArrayList<>();
        for (int i = low; i <= high; i++) {
            if (!set.contains(i)) {
                ans.add(i);
            }
        }
        
        return ans;
    }
}
