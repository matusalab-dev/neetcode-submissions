class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // if the length of S & T is different return
        // the count of each character in both "s" and "t" should be the same
        // initialize count s char and t char to 0
        let splittedS = s.split("");
        let splittedT = t.split("");
        // if length of S & T is d/t they're not anagram stop here
        if (splittedS.length !== splittedT.length) return false;

        // built freq for T
        // for (let i = 0; i < splittedS.length; i++) {
        //     console.log(splittedS[i]);
        //     let char = splittedS[i];
        //     seenS[char] = (seenS[char] || 0) + 1;
        // }

        // // built freq for T
        // for (let i = 0; i < splittedT.length; i++) {
        //     let char = splittedT[i];
        //     seenT[char] = (seenT[char] || 0) + 1;
        // }

        // replace the above piece of code with the resable builtFreqMap() function
        let seenS = buildFreqMap(s);
        let seenT = buildFreqMap(t);

        console.log(seenS, seenT);
        // compare
        for (let key in seenS) {
            console.log(seenS[key], seenT[key], seenS[key] === seenT[key]);
            if (seenS[key] !== seenT[key]) {
                return false;
            }
        }
        return true;
    }
}

// create a reusable freqMap fn
function buildFreqMap(arrOrStr) {
    let freq = {};

    for (let key of arrOrStr) {
        freq[key] = (freq[key] ?? 0) + 1;
    }

    return freq;
}
