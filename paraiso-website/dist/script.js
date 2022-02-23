const wherelive=document.getElementById('wherelive');
const howgive=document.getElementById('howgive');
const howmany=document.getElementById('howmany');
const submitbutton=document.getElementById('submitbutton');
var where,howgiveit,howmanyval;
submitbutton.addEventListener('click',(e)=>{
    where=wherelive.value;
    howgiveit=howgive.value;
    howmanyval=howmany.value;
    alert('Sending '+howmanyval+' cars to '+where+' by '+howgiveit);
    
})