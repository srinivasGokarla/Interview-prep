import java.util.ArrayList;

public class Solution {
    static int maximumSubarraySum(int n, ArrayList<Integer> v) {
        // Write your code here.
        int sum = 0;
        for(int num : v) {
            if(num > 0) {
                sum += num;
            }
        }
        
    return sum;
    }
}