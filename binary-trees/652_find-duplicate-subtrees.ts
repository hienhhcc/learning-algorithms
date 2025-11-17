import { arrayToTree, TreeNode } from "./utils";

function findDuplicateSubtrees(root: TreeNode | null): Array<TreeNode | null> {
  const result: TreeNode[] = [];
  const map: Record<string, TreeNode[]> = {};

  function dfs(node: TreeNode | null): string {
    if (node == null) return "null";
    const str = [node.val, dfs(node.left), dfs(node.right)].join(",");
    console.log({ str });
    if (map[str]?.length === 1) result.push(node);

    if (map[str] == null) {
      map[str] = [];
    }

    map[str].push(node);

    return str;
  }

  dfs(root);
  return result;
}

console.log(
  findDuplicateSubtrees(arrayToTree([1, 2, 3, 4, null, 2, 4, null, null, 4]))
);
// console.log(findDuplicateSubtrees(arrayToTree([2, 1, 1])));
// console.log(findDuplicateSubtrees(arrayToTree([2, 2, 2, 3, null, 3, null])));
