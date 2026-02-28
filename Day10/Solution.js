import java.util.ArrayList;

class Solution {
    public static ArrayList<Integer> findClosestPair(int arr1[], int arr2[], int x) {
        int n = arr1.length;
        int m = arr2.length;
        
        // Initialize pointers: left at the start of arr1, right at the end of arr2
        int left = 0;
        int right = m - 1;
        
        int min_diff = Integer.MAX_VALUE;
        int resLeft = -1, resRight = -1;
        
        // Two-pointer traversal
        while (left < n && right >= 0) {
            int current_sum = arr1[left] + arr2[right];
            int diff = Math.abs(current_sum - x);
            
            // Update the closest pair if a smaller difference is found
            if (diff < min_diff) {
                min_diff = diff;
                resLeft = arr1[left];
                resRight = arr2[right];
            }
            
            // If the exact sum is found, we can't get any closer
            if (current_sum == x) {
                break; 
            }
            // If the sum is too small, move the left pointer rightward to increase the sum
            else if (current_sum < x) {
                left++;
            } 
            // If the sum is too large, move the right pointer leftward to decrease the sum
            else {
                right--;
            }
        }
        
        // Prepare and return the result
        ArrayList<Integer> closestPair = new ArrayList<>();
        closestPair.add(resLeft);
        closestPair.add(resRight);
        
        return closestPair;
    }
}
