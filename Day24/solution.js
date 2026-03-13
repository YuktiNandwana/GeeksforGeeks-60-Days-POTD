import java.util.ArrayList;

class Solution {
    public ArrayList<String> generateIp(String s) {
        ArrayList<String> result = new ArrayList<>();
        
        // Agar string bohot choti ya bohot badi hai, toh valid IP ban hi nahi sakta
        if (s == null || s.length() < 4 || s.length() > 12) {
            return result;
        }
        
        // Backtracking function call
        backtrack(result, s, "", 0, 0);
        return result;
    }

    private void backtrack(ArrayList<String> result, String s, String currentIp, int index, int segmentCount) {
        // Base Case: 4 segments ban gaye aur string poori traverse ho gayi
        if (segmentCount == 4 && index == s.length()) {
            // Last wala extra dot hatane ke liye substring use kiya
            result.add(currentIp.substring(0, currentIp.length() - 1));
            return;
        }
        
        // Agar 4 segments ban gaye par string bachi hai, ya string khatam ho gayi par segments poore nahi hue
        if (segmentCount == 4 || index == s.length()) {
            return;
        }

        // 1, 2, ya 3 digits ka segment lene ki koshish karo
        for (int len = 1; len <= 3 && index + len <= s.length(); len++) {
            String segment = s.substring(index, index + len);
            
            if (isValid(segment)) {
                // Agar valid hai, toh aage badho aur next segment dhundo
                backtrack(result, s, currentIp + segment + ".", index + len, segmentCount + 1);
            }
        }
    }

    private boolean isValid(String segment) {
        // Leading zero check (jaise "05" invalid hai, par "0" valid hai)
        if (segment.length() > 1 && segment.startsWith("0")) {
            return false;
        }
        
        // Range check (0 - 255)
        int value = Integer.parseInt(segment);
        return value >= 0 && value <= 255;
    }
}
