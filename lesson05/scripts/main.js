// set variables to the input, button, and .list elements.       
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// add an envent with an arrow funtion
button.addEventListener('click', () => {

    // verificar que el input no este vacio
    if (input.value != '') {
        // creamos variables para el li y el boton de borrar
        const li = document.createElement("li");
        const deleteButton = document.createElement("button");

        // le asignamos valores al li y al boton de borrar
        li.textContent = input.value;
        deleteButton.textContent = '❌';

        // guardamos el input en la lista
        list.append(li);
        li.append(deleteButton);


        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
        });

        // clean up the interface for the user
        input.value = '';
    }

});