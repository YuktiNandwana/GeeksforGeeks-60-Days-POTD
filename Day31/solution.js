class Solution {
    public static void findPreSuc(Node root, Node[] pre, Node[] suc, int key) {
        // Step 1: Find Predecessor
        Node curr = root;
        while (curr != null) {
            if (curr.data < key) {
                pre[0] = curr; // Save as potential predecessor
                curr = curr.right; // Move right to find a closer, larger value
            } else {
                curr = curr.left; // Value is too big, move left
            }
        }
        
        // Step 2: Find Successor
        curr = root;
        while (curr != null) {
            if (curr.data > key) {
                suc[0] = curr; // Save as potential successor
                curr = curr.left; // Move left to find a closer, smaller value
            } else {
                curr = curr.right; // Value is too small, move right
            }
        }
    }
}
