let email = prompt('input your e-mail');
let num1 = 5;
let num2 = 6;

let Users = {
    admin: {
        email: 'admin@gmail.com',
        password: 'AdminPass'
    },
    user: {
        email: 'user@gmail.com',
        password: 'UserPass'
    }
}


if (email !== null && email.length < num1) {
    alert('I don\'t know any emails having name length less than 5 symbols');
} else if (!email) {
    alert('Canceled');
} else if (email === Users.user.email || email === Users.admin.email) {
    let password = prompt('password');
    if (!password) {
        alert('Canceled');
    } else if (password === Users.admin.password || password === Users.user.password) {
        if (confirm('Do you want to change your password?') === true) {
            let password = prompt('input your old password');
            if (password === Users.admin.password || password === Users.user.password) {
                let newPassword = prompt('input your new password');
                if (!newPassword) {
                    alert('Canceled');
                } else if (newPassword.length < num2) {
                    alert('It’s too short password. Sorry.');
                } else if (newPassword.length >= num2) {
                    let confPassword = prompt('enter it again.');
                    if (confPassword !== newPassword) {
                        alert('You wrote the wrong password.');
                    } else if (email === Users.user.email) {
                        Users.user.password = newPassword;
                        alert('You have successfully changed your password.');
                    } else if (email === Users.admin.email) {
                        Users.admin.password = newPassword;
                        alert('You have successfully changed your password.');
                    }
                }
            } else {
                alert('Wrong password');
            }
        } else {
            alert('You have failed the change.');
        }
    } else {
        alert('Wrong password');
    }
} else {
    alert('I don’t know you');
}