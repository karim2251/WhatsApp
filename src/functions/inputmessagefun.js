
export default function inputmessagefun(){
document.getElementById('inputmessage').addEventListener('input',()=>{
      
    const input = document.getElementById('inputmessage');
        const btn1 = document.getElementById('btn1');
        const btn2 = document.getElementById('btn2');
  
        if (input.value.length >= 1) {
            btn1.style.display = 'inline-block';
            btn2.style.display = 'none';
        } else {
            btn1.style.display = 'none';
            btn2.style.display = 'inline-block';
        }
  
  })
}
