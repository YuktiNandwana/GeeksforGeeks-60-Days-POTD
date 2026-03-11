import java.util.Stack;

class Solution {
    // Function ka naam exactly GfG ke hisaab se 'sumSubMins' kar diya hai
    public int sumSubMins(int[] arr) {
        int n = arr.length;
        int[] left = new int[n];  
        int[] right = new int[n]; 
        Stack<Integer> st = new Stack<>();
        
        // Left limits nikalna (Strictly less)
        for (int i = 0; i < n; i++) {
            while (!st.isEmpty() && arr[st.peek()] > arr[i]) {
                st.pop();
            }
            left[i] = st.isEmpty() ? -1 : st.peek();
            st.push(i);
        }
        
        st.clear();
        
        // Right limits nikalna (Less than or equal)
        for (int i = n - 1; i >= 0; i--) {
            while (!st.isEmpty() && arr[st.peek()] >= arr[i]) {
                st.pop();
            }
            right[i] = st.isEmpty() ? n : st.peek();
            st.push(i);
        }
        
        // Final Sum calculate karna
        long totalSum = 0;
        for (int i = 0; i < n; i++) {
            long leftCount = i - left[i];
            long rightCount = right[i] - i;
            long contribution = (arr[i] * leftCount * rightCount);
            totalSum += contribution;
        }
        
        return (int)totalSum;
    }
}
