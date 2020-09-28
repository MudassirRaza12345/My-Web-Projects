var user_name;

function send() {
    var input = document.getElementById('input');
    if (input.value === "") {
        alert("Please write something on message box..!!");
    } else {
        // var msg = document.getElementById('msg');
        // var text = document.createElement('p');
        // var today = new Date();
        // text.innerHTML = user_name + ": " + input.value + " <b>(" + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + ")</b>";
        // msg.appendChild(text);

        var obj = {
            name: user_name,
            text: input.value
        }
        firebase.database().ref('user').push(obj);
        input.value = "";
    }
}

function getdata() {
    firebase.database().ref('user').on('child_added', function(data) {

        var msg = document.getElementById('msg');
        var text = document.createElement('p');
        var datas = document.createTextNode(data.val().name + ": " + data.val().text);
        text.appendChild(datas);
        text.style.border="1px solid dashed"
        text.style.backgroundColor="#FFFF00"
        text.style.color="#6A5ACD"
        text.style.borderRadius="20px"
        text.style.margin="20px"
       
       // text.style.marginRight="10px"
       text.style.padding="10px"
        text.style.fontSize="20px"




        msg.appendChild(text);

    });
}
getdata();

var container = document.getElementById('container');

function closes() {
    var mail = document.getElementById('mail').value;
    var pass = document.getElementById('pass').value;
    if (mail == '' || pass == '') {
        alert('Please fill all fields and reload the page');
        container.style.visibility = 'hidden';
    }
}

let signup = () => {
    let smail = document.getElementById('smail').value;
    let spass = document.getElementById('spass').value;

    firebase.auth().createUserWithEmailAndPassword(smail, spass)
        .then((result) => {
            console.log(result);
            alert("Sign up successfully....!!");
        })
        .catch(function(error) {

            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
            alert("Please provide correct information...!!");

        });
}


let login = () => {
    let mail = document.getElementById('mail').value;
    let pass = document.getElementById('pass').value;

    firebase.auth().signInWithEmailAndPassword(mail, pass)
        .then((result) => {
            console.log(result);
            alert("Log in successfully....!!");
            user_name = prompt("Enter your name to display in message..!!");
        })

    .catch(function(error) {

        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        container.style.visibility = 'hidden';
        alert("Either mail or password wrong...!!");
        alert('Please Close the form Reload the page');

    });


}