
const button = document.querySelector('button');

const addLoading = () => {
    button.innerHTML = '<img src="loading.png" class="loading">'
}

const removeLoading = () => {
    button.innerHTML = 'Enviar'
}

const handleSubmit = (event) => {
    event.preventDefault();
    addLoading();

    const name = document.querySelector('input[name=Nome]').value;
    const telefone = document.querySelector('input[name=Telefone]').value;

    fetch('https://api.sheetmonkey.io/form/xvjaGtbdvcNb7c7DP2HkS', {
        method: 'post' ,
        headers: {
            'Accept': 'application/json' ,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, telefone }),
    }).then(() => removeLoading());
    
}

document.querySelector('form').addEventListener('submit', handleSubmit);