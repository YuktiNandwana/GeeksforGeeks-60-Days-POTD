class Solution {
    public long subarrayXor(int arr[], int k) {
        long count = 0;
        int xr = 0; // Ye hamara 'Current_XOR' hai
        
        // HashMap hamari "Diary" hai jo record rakhegi ki kaunsa XOR kitni baar aaya
        HashMap<Integer, Integer> map = new HashMap<>();
        map.put(0, 1); // Shuruat mein 0 XOR 1 baar hota hai
        
        for (int i = 0; i < arr.length; i++) {
            xr = xr ^ arr[i]; // Naya number jud gaya
            
            int target = xr ^ k; // Ye wo "Pichla Hissa (A)" hai jo hume diary mein dhoondhna hai
            
            // Agar pichla hissa diary mein hai, toh uske count ko answer mein add kar lo
            if (map.containsKey(target)) {
                count += map.get(target);
            }
            
            // Ab is current_XOR ko bhi aage ke liye diary mein likh do
            map.put(xr, map.getOrDefault(xr, 0) + 1);
        }
        
        return count;
    }
}
