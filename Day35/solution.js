import java.util.*;

class Solution {
    public boolean canFinish(int n, int[][] prerequisites) {
        // Step 1: Adjacency list aur In-degree array banao
        List<List<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < n; i++) adj.add(new ArrayList<>());
        
        int[] inDegree = new int[n];
        for (int[] pre : prerequisites) {
            int course = pre[0];
            int prerequisite = pre[1];
            adj.get(prerequisite).add(course); // y -> x (y pehle karna hai)
            inDegree[course]++;
        }

        // Step 2: Queue mein wo courses daalo jinka koi prerequisite nahi hai
        Queue<Integer> q = new LinkedList<>();
        for (int i = 0; i < n; i++) {
            if (inDegree[i] == 0) {
                q.add(i);
            }
        }

        // Step 3: Kahn's Algorithm (BFS)
        int completedCourses = 0;
        while (!q.isEmpty()) {
            int curr = q.poll();
            completedCourses++;

            for (int neighbor : adj.get(curr)) {
                inDegree[neighbor]--;
                if (inDegree[neighbor] == 0) {
                    q.add(neighbor);
                }
            }
        }

        // Agar saare courses process ho gaye, toh koi cycle nahi thi
        return completedCourses == n;
    }
}
