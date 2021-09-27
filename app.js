// SEARCH INPUT
const seachUser = document.getElementById('searchUser');

// SEARCH INPUT ADD EVENT LISTENER 

seachUser.addEventListener('keyup', (e) => {
    //  GET INPUT TEXT
    const userText = e.target.value;

    if(userText !== ''){
        console.log(userText);
    }
})
//
