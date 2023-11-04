let title = document.querySelector(".title");
let ul = document.querySelector("ul");
let reload = document.querySelector(".reload");

window.onload = function(){
    if(window.navigator.onLine){
        onLine();
    }else{
    offLine();
}}

window.addEventListener("online",function(){
    onLine();
});
window.addEventListener("offline",function(){
    offLine();
});

reload.onclick = function(){
    window.location.reload();
}

function onLine(){
    title.innerHTML = "OnLine Now";
    title.style.color = "green";
    ul.classList.add('hide');
    reload.classList.add('hide');
    title.classList.add('ss');

}
function offLine(){
    title.innerHTML = 'OffLine Now';
    title.style.color = 'red';
    ul.classList.remove('hide');
    reload.classList.remove('hide');
}