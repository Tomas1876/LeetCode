/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result;
            for(let i = 0; i < nums.length; i++){
                for(let j = nums.length-1; j > -1; j--){
                    if(i != j && target - nums[i] == nums[j]) {
                        result = [i, j]; 
                    }
                }
            }
            return result;
};