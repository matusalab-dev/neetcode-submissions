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
        // let's initialize the seen variable with empty object
        let seen = {};
        // loop through each item
        for (let i = 0; i < nums.length; i++) {
            // check if the item exists in the seen obj
            if (seen[nums[i]]) {
                // if so, return true
                return true;
            }
            // else store it to the seen obj
            seen[nums[i]] = true;
        }
        // else return false
        return false;
    }
}
