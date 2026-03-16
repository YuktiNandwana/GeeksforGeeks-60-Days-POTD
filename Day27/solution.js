class Solution {
    public int countAllPaths(Node root, int k) {
        // Use a HashMap to store (prefixSum, frequency)
        HashMap<Integer, Integer> map = new HashMap<>();
        
        // Base case: a sum of 0 is always present once (to catch paths from root)
        map.put(0, 1);
        
        return solve(root, 0, k, map);
    }

    private int solve(Node node, int currentSum, int k, HashMap<Integer, Integer> map) {
        if (node == null) return 0;

        currentSum += node.data;
        
        // If (currentSum - k) exists, a valid path ends at this node
        int count = map.getOrDefault(currentSum - k, 0);

        // Add current sum to map for child nodes to use
        map.put(currentSum, map.getOrDefault(currentSum, 0) + 1);

        // Traverse downward
        count += solve(node.left, currentSum, k, map);
        count += solve(node.right, currentSum, k, map);

        // Backtrack: Remove current sum so it doesn't affect other branches
        map.put(currentSum, map.get(currentSum) - 1);

        return count;
    }
}
