class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
         const numSet = new Set(nums);

    let len = 0;
    let longestConsecutive = 0;

    for (let num of numSet) {
    if (!numSet.has(num - 1)) {  // only true for sequence starts
        let len = 1;
        let current = num;

        while (numSet.has(current + 1)) {
            current++;
            len++;
        }

        longestConsecutive = Math.max(longestConsecutive, len);
    }
}

    return longestConsecutive
    }
}
