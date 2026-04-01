class Solution {
    int countStrings(int n) {
        // Base cases for length 1
        int endsInZero = 1;
        int endsInOne = 1;
        
        // Loop runs from length 2 up to n
        for(int i = 2; i <= n; i++){
            int oldEndsInZero = endsInZero;
            
            endsInZero = endsInZero + endsInOne;
            endsInOne = oldEndsInZero;
        }
        
        // Return total valid strings
        return endsInZero + endsInOne;
    }
}
