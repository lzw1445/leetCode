/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 *
 * https://leetcode.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (35.78%)
 * Total Accepted:    516.9K
 * Total Submissions: 1.4M
 * Testcase Example:  '"()"'
 *
 * Given a string containing just the characters '(', ')', '{', '}', '[' and
 * ']', determine if the input string is valid.
 * 
 * An input string is valid if:
 * 
 * 
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * 
 * 
 * Note that an empty string is also considered valid.
 * 
 * Example 1:
 * 
 * 
 * Input: "()"
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "()[]{}"
 * Output: true
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: "(]"
 * Output: false
 * 
 * 
 * Example 4:
 * 
 * 
 * Input: "([)]"
 * Output: false
 * 
 * 
 * Example 5:
 * 
 * 
 * Input: "{[]}"
 * Output: true
 * 
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const sList = s.split('');
    for(const v of sList) {
        if(['(','[', '{'].includes(v)) {
            stack.push(v);
        }
        if(v === ')') {
            const last = stack.pop();
            if(last !== '(') {
                return false
            }
        }
        if(v === ']') {
            const last = stack.pop();
            if(last !== '[') {
                return false
            }
        }
        if(v === '}') {
            const last = stack.pop();
            if(last !== '{') {
                return false
            }
        }
    }
    if(!stack.length) return true;
    return false;
};

