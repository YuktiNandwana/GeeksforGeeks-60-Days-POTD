class NodeInfo {
    boolean isBST;
    int size;
    int min;
    int max;

    NodeInfo(boolean isBST, int size, int min, int max) {
        this.isBST = isBST;
        this.size = size;
        this.min = min;
        this.max = max;
    }
}

class Solution {
    private int maxBSTSize = 0;

    public int largestBst(Node root) {
        maxBSTSize = 0; // Reset for each call
        solve(root);
        return maxBSTSize;
    }

    private NodeInfo solve(Node root) {
        // Base case: Empty tree is a BST of size 0
        if (root == null) {
            return new NodeInfo(true, 0, Integer.MAX_VALUE, Integer.MIN_VALUE);
        }

        // Post-order traversal (Bottom-up)
        NodeInfo left = solve(root.left);
        NodeInfo right = solve(root.right);

        // Check if the current node forms a BST
        if (left.isBST && right.isBST && root.data > left.max && root.data < right.min) {
            int currentSize = left.size + right.size + 1;
            maxBSTSize = Math.max(maxBSTSize, currentSize);
            
            return new NodeInfo(
                true, 
                currentSize, 
                Math.min(root.data, left.min), 
                Math.max(root.data, right.max)
            );
        }

        // If it's not a BST, pass false up. Values don't matter anymore.
        return new NodeInfo(false, 0, 0, 0);
    }
}
