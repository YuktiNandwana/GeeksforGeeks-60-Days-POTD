class Solution {
    // GeeksforGeeks specifically looks for the method name "orangesRot"
    public int orangesRot(int[][] mat) {
        if (mat == null || mat.length == 0) return 0;
        
        int n = mat.length;
        int m = mat[0].length;
        java.util.Queue<int[]> queue = new java.util.LinkedList<>();
        int freshCount = 0;
        
        // 1. Initial scan: Find all rotten oranges and count fresh ones
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (mat[i][j] == 2) {
                    queue.offer(new int[]{i, j});
                } else if (mat[i][j] == 1) {
                    freshCount++;
                }
            }
        }
        
        if (freshCount == 0) return 0;
        
        int time = 0;
        int[] dx = {0, 0, 1, -1};
        int[] dy = {1, -1, 0, 0};
        
        // 2. BFS: Spread the rot
        while (!queue.isEmpty()) {
            int size = queue.size();
            boolean rottedInThisStep = false;
            
            for (int i = 0; i < size; i++) {
                int[] curr = queue.poll();
                
                for (int d = 0; d < 4; d++) {
                    int nx = curr[0] + dx[d];
                    int ny = curr[1] + dy[d];
                    
                    if (nx >= 0 && nx < n && ny >= 0 && ny < m && mat[nx][ny] == 1) {
                        mat[nx][ny] = 2; // Rot it
                        freshCount--;
                        queue.offer(new int[]{nx, ny});
                        rottedInThisStep = true;
                    }
                }
            }
            if (rottedInThisStep) time++;
        }
        
        return freshCount == 0 ? time : -1;
    }
}
