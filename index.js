/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    let next_unique_num = 2

    for(let i = 2; i< nums.length; i++){
        if(nums[i] != nums[next_unique_num -2]){
            nums[next_unique_num] = nums[i];
            next_unique_num +=1;
        }
    }
    return next_unique_num;
    
};
