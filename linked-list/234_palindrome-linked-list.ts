//* Convert to array then do palindrome on array

import { arrayToList, ListNode } from "./utils";

// O(n) time, O(n) space
function isPalindromeV1(head: ListNode | null): boolean {
  //TODO: Conver to array
  let curr = head;
  const arr: number[] = [];
  while (curr) {
    arr.push(curr.val);
    curr = curr.next;
  }

  //TODO: Do palindrome on arr
  let l = 0;
  let r = arr.length - 1;
  while (l <= r) {
    if (arr[l] !== arr[r]) {
      return false;
    }
    l++;
    r--;
  }

  return true;
}

//* Find the middle, reverse from the middle to the end and then do the palindrome
// O(n) time, O(1) space
function isPalindromeV2(head: ListNode | null): boolean {
  //TODO: Find the middle
  let fast = head,
    slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow?.next!;
  }
  //TODO: Reverse from middle to the end
  let prev: ListNode | null = null;
  let curr = slow;
  while (curr) {
    const temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  //TODO: Do the palindrome
  let left = head;
  let right = prev;
  while (left && right) {
    if (left.val !== right.val) {
      return false;
    }
    left = left.next;
    right = right.next;
  }

  return true;
}

console.log(isPalindromeV1(arrayToList([1, 2, 2, 1]))); //true
console.log(isPalindromeV1(arrayToList([1, 2]))); //false
