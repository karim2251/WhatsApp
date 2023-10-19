
export default function searchfocus(){
    const search = document.getElementById('search');
    const a1 = document.getElementById('a1');
    const a2 = document.getElementById('a2');
  
  
    search.addEventListener('focus', () => {
        a1.style.display = 'none';
        a2.style.display = 'inline'; 
    });
  
    search.addEventListener('blur', () => {
        a1.style.display = 'inline'; 
        a2.style.display = 'none';
    });
}