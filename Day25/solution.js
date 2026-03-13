import java.util.*;

class Solution {
    // Queue ke andar Node aur uska Horizontal Distance ek sath rakhne ke liye custom class
    static class Pair {
        Node node;
        int hd;
        
        Pair(Node n, int h) {
            node = n;
            hd = h;
        }
    }
    
    // GFG par function ka naam yahi hoga
    static ArrayList<Integer> topView(Node root) {
        ArrayList<Integer> ans = new ArrayList<>();
        if (root == null) {
            return ans;
        }
        
        // TreeMap Horizontal Distances ko naturally sort rakhega (e.g., -2, -1, 0, 1, 2)
        Map<Integer, Integer> map = new TreeMap<>();
        Queue<Pair> q = new LinkedList<>();
        
        // Root ko HD = 0 ke sath daalo
        q.add(new Pair(root, 0));
        
        while (!q.isEmpty()) {
            Pair curr = q.poll();
            Node currNode = curr.node;
            int hd = curr.hd;
            
            // Agar is HD par pehle koi node nahi aaya hai, toh yahi top view ka hissa hai
            if (!map.containsKey(hd)) {
                map.put(hd, currNode.data);
            }
            
            // Left jaao toh HD - 1
            if (currNode.left != null) {
                q.add(new Pair(currNode.left, hd - 1));
            }
            
            // Right jaao toh HD + 1
            if (currNode.right != null) {
                q.add(new Pair(currNode.right, hd + 1));
            }
        }
        
        // TreeMap se seedha values nikal kar list mein daal do
        for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
            ans.add(entry.getValue());
        }
        
        return ans;
    }
}
