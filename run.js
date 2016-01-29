console.log("Running");
var py_code = $('pre').innerHTML;
output = Sk.importMainWithBody("<stdin>", false, py_code, true);
