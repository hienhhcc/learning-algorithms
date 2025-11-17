import { arrayToList, ListNode } from "./utils";

function insertionSortList(head: ListNode | null): ListNode | null {
  let arr: number[] = [];
  let curr = head;
  while (curr) {
    arr.push(curr.val);
    curr = curr.next;
  }

  const sortedArr = insertionSort(arr);

  let dummy = new ListNode();
  curr = dummy;
  for (let i = 0; i < sortedArr.length; i++) {
    curr.next = new ListNode(sortedArr[i]);
    curr = curr?.next;
  }

  return dummy.next;
}

function insertionSort(arr: number[]): number[] {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }

  return arr;
}

console.log(insertionSortList(arrayToList([4, 2, 1, 3])));
