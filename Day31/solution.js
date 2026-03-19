import java.util.ArrayList;

class Solution {
    public ArrayList<Node> findPreSuc(Node root, int key) {
        Node pre = null;
        Node suc = null;
        
        // Step 1: Find Predecessor (just smaller than key)
        Node curr = root;
        while (curr != null) {
            if (curr.data < key) {
                pre = curr; // Save as potential predecessor
                curr = curr.right; // Move right to get closer
            } else {
                curr = curr.left; // Too big or equal, move left
            }
        }
        
        // Step 2: Find Successor (just greater than key)
        curr = root;
        while (curr != null) {
            if (curr.data > key) {
                suc = curr; // Save as potential successor
                curr = curr.left; // Move left to get closer
            } else {
                curr = curr.right; // Too small or equal, move right
            }
        }
        
        // Step 3: List mein daal kar return kar do
        ArrayList<Node> result = new ArrayList<>();
        result.add(pre);
        result.add(suc);
        
        return result;
    }
}
