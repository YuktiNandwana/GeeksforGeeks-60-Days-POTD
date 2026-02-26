class Solution {
    public int countSquare(int[][] mat, int x) {
        // code here
        if (mat == null || mat.length == 0 || mat[0].length == 0) return 0;
        
        int n = mat.length;
        int m = mat[0].length;
        
        // Initialize prefix sum array
        int[][] pref = new int[n + 1][m + 1];
        
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                pref[i+1][j+1] = mat[i][j] + pref[i][j+1] + pref[i+1][j] - pref[i][j];
            }
        }
        
        int count = 0;
        
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                int max_k = Math.min(n - i, m - j);
                
                for (int k = 1; k <= max_k; k++) {
                    int r1 = i, c1 = j;
                    int r2 = i + k - 1, c2 = j + k - 1;
                    
                    int sub_sum = pref[r2+1][c2+1] - pref[r1][c2+1] - pref[r2+1][c1] + pref[r1][c1];
                    
                    if (sub_sum == x) {
                        count++;
                    }
                }
            }
        }
        
        return count;
    }

}
