import java.util.*;

class Solution {
    // The driver code specifically looks for this method name
    public ArrayList<Integer> minHeightRoot(int V, int[][] edges) {
        // Handle edge cases
        if (V <= 1) {
            ArrayList<Integer> res = new ArrayList<>();
            if (V == 1) res.add(0);
            return res;
        }

        // 1. Build adjacency list and degree array
        List<Set<Integer>> adj = new ArrayList<>();
        int[] degree = new int[V];
        for (int i = 0; i < V; i++) adj.add(new HashSet<>());
        
        for (int[] edge : edges) {
            int u = edge[0];
            int v = edge[1];
            adj.get(u).add(v);
            adj.get(v).add(u);
            degree[u]++;
            degree[v]++;
        }

        // 2. Queue for leaves (nodes with degree 1)
        Queue<Integer> leaves = new LinkedList<>();
        for (int i = 0; i < V; i++) {
            if (degree[i] == 1) leaves.add(i);
        }

        // 3. Trim layers of leaves
        int remainingNodes = V;
        while (remainingNodes > 2) {
            int currentLeafCount = leaves.size();
            remainingNodes -= currentLeafCount;
            for (int i = 0; i < currentLeafCount; i++) {
                int leaf = leaves.poll();
                for (int neighbor : adj.get(leaf)) {
                    degree[neighbor]--;
                    if (degree[neighbor] == 1) {
                        leaves.add(neighbor);
                    }
                }
            }
        }

        // 4. Return remaining nodes as ArrayList
        return new ArrayList<>(leaves);
    }
}
