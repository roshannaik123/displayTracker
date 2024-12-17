function a(callback) {
  console.log("THese is function a");
  callback();
}
function b() {
  console.log("these is function b");
}
a(b);
