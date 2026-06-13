class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freqs = {};

        // from the given nums array, create a mapping(el -> freqency)
        for (let num of nums) {
            freqs[num] = (freqs[num] || 0) + 1;
        }

        // sort the frequencies from large to small
        const SortedFreqsLargeToSmall = Object.values(freqs).sort((a, b) => Number(b) - Number(a));

        // keep the first k frequent els
        const firstKFreqEls = SortedFreqsLargeToSmall.slice(0, k);
        // store the first k frequent els in an array
        let freqEl = [];

        // for each els of num let's check if it exists in the firstKFreqEls array
        // if so, push them to freqEl
        nums.forEach((num, i) => {
            const freq = freqs[num];
            console.log(i, num, firstKFreqEls[i]);
            if (firstKFreqEls.includes(freq)) {
                freqEl.push(num);
            }
        });

        // remove duplicates by storing the array into Set then return it
        console.log([...new Set(freqEl)]);
        return [...new Set(freqEl)];
    }
}
