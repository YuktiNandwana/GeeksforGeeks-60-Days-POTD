import java.util.*;

class Solution {
    public int longestCycle(int V, int[][] edges) {
        // Step 1: Adjacency list banao (Kyunki max 1 outgoing edge hai, toh simple array chalega)
        int[] adj = new int[V];
        Arrays.fill(adj, -1);
        for (int[] edge : edges) {
            adj[edge[0]] = edge[1];
        }

        boolean[] visited = new boolean[V];
        int maxCycleLen = -1;

        // Step 2: Har node ko visit karo
        for (int i = 0; i < V; i++) {
            if (!visited[i]) {
                // Current path track karne ke liye distance map
                Map<Integer, Integer> distMap = new HashMap<>();
                int curr = i;
                int dist = 0;

                // Jab tak aage rasta hai aur node unvisited hai, chalte raho
                while (curr != -1 && !visited[curr]) {
                    visited[curr] = true;
                    distMap.put(curr, dist);
                    dist++;
                    curr = adj[curr];
                }

                // Agar current node -1 nahi hai aur wo HUMARE current path mein hi pehle aa chuka hai
                if (curr != -1 && distMap.containsKey(curr)) {
                    // Cycle length calculate karo
                    int cycleLen = dist - distMap.get(curr);
                    maxCycleLen = Math.max(maxCycleLen, cycleLen);
                }
            }
        }

        return maxCycleLen;
    }
}
