/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
    
    let majorityCount = nums.length/2;
    
    const map ={};
    
    for(let i = 0; i < nums.length; i++) {
        let number = nums[i];
        if(map[number] != null) {
           map[number]++;
        } else {
            map[number] = 1;
        }
        if(map[number] >= majorityCount) {
           return number;
        }
    }
    
    return -1;
};