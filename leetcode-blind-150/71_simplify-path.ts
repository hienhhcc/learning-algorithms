function simplifyPath(path: string): string {
  const paths = path.split("/").filter((p) => p !== "");
  const stack: string[] = [];

  for (const p of paths) {
    if (p === ".") {
      continue;
    } else if (p === "..") {
      stack.pop();
    } else {
      stack.push(p);
    }
  }

  return `/${stack.join("/")}`;
}

console.log(simplifyPath("/home/"));
console.log(simplifyPath("/home//foo/"));
console.log(simplifyPath("/home/user/Documents/../Pictures"));
console.log(simplifyPath("/../"));
console.log(simplifyPath("/.../a/../b/c/../d/./"));
