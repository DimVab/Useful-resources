function password() {
    let pass = prompt();

    if (pass == '123') {
        console.log('Добро пожаловать!');
    } else {
        password();
    }
}

password();