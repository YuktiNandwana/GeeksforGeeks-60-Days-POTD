class Solution {
    static long noOfWays(int m , int n , int x) {
        // Create a 2D array to store the subproblem results
        // dp[i][j] stores the number of ways to get sum j with i dice
        long[][] dp = new long[n + 1][x + 1];
        
        // Base case: 1 way to get sum 0 with 0 dice
        dp[0][0] = 1;
        
        // Iterate through the number of dice
        for (int i = 1; i <= n; i++) {
            // Iterate through every possible target sum
            for (int j = 1; j <= x; j++) {
                // Try all faces of the current die (1 to m)
                for (int k = 1; k <= m; k++) {
                    // Check if throwing face k doesn't exceed the target sum j
                    if (j - k >= 0) {
                        dp[i][j] += dp[i - 1][j - k];
                    }
                }
            }
        }
        
        // The answer is the number of ways to get sum x with n dice
        return dp[n][x];
    }
}
