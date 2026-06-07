class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // brute force soln
        // if (nums.length < 2) return [];
        // if the sum of each other is the same as target
        // for (let i = 0; i < nums.length; i++) {
        //     for (let j = i + 1; j < nums.length; j++) {
        //         if (nums[i] + nums[j] === target) return [i, j];
        //     }
        // }
        // come up with better one
        // store the value and their index at the indices obj
        // let indices = {};

        // for (let i = 0; i < nums.length; i++) {
        //     indices[nums[i]] = i
        // }
        // for (let i = 0; i < nums.length; i++) {
        //     let complement = target - nums[i];
        //     console.log('C": ', complement)
        //     console.log("key: ",indices[complement])
        //     if(indices[complement] !== undefined && indices[complement] !== i) {
        //         return [indices[complement], i]
        //     }

        // }
        // return []
        let indices = new Map();

        for (let i = 0; i < nums.length; i++) {
            let complement = target - nums[i];
            console.log(typeof complement)

            if (indices.has(complement)) {
            console.log("C: ", nums[i], complement);
            return [i ,indices.get(complement)]
            }
            indices.set(nums[i], i);
        }
        console.log(indices);
    }
}
