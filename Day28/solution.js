class Solution {
    public static int minTime(Node root, int target) {
        // Step 1: Map parents and find the target node
        Map<Node, Node> parentMap = new HashMap<>();
        Node targetNode = getTargetAndMapParents(root, target, parentMap);
        
        // Step 2: Radial BFS
        Queue<Node> queue = new LinkedList<>();
        queue.add(targetNode);
        
        Set<Node> visited = new HashSet<>();
        visited.add(targetNode);
        
        int time = 0;
        
        while (!queue.isEmpty()) {
            int size = queue.size();
            boolean burnedInThisStep = false;
            
            for (int i = 0; i < size; i++) {
                Node current = queue.poll();
                
                // Check Left, Right, and Parent
                Node[] neighbors = {current.left, current.right, parentMap.get(current)};
                for (Node neighbor : neighbors) {
                    if (neighbor != null && !visited.contains(neighbor)) {
                        burnedInThisStep = true;
                        visited.add(neighbor);
                        queue.add(neighbor);
                    }
                }
            }
            if (burnedInThisStep) time++;
        }
        return time;
    }

    private static Node getTargetAndMapParents(Node root, int target, Map<Node, Node> parentMap) {
        Queue<Node> q = new LinkedList<>();
        q.add(root);
        Node targetNode = null;
        while (!q.isEmpty()) {
            Node curr = q.poll();
            if (curr.data == target) targetNode = curr;
            if (curr.left != null) {
                parentMap.put(curr.left, curr);
                q.add(curr.left);
            }
            if (curr.right != null) {
                parentMap.put(curr.right, curr);
                q.add(curr.right);
            }
        }
        return targetNode;
    }
}
