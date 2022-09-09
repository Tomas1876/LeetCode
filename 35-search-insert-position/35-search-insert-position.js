/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums, target) {
    
    if(target < nums[0]) {
       return 0;
    }
    if(target > nums[nums.length-1]) {
       return nums.length;
    }
    
    let index = 1;
    for(let i = 0; i < nums.length; i++) {
        if(target == nums[i]) {
           return i;
        }
        if(target > nums[i]) {
           index = i+1;
        }
    }
    return index;
};