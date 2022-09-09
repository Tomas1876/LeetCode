/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
    
    if(nums.length == 0) {
       return 0;
    }
    
    current = nums[0];
    count = 1;
    for(let i = 0; i < nums.length; i++) {
        if(current != nums[i]) {
            current = nums[i];
            nums[count] = current;
            count++;
        }
    }
    return count;
    
};