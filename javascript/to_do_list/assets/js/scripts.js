let input_text = document.querySelector("#tarefa");
let input_button = document.querySelector(".adicionar_tarefa");
let check_task = document.querySelector(".check_tarefa")
let line_task_ul = document.querySelector(".wrapper_tarefa")
let line_task = document.querySelector(".wrapper_tarefa_p")
let line_task_li = document.querySelector(".wrapper_tarefa_li")
let line_task_trash = document.querySelector(".task_ico_delete");
let line_task_clear = document.querySelector("#limpar_lista");

input_text.focus();

input_button.addEventListener('click', () => {
    if (input_text.value) {

        line_task_ul.style.display = 'flex';

        const cria_wrapper_task_trash = document.createElement('img');
        cria_wrapper_task_trash.src = 'assets/img/trash.png';
        cria_wrapper_task_trash.title = 'Apagar tarefa';
        cria_wrapper_task_trash.classList.add('task_ico_delete');

        cria_wrapper_task_trash.addEventListener('click', () => delete_task(line_task_ul, cria_wrapper_task_li, cria_wrapper_task_trash, cria_wrapper_task_p));

        const cria_wrapper_task_p = document.createElement('p');
        cria_wrapper_task_p.classList.add('wrapper_tarefa_p');

        cria_wrapper_task_p.innerHTML = input_text.value;

        const cria_wrapper_task_input = document.createElement('input');
        cria_wrapper_task_input.type = 'checkbox';
        cria_wrapper_task_input.classList.add('check_tarefa');

        cria_wrapper_task_input.addEventListener('click', () => format_task_completed(cria_wrapper_task_li, cria_wrapper_task_p, line_task));

        const cria_wrapper_task_li = document.createElement('li');
        cria_wrapper_task_li.classList.add('wrapper_tarefa_li')

        cria_wrapper_task_li.appendChild(cria_wrapper_task_trash);
        cria_wrapper_task_li.appendChild(cria_wrapper_task_p);
        cria_wrapper_task_li.appendChild(cria_wrapper_task_input);
        line_task_ul.appendChild(cria_wrapper_task_li);

        line_task_clear.addEventListener('click', () => delete_list_task(line_task_ul, line_task_li, line_task, cria_wrapper_task_li, cria_wrapper_task_p));

        setTimeout(() => {
            line_task_clear.style.display = 'block';
        }, 1000)

        input_text.value = "";
        input_text.focus();

    } else {
        alert('Campo vazio!');
        input_text.focus();
    }
});



// DELETAR TAREFA
const delete_task = (line_task_ul, cria_wrapper_task_li, cria_wrapper_task_trash, cria_wrapper_task_p) => {
    const tasks = cria_wrapper_task_li.childNodes;
    for (const task of tasks) {
        if (task.isSameNode(cria_wrapper_task_p)) {
            cria_wrapper_task_li.remove();
            if (line_task_ul.childNodes.length < 2) {
                setTimeout(() => {
                    line_task_ul.style.display = 'none';
                    line_task_clear.style.display = 'none';
                }, 1000);
            }
        }
    }

}

// LIMPAR LISTA DE TAREFA
const delete_list_task = (line_task_ul, line_task_li, line_task, cria_wrapper_task_li) => {
    cria_wrapper_task_li.remove();
    setTimeout(() => {
        line_task_ul.style.display = 'none';
        line_task_clear.style.display = 'none';
    }, 1000);

}

// RISCAR TAREFA COMPLETADA
const format_task_completed = (cria_wrapper_task_li, cria_wrapper_task_p, line_task) => {
    const tasks = cria_wrapper_task_li.childNodes;
    for (const task of tasks) {
        if (task.isSameNode(cria_wrapper_task_p)) {
            cria_wrapper_task_p.classList.toggle("wrapper_tarefa_p_completa");
        }
    }
}


