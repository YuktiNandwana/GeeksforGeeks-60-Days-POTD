class Solution {
    private int moves = 0;

    public int distCandy(Node root) {
        moves = 0; // Reset moves for each test case
        calculateBalance(root);
        return moves;
    }

    private int calculateBalance(Node node) {
        if (node == null) {
            return 0;
        }

        // Recursively find the balance of left and right subtrees
        int leftBalance = calculateBalance(node.left);
        int rightBalance = calculateBalance(node.right);

        // Accumulate total moves: the absolute balance required to 
        // adjust the subtrees through the current node
        moves += Math.abs(leftBalance) + Math.abs(rightBalance);

        // Return the net balance of this node to its parent:
        // (current node candies + subtree balances) - 1 (for the node itself)
        return node.data + leftBalance + rightBalance - 1;
    }
}
