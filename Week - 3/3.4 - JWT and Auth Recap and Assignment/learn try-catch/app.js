function getLength(name) {
  return name.length;
}

let name = "Pravin";
try {
  let ans = getLength();
  console.log(ans);
} catch (error) {
  console.log("Error occured");
}
