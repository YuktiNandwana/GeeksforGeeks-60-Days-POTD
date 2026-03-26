import java.util.*;

class Solution {
    // Yahan dhyan se dekho, List<List<Integer>> ki jagah int[][] kar diya hai
    static int countPaths(int n, int[][] roads) {
        int MOD = (int)(1e9 + 7);
        
        List<List<int[]>> adj = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            adj.add(new ArrayList<>());
        }
        
        // Array ko iterate karne ke liye loop update kiya
        for (int[] road : roads) {
            adj.get(road[0]).add(new int[]{road[1], road[2]});
            adj.get(road[1]).add(new int[]{road[0], road[2]});
        }
        
        long[] dist = new long[n];
        Arrays.fill(dist, Long.MAX_VALUE);
        long[] ways = new long[n];
        
        PriorityQueue<long[]> pq = new PriorityQueue<>((a, b) -> Long.compare(a[1], b[1]));
        
        dist[0] = 0;
        ways[0] = 1;
        pq.add(new long[]{0, 0});
        
        while (!pq.isEmpty()) {
            long[] curr = pq.poll();
            int u = (int) curr[0];
            long currentDist = curr[1];
            
            if (currentDist > dist[u]) continue;
            
            for (int[] edge : adj.get(u)) {
                int v = edge[0];
                long weight = edge[1];
                
                if (currentDist + weight < dist[v]) {
                    dist[v] = currentDist + weight;
                    ways[v] = ways[u]; 
                    pq.add(new long[]{v, dist[v]});
                } 
                else if (currentDist + weight == dist[v]) {
                    ways[v] = (ways[v] + ways[u]) % MOD; 
                }
            }
        }
        
        return (int) (ways[n - 1] % MOD);
    }
}
