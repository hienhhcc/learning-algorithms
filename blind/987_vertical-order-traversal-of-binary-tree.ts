import { arrayToTree, TreeNode } from "../binary-trees/utils";

function verticalTraversal(root: TreeNode | null): number[][] {}

console.log(verticalTraversal(arrayToTree([3, 9, 20, null, null, 15, 7])));
console.log(verticalTraversal(arrayToTree([1, 2, 3, 4, 5, 6, 7])));
console.log(verticalTraversal(arrayToTree([1, 2, 3, 4, 6, 5, 7])));
