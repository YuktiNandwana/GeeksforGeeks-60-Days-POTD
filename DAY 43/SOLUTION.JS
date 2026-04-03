import java.util.*;

class Solution {
    // The driver code is calling this exact method name: diagView
    public ArrayList<Integer> diagView(int[][] mat) {
        ArrayList<Integer> result = new ArrayList<>();
        int n = mat.length; // Get n from the matrix itself
        
        // Sum of indices i + j ranges from 0 to 2*(n-1)
        for (int sum = 0; sum <= 2 * (n - 1); sum++) {
            // Traverse from top-right to bottom-left for each anti-diagonal
            for (int i = 0; i <= sum; i++) {
                int j = sum - i;
                
                // Keep indices within matrix bounds
                if (i < n && j < n) {
                    result.add(mat[i][j]);
                }
            }
        }
        return result;
    }
}
