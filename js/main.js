window.addEventListener("load", function(e){
  let editor = ace.edit("ace-editor");
  editor.focus();
  let viewCodeBtn = document.querySelector("#view-code");
  viewCodeBtn.addEventListener("click",function(e){
    
    let code = editor.getValue();
    console.log(code);
    eval(code);
  })
})