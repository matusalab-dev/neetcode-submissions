class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let group = {};
        
        for (let str of strs) {
            let category = str.split("").sort().join("");

            // only run if the category isnot created
            if (!group[category]) {
                // group['act'] is undefined set []
                group[category] = [];
            }
            // this one run all time uncoditionally
            group[category].push(str);
        }

        console.log(group);
        return Object.values(group);
    }
}
