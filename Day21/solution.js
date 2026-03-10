import java.util.Stack;

class Solution {
    // Return type wapas 'int' kar diya hai GFG ke hisaab se
    public int countSubarrays(int[] arr) {
        int n = arr.length;
        
        int[] nse = new int[n]; 
        Stack<Integer> st = new Stack<>();
        
        for (int i = n - 1; i >= 0; i--) {
            while (!st.isEmpty() && arr[st.peek()] >= arr[i]) {
                st.pop();
            }
            nse[i] = st.isEmpty() ? n : st.peek();
            st.push(i);
        }
        
        // Count variable bhi int mein wapas aa gaya
        int count = 0;
        for (int i = 0; i < n; i++) {
            count += (nse[i] - i);
        }
        
        return count;
    }
}
