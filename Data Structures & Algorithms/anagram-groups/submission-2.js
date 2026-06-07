class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let sortedStrs = {};

        strs.forEach((str) => {
            let category = str.split("").sort().join("");

            if (!sortedStrs[category]) {
                sortedStrs[category] = [];
            }
            sortedStrs[category].push(str);
        });

        // console.log("groupedAnagram: ", Object.values(sortedStrs));
        // if it's unsorted is in one category of the sorted push it into it's category
        // replace with below one line of code
        // let groupedAnagram = [];
        // //    push group of anagrams into their container array
        // for (let category in sortedStrs) {
        //     console.log(category, sortedStrs[category]);
        //     groupedAnagram.push(sortedStrs[category]);
        // }

        // return groupedAnagram;
        // replace the commented code with this one line of code
        return Object.values(sortedStrs);
    }
}
