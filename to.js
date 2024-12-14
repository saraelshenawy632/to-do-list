function add() {
    const input = document.getElementById('input');
    const task = input.value.trim(); 

    if (task !== '') {
        const ul = document.getElementById('ul');
        const li = document.createElement('li');
        li.textContent = task;
        li.addEventListener('click', function () {
            ul.removeChild(li); 
        });
        ul.appendChild(li);
        input.value = ''; 
    } else {
        alert('Please enter a task!');
    }
}

function removeAll() {
    const ul = document.getElementById('ul');
    ul.innerHTML = ''; 
}
