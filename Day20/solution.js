class Solution {
    public String largestSwap(String s) {
        char[] digits = s.toCharArray();
        
        // 1. Record the last occurrence of each digit (0-9)
        int[] last = new int[10]; 
        for (int i = 0; i < digits.length; i++) {
            last[digits[i] - '0'] = i;
        }

        // 2. Scan from left to right to find the first swappable digit
        for (int i = 0; i < digits.length; i++) {
            // Check for any digit larger than the current digit
            for (int d = 9; d > (digits[i] - '0'); d--) {
                // If a larger digit exists later in the string, swap and return
                if (last[d] > i) {
                    char temp = digits[i];
                    digits[i] = digits[last[d]];
                    digits[last[d]] = temp;
                    return new String(digits);
                }
            }
        }
        
        return s;
    }
}

