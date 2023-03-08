/*
 * @Description  : 
 * @Author       : Sky
 * @Date         : 2023-01-06 16:57:06
 */


// 
const twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]===target){
                return [i,j]
            }
        }
    }
};

const arr=[2,3,11,5]

const response=twoSum(arr,8)
console.log('response: ', response);
