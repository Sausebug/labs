function UserResult(){
    let name = document.getElementById("name").value;
    let pass = document.getElementById("pass").value;
    let agree = document.getElementById("agree").radio;
    let question = document.getElementById("Question").value

    if (name.value == " " && pass.value == " " && question.value == " ") {
        alert('введите данные')
    }
    else{
        alert(name + "\n" + pass + "\n" + question)
    }
}