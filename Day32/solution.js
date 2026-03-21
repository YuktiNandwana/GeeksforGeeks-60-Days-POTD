import java.util.ArrayList;

class Solution {
    public ArrayList<Integer> numOfBsts(int[] arr) {
        int n = arr.length;
        ArrayList<Integer> ans = new ArrayList<>();
        
        // Step 1: Precompute Catalan numbers up to N
        // N is very small (<= 6) according to constraints
        int[] catalan = new int[n + 1];
        catalan[0] = 1;
        catalan[1] = 1;
        
        for (int i = 2; i <= n; i++) {
            catalan[i] = 0;
            for (int j = 0; j < i; j++) {
                catalan[i] += catalan[j] * catalan[i - j - 1];
            }
        }
        
        // Step 2: Calculate for each element as root
        for (int i = 0; i < n; i++) {
            int leftCount = 0;
            int rightCount = 0;
            
            // Count elements strictly smaller and strictly greater
            for (int j = 0; j < n; j++) {
                if (arr[j] < arr[i]) {
                    leftCount++;
                } else if (arr[j] > arr[i]) {
                    rightCount++;
                }
            }
            
            // Number of unique BSTs = Catalan(Left) * Catalan(Right)
            int totalBsts = catalan[leftCount] * catalan[rightCount];
            ans.add(totalBsts);
        }
        
        return ans;
    }
}
