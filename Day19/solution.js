class Solution {
    boolean pythagoreanTriplet(int[] arr) {
        int max_val = 0;
        
        // Find the maximum element in the array
        for (int x : arr) {
            max_val = Math.max(max_val, x);
        }
        
        // Create a hash array to store the presence of elements
        boolean[] hash = new boolean[max_val + 1];
        for (int x : arr) {
            hash[x] = true;
        }
        
        // Check for all possible values of a and b
        for (int a = 1; a <= max_val; a++) {
            // If 'a' is not in the array, skip
            if (!hash[a]) continue;
            
            for (int b = a; b <= max_val; b++) {
                // If 'b' is not in the array, skip
                if (!hash[b]) continue;
                
                // Calculate c^2
                int c_square = a * a + b * b;
                int c = (int) Math.sqrt(c_square);
                
                // Check if c is a perfect integer, within bounds, and exists in the array
                if (c * c == c_square && c <= max_val && hash[c]) {
                    return true;
                }
            }
        }
        
        return false;
    }
}
