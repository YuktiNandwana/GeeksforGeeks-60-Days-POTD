class Solution {
    public String minWindow(String s, String p) {
        // Return empty string if impossible
        if (s.length() < p.length()) {
            return ""; 
        }

        // Frequency array for characters in p
        int[] targetCounts = new int[256];
        for (char c : p.toCharArray()) {
            targetCounts[c]++;
        }

        int required = p.length();
        int left = 0;
        int right = 0;
        int minLen = Integer.MAX_VALUE;
        int minStart = -1;

        while (right < s.length()) {
            // Expand the window
            char rightChar = s.charAt(right);
            if (targetCounts[rightChar] > 0) {
                required--;
            }
            targetCounts[rightChar]--;
            right++;

            // Shrink the window
            while (required == 0) {
                if (right - left < minLen) {
                    minLen = right - left;
                    minStart = left;
                }

                char leftChar = s.charAt(left);
                targetCounts[leftChar]++;
                
                if (targetCounts[leftChar] > 0) {
                    required++;
                }
                left++;
            }
        }

        // Changed back to "" based on the exact problem description
        if (minStart == -1) {
            return ""; 
        }
        
        return s.substring(minStart, minStart + minLen);
    }
}
