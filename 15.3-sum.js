/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 *
 * https://leetcode.com/problems/3sum/description/
 *
 * algorithms
 * Medium (36.00%)
 * Likes:    31964
 * Dislikes: 2998
 * Total Accepted:    4.2M
 * Total Submissions: 11.8M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * Given an integer array nums, return all the triplets [nums[i], nums[j],
 * nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] +
 * nums[k] == 0.
 *
 * Notice that the solution set must not contain duplicate triplets.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [-1,0,1,2,-1,-4]
 * Output: [[-1,-1,2],[-1,0,1]]
 * Explanation:
 * nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
 * nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
 * nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
 * The distinct triplets are [-1,0,1] and [-1,-1,2].
 * Notice that the order of the output and the order of the triplets does not
 * matter.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [0,1,1]
 * Output: []
 * Explanation: The only possible triplet does not sum up to 0.
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [0,0,0]
 * Output: [[0,0,0]]
 * Explanation: The only possible triplet sums up to 0.
 *
 *
 *
 * Constraints:
 *
 *
 * 3 <= nums.length <= 3000
 * -10^5 <= nums[i] <= 10^5
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function (nums) {
  const numsSort = nums.sort((a, b) => (a - b > 0 ? 1 : -1));
  const tempResult = [];

  for (let i = 1; i < numsSort.length; i++) {
    let leftIndex = 0;
    let left;
    let current = numsSort[i];
    let rightIndex = numsSort.length - 1;
    let right;

    while (leftIndex < i && i < rightIndex) {
      left = numsSort[leftIndex];
      right = numsSort[rightIndex];

      if (left + current + right > 0) {
        rightIndex--;
      } else if (left + current + right < 0) {
        leftIndex++;
      } else {
        tempResult.push([left, current, right]);
        leftIndex++;
        rightIndex--;

        // Skip duplicates for the second and third numbers
        while (leftIndex < rightIndex && nums[leftIndex] === nums[leftIndex + 1]) leftIndex++;
        while (leftIndex < rightIndex && nums[rightIndex] === nums[rightIndex - 1]) rightIndex--;
      }
    }
  }

  const jsonResult = tempResult.reduce((acc, curr) => {
    const jsonValue = JSON.stringify(curr);
    if (!acc.includes(jsonValue)) acc.push(jsonValue);

    return acc;
  }, []);

  const result = jsonResult.map((item) => JSON.parse(item));

  console.log(result);
  return result;
};
// @lc code=end
threeSum([-1, 0, 1, 2, -1, -4]);
threeSum([-1, 0, 1, 2, -1, -4, -1, -1, -1, 0, 2]);
threeSum([0, 0, 0]);
threeSum([0, 1, 1]);
