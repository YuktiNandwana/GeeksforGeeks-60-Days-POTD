class Solution {
    // Function ka naam exactly GfG ke hisaab se 'kBitFlips' kar diya hai
    public int kBitFlips(int[] arr, int k) {
        int n = arr.length;
        int[] isFlipped = new int[n]; 
        int currentFlips = 0; 
        int totalOperations = 0; 
        
        for (int i = 0; i < n; i++) {
            if (i >= k) {
                currentFlips ^= isFlipped[i - k]; 
            }
            
            if (arr[i] == (currentFlips % 2)) {
                
                if (i + k > n) {
                    return -1;
                }
                
                isFlipped[i] = 1; 
                currentFlips ^= 1; 
                totalOperations++;
            }
        }
        
        return totalOperations;
    }
}
