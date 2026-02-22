class Solution {
    public static ArrayList<Integer> findUnion(int[] a, int[] b) {
        // code here
        // 1. make. a hashset
        HashSet<Integer> set=new HashSet<>();
        
        //2.  phle array ke saare element hashset mei daal do
        
        for(int num:a){
            set.add(num);
        }
            //3.  dusre array ke saare element hashset mei daal do
            for(int num:b){
                set.add(num);
            }
            
            //4. set ko arraylist mei convert krke return krdo
            ArrayList<Integer> result = new ArrayList<>(set);
            
            return result;
        }
    }
