const seacrInsert = (nums, target) => {
    let indexOfNum = nums.indexOf(target)
    if (indexOfNum !== -1) {
        return indexOfNum
    } else {
        nums.push(target)
        let newNum = nums.sort((a, b) => a - b)
        indexOfNum = newNum.indexOf(target)
        return indexOfNum
    }
}

const arr = [1, 3, 5, 6], target = 7
const res = seacrInsert(arr, target)
console.log('res: ', res);


// 正统解法   二分法
//  mid=left+(right-left)/2
