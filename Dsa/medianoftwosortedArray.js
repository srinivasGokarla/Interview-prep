// var findMedianSortedArrays = function(nums1, nums2) {
//     const mergedArray  = [...nums1, ...nums2].sort((a,b)=> a-b);
//     const n = mergedArray.length;
//     if(n%2 === 0){
//         return (mergedArray[n/2]+ mergedArray[n/2 -1]) / 2
//     }else {
//         return mergedArray[Math.floor(n/2)]
//     }
// };

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let arr = [...nums1, ...nums2].sort((a,b) => a-b)
    let mid = (arr.length-1)/2
    if(arr.length % 2 === 1) {
        return arr[mid]
    } else {
        let median = (arr[Math.floor(mid)] + arr[Math.ceil(mid)])/2;
        return median
    }
};