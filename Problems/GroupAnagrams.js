/**
 * Given an array of strings, group anagrams together.
 * @param {string[]} strs
 * @return {string[][]}
 */

const groupAnagrams = strs => {
  let groupObject = {};
  for (let str of strs) {
    let sortedStr = str
      .split("")
      .sort()
      .join("");
    if (!groupObject[sortedStr]) {
      groupObject[sortedStr] = [];
    }
    groupObject[sortedStr].push(str);
  }
  return Object.values(groupObject);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

//output: [["bat"],["nat","tan"],["ate","eat","tea"]]
