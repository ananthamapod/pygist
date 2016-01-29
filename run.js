$(document).ready(function() {
  // TODO: FIX ME
  console.log("Running");
  function test() {
    var pre = $('pre');
    var py_code = pre.childNodes;
    console.log(pre.innerHTML);
  }
  setInterval(test, 1000);
  //Sk.configure({output:console.log});
  //eval(Sk.importMainWithBody("<stdin>", false, py_code, true));
});
