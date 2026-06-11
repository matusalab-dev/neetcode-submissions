class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // let group = {};
        // for (let str of strs) {
        //     let category = str.split("").sort().join("");
        //     // only run if the category isnot created
        //     if (!group[category]) {
        //         // group['act'] is undefined set []
        //         group[category] = [];
        //     }
        //     // this one run all time uncoditionally
        //     group[category].push(str);
        // }
        // console.log(group);
        // return Object.values(group);

        // let's optimize it from O(n*nlogn) to O(N)
        let group = {};
        let key = "";

        for (let str of strs) {
            let count = new Array(26).fill(0);
            for (let char of str) {
                count[char.charCodeAt(0) - "a".charCodeAt(0)] += 1;
                console.log("k: ", " ".charCodeAt(0));
            }
            key = count.join(",");
            // console.log("a_C: ", key);
            if (!group[key]) {
                group[key] = [];
            }
            group[key].push(str);
        }
        console.log("a_C: ", group);
        return Object.values(group);
    }
}
