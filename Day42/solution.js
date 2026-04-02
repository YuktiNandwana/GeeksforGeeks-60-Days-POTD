class Solution {
    // Humne return type 'int' kar diya hai taaki GfG wala error na aaye
    public int countWays(int n, int k) {
        if (n == 0) return 0;
        if (n == 1) return k;

        // Post 2 ke liye calculations
        long same = k;
        long diff = (long) k * (k - 1);
        long total = (same + diff);

        // Post 3 se n tak calculation
        for (int i = 3; i <= n; i++) {
            long new_same = diff;
            long new_diff = total * (k - 1);
            
            same = new_same;
            diff = new_diff;
            total = (same + diff);
        }

        // Last mein 'long' ko 'int' mein badal diya (Typecasting)
        return (int) total;
    }
}
