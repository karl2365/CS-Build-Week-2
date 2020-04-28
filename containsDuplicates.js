/**
 * @param {number[]} nums
 * @return {boolean}
 */
let working = 0;

var containsDuplicate = function(nums) {
    if (nums.length < 2){
    return false
}
    for (let i = 0;i<nums.length;i++){
        working = nums[i]
        for (let j = i+1; j < nums.length; j++ ){
            if( nums[j] === nums[i]){
                return true;
            }
        }
    }
    return false;
};
