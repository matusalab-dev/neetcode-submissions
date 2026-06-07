class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // input: two string s,t and always lower case
        // output: true/false
        // edgecases: "", null
        // assumptions: input will always be string and o/t either true/false
        // length of s and t should be equal to be anagram, it's false
        // s= "racecar" , t = carrcace" => true count of each char in both side are same
        // s= "jar", t = 'jam" => the count of r is not the same on both side
        // if we sort it, racecar => aaccerr
        // soln 1:
        // let sSplitted = s.split("");
        // let tSplitted = t.split("");
        // if (sSplitted.length !== tSplitted.length) return false;
        // // sort them then compare if they're equal
        // // jar => ajr, jam => ajm
        // if (sSplitted.sort().join("") === tSplitted.sort().join("")) return true;
        // else return false;

        // soln 2: since sorting cost us improve O(nLogn) => O(n)
        // if their length is different return false
        // let's count the # chars in both side, if equal => true, false
        // for each el, do the check if the char of s/t are on the seen obj,
        // if it's not add it, if it's increment the count

        let sSplitted = s.split("");
        let tSplitted = t.split("");
        if (sSplitted.length !== tSplitted.length) return false;

        let freqS = {};
        let freqT = {};

        // built freq for S
        for (let i = 0; i < sSplitted.length; i++) {
            //    if seen[sSplitted[i]] = if exist r = (1) + 1 = 2, else undefined/null => 0 + 1 = 1
            freqS[sSplitted[i]] = (freqS[sSplitted[i]] ?? 0) + 1;
        }

        // built freq for T
        for (let i = 0; i < tSplitted.length; i++) {
            freqT[tSplitted[i]] = (freqT[tSplitted[i]] ?? 0) + 1;
        }

        console.log(freqS, freqT);
        // compare
        for (let key in freqS) {
            console.log(key, freqS[key], freqT[key]);
            // s = r:2, c: 2, t = r:2, c:1
            // s[r] ===  t[r] => true
            // s[c] !== t[c] => false
            //////////////////////////
            // COMPAREING IF THEY'RE EQUAL IS WRONG, CUZ, IT'LL IMMEDIATELY RETURN TRUE AT THE FIRST ITERATION
            // THEN END THE LOOP WITHOUT CHECKING THE REST WHICH IS FALSE POSITIVE
            if (freqS[key] !== freqT[key]) return false;
        }
        return true;
    }
}
