import java.util.*;

class Solution {
    public String findLargest(int[] arr) {
        // code here
        int n=arr.length;
        String [] b= new String[n];
        
        for(int i=0;i<n;i++){
            b[i]= String.valueOf(arr[i]);
        }
        
        Arrays.sort(b, (s1, s2) -> (s2 + s1).compareTo(s1 + s2));
        
        if(b[0].equals("0")) return "0";
        
        StringBuilder result = new StringBuilder();
        for(String r:b){
            result.append(r);
        }
        return result.toString();
    }
}
