class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freqs = {};

        for (let num of nums) {
            freqs[num] = (freqs[num] || 0) + 1;
        }

        console.log(freqs);
        const SortedFreqsLargeToSmall = Object.values(freqs).sort((a, b) => Number(b) - Number(a));
        // console.log(SortedFreqsLargeToSmall);

        // let firstFreqs = SortedFreqsLargeToSmall[0];
        // let secondFreqs = SortedFreqsLargeToSmall[1];
        // first k frequent Els
        const firstKFreqEls = SortedFreqsLargeToSmall.slice(0, k);
        let freqEl = [];
        console.log(firstKFreqEls);
        let index = 0;

        nums.forEach((num, i) => {
            const freq = freqs[num];
            console.log(i, num, firstKFreqEls[i]);
            if(firstKFreqEls.includes(freq)) {
                freqEl.push(num);
                
            }
        });
        // for (let num of nums) {
        //     const freq = freqs[num];
        //     console.log(num, freq, "i: ", firstKFreqEls[index]);
        //     // if freq el is firstFreq || secondFreq return el
        //     if (freq === firstKFreqEls[index]) {
        //         console.log({ num });
        //         freqEl.push(num);
        //         index++;
        //     }
        // }

        console.log([...new Set(freqEl)]);
        return [...new Set(freqEl)];
    }
}
