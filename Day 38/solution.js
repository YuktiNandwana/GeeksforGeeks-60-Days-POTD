class Solution {
    public int countPartitions(int[] arr, int diff) {
        int totalSum = 0;
        for (int num : arr) {
            totalSum += num;
        }

        // Logic Check: 
        // 1. (totalSum + diff) must be even
        // 2. totalSum must be greater than or equal to diff
        if ((totalSum + diff) % 2 != 0 || totalSum < diff) {
            return 0;
        }

        int target = (totalSum + diff) / 2;
        int n = arr.length;

        // dp[j] stores the number of subsets with sum j
        int[] dp = new int[target + 1];
        
        // Base case: 1 way to make sum 0 (using an empty subset)
        dp[0] = 1;

        for (int num : arr) {
            // Iterate backwards to ensure each element is used only once
            for (int j = target; j >= num; j--) {
                dp[j] = dp[j] + dp[j - num];
            }
        }

        return dp[target];
    }
}
