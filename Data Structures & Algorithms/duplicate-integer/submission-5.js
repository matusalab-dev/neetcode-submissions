class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // I: integer of arrays
        // O: true/false
        // E: array contains non-number type, [], null
        // A: input should always be in an array and return true/false only
        // let countNum = 0;
        // for (let i = 0; i < nums.length; i++) {
        //     for (let j = i + 1; j < nums.length; j++) {
        //         // compare each els to each other except on their current position else it'll be false duplicates 
        //         if (i !== j) {
        //             if (nums[i] === nums[j]) {
        //                return true
        //             }
        //         }
        //     }
        // }
        // return false
        let seen = {}
         for(let i = 0; i < nums.length; i++) {
            if(seen[nums[i]]){
                return true
            }
            seen[nums[i]] = true
         } 
         return false
    }
}
