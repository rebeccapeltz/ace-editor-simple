document.addEventListener("DOMContentLoaded", function(e){
  let viewCodeBtn = document.querySelector("#view-code");
  viewCodeBtn.addEventListener("click",function(e){
    let editor = ace.edit("ace-editor");
    let code = editor.getValue();
    console.log(code);
    eval(code);
  })
})