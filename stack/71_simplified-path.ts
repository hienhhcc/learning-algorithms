function simplifyPath(path: string): string {
  const paths = path.split("/").filter((p) => p !== "");
  const stack: string[] = [];

  for (let p of paths) {
    if (p === "..") {
      stack.pop();
    } else if (p === ".") {
      continue;
    } else {
      stack.push(p);
    }
  }

  return "/" + stack.join("/");
}

console.log(simplifyPath("/home/")); // Result: /home
console.log(simplifyPath("/home//foo/")); //Result: /home/foo
console.log(simplifyPath("/home/user/Documents/../Pictures")); //Result: /home/user/Pictures
console.log(simplifyPath("/../")); //Result: /
console.log(simplifyPath("/.../a/../b/c/../d/./")); //Result: /.../b/d
