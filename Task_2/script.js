const input = document.getElementById("taskinput");
const addbtn = document.getElementById("addbtn");
const tasklist = document.getElementById("tasklist");

function addTask(){
    const taskText = input.value.trim();
    if(taskText === "") return;

    const li = document.createElement("li");
    li.innerHTML = `
    <span class="task">${taskText}</span>
    <button class="delete" aria-label="Delete task">X</button>`;

    li.querySelector(".task").addEventListener("click",()=>{
        li.classList.toggle("completed");
    });

    li.querySelector(".delete").addEventListener("click",()=>{
        li.remove();
    });

    tasklist.appendChild(li);
    input.value="";
    input.focus();
}

input.addEventListener("keydown",(e)=>{
    if(e.key === "Enter")addTask();
});

addbtn.addEventListener("click",addTask);

function escapeHtml(str){
    return str.replace(/[&<>"']/g,(m)=>({
        '&':'&amp;',
        '<':'&lt;',        
        '>':'&gt;',        
        '"':'&quot;',        
        "'":'&#39;'        
    }[m]));
}