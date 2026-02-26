import java.util.*;

class Solution {
    public static boolean areIsomorphic(String s1, String s2) {
        // Agar gadiyon ki ginti aur slots ki ginti alag hai, toh match nahi ho sakta
        if (s1.length() != s2.length()) {
            return false;
        }

        // HASHMAP (The Register): Kis Gadi ko Kaunsa Slot assign hua?
        HashMap<Character, Character> carToSlot = new HashMap<>();
        
        // HASHSET (The Board): Kaun-kaun se Slots already book ho chuke hain?
        HashSet<Character> bookedSlots = new HashSet<>();

        for (int i = 0; i < s1.length(); i++) {
            char car = s1.charAt(i);   // Current gadi
            char slot = s2.charAt(i);  // Jo slot system usko dena chahta hai

            // SCENARIO 1: Ye gadi pehle bhi aa chuki hai (Register mein hai)
            if (carToSlot.containsKey(car)) {
                // Check karo: Kya system isko wahi purana slot de raha hai?
                if (carToSlot.get(car) != slot) {
                    return false; // Alag slot de raha hai! Reject.
                }
            } 
            // SCENARIO 2: Ye bilkul nayi gadi hai
            else {
                // Nayi gadi hai, par check karo ki jo Slot isko de rahe hain, wo kisi aur ne toh book nahi kar rakha?
                if (bookedSlots.contains(slot)) {
                    return false; // Slot already kisi aur gadi ke paas hai! Reject.
                }
                
                // Agar sab theek hai, toh Gadi ko Slot assign kar do
                carToSlot.put(car, slot); // Register mein likh lo
                bookedSlots.add(slot);    // Board par likh do ki ye slot ab Booked hai
            }
        }
        
        // Agar sab gadiyan theek se park ho gayin bina kisi kalesh ke, toh True!
        return true; 
    }
}
