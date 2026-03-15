class Solution {
    static class Pair {
        Node node;
        int hd;
        Pair(Node n, int h) {
            node = n;
            hd = h;
        }
    }

    public ArrayList<ArrayList<Integer>> verticalOrder(Node root) {
        ArrayList<ArrayList<Integer>> res = new ArrayList<>();
        if (root == null) return res;

        // Map to store nodes at each horizontal distance
        TreeMap<Integer, ArrayList<Integer>> map = new TreeMap<>();
        // Queue for BFS: stores node and its horizontal distance
        Queue<Pair> q = new LinkedList<>();

        q.add(new Pair(root, 0));

        while (!q.isEmpty()) {
            Pair curr = q.poll();
            Node temp = curr.node;
            int hd = curr.hd;

            // Add node data to the corresponding vertical line
            map.putIfAbsent(hd, new ArrayList<>());
            map.get(hd).add(temp.data);

            if (temp.left != null) q.add(new Pair(temp.left, hd - 1));
            if (temp.right != null) q.add(new Pair(temp.right, hd + 1));
        }

        // Add all lists from the sorted map to the result
        for (ArrayList<Integer> list : map.values()) {
            res.add(list);
        }
        return res;
    }
}
