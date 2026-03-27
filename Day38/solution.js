class Solution {
    public int solve(int n, int m, int[][] grid) {
        // dp[row][col1][col2] stores max chocolates from this state to the bottom
        Integer[][][] dp = new Integer[n][m][m];
        return dfs(0, 0, m - 1, n, m, grid, dp);
    }

    private int dfs(int r, int c1, int c2, int n, int m, int[][] grid, Integer[][][] dp) {
        // 1. Boundary Check
        if (c1 < 0 || c1 >= m || c2 < 0 || c2 >= m) {
            return (int) -1e9; // Return a very small number if out of bounds
        }

        // 2. Base Case: Reached the last row
        if (r == n - 1) {
            if (c1 == c2) return grid[r][c1]; // Same cell, collect once
            else return grid[r][c1] + grid[r][c2]; // Different cells
        }

        // 3. Memoization Check
        if (dp[r][c1][c2] != null) return dp[r][c1][c2];

        int maxChoco = 0;

        // 4. Try all 9 possible movement combinations for Robot 1 and Robot 2
        // Both move to row r+1. Robot 1 can go to c1-1, c1, c1+1. Robot 2: c2-1, c2, c2+1.
        for (int i = -1; i <= 1; i++) {
            for (int j = -1; j <= 1; j++) {
                int value = 0;
                if (c1 == c2) {
                    value = grid[r][c1]; // If they are on the same cell
                } else {
                    value = grid[r][c1] + grid[r][c2]; // If they are on different cells
                }
                
                // Recursively find the max from the next row
                value += dfs(r + 1, c1 + i, c2 + j, n, m, grid, dp);
                maxChoco = Math.max(maxChoco, value);
            }
        }

        return dp[r][c1][c2] = maxChoco;
    }
}
