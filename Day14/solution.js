Max Xor Subarray of size K
class Solution {
    // Renamed to match the platform's expected method signature
    public int maxSubarrayXOR(int[] arr, int k) {
        int n = arr.length;
        
        if (n == 0 || k == 0 || k > n) {
            return 0;
        }

        int currentXor = 0;
        
        // 1. Calculate the XOR sum for the first window of size 'k'
        for (int i = 0; i < k; i++) {
            currentXor ^= arr[i];
        }
        
        int maxXor = currentXor;
        
        // 2. Slide the window across the rest of the array
        for (int i = k; i < n; i++) {
            // Remove the element that left the window and add the new one
            currentXor ^= arr[i - k] ^ arr[i];
            
            // Update the maximum XOR found so far
            maxXor = Math.max(maxXor, currentXor);
        }
        
        return maxXor;
    }
}
