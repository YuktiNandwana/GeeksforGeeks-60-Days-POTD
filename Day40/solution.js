import java.util.*;

class Solution {
    public int minCost(int[][] houses) {
        int n = houses.length;
        if (n == 0) return 0;
        
        int[] dist = new int[n];
        Arrays.fill(dist, Integer.MAX_VALUE);
        boolean[] visited = new boolean[n];
        
        dist[0] = 0;
        int totalCost = 0;
        
        for (int i = 0; i < n; i++) {
            int u = -1;
            
            // Pick the unvisited house with the minimum distance to the current MST
            for (int v = 0; v < n; v++) {
                if (!visited[v] && (u == -1 || dist[v] < dist[u])) {
                    u = v;
                }
            }
            
            // Add to MST
            visited[u] = true;
            totalCost += dist[u];
            
            // Update distances to neighboring unvisited houses
            for (int v = 0; v < n; v++) {
                if (!visited[v]) {
                    int manhattanDist = Math.abs(houses[u][0] - houses[v][0]) + 
                                       Math.abs(houses[u][1] - houses[v][1]);
                    if (manhattanDist < dist[v]) {
                        dist[v] = manhattanDist;
                    }
                }
            }
        }
        
        return totalCost;
    }
}
