class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // input: array of numbers,
        // output: True / False
        // edgecases: 0, empty array, mixed type items
        // assumptions:
        // [1,2,3,3] - true
        // [1,2,3,4] - false
        // compare each items with other items of the array
        // if they're equal, return true else false
        // for (let i = 0; i < nums.length; i++) {
        //     // console.log("i: ", nums[i])
        //     for (let j = 0; j < nums.length; j++) {
        //         // console.log("j: ", nums[j])
        //         if (i !== j) {

        //             if (nums[i] === nums[j]) {

        //                 return true;
        //             }
        //         }
        //         // return false
        //         // ensure i'm not check the same items again
        //     }
        // }
        //  return false

        // optimized from O(n^2) to O(n)
        let seen = {};
        for (let i = 0; i < nums.length; i++) {
           if(seen[nums[i]]) {
            return true;
            }
            seen[nums[i]] =  true;
        }
        return false
    }
}
