window.onload = function() {
    if (localStorage.length != 0){
        console.log(localStorage.length);
        age = localStorage.getItem("username");
        if (age == null || age == "") {
            document.getElementById("name").innerHTML = "Hello, guest!";
        } else document.getElementById("name").innerHTML = "Hello," + age;
        return;
    }
    var age = prompt("Enter your name");
    localStorage.setItem("username",age);
    if (age == null || age == "") {
        document.getElementById("name").innerHTML = "Hello, guest!";
    } else document.getElementById("name").innerHTML = "Hello," + age;

};

function changeUsername() {
    localStorage.removeItem("username");
    let name = prompt("Change your name");
    localStorage.setItem("username",name);
    if (name == null || name == "") {
        document.getElementById("name").innerHTML = "Hello, guest!";
    } else document.getElementById("name").innerHTML = "Hello," + name;
}

document.getElementById("tri_square").addEventListener("click", function(event) {
    
    var side = Number(document.getElementById("tri_side").value);
    var height =Number( document.getElementById("tri_height").value);
    if (typeof side != "number" || typeof height != "number"){
        document.getElementById("tri_answer").innerHTML = "Ответ: неверные данные" ;
        return;
    }
    var rez = (0.5 * side * height);
    document.getElementById("tri_answer").innerHTML = "Ответ: " + rez;
});

document.getElementById("str_button").addEventListener("click", function(event) {
    var str1 = document.getElementById("first_string").value;
    var str2 = document.getElementById("second_string").value;
    if (str1.length == str2.length) {
        document.getElementsByClassName("strings_answer")[0].innerHTML = "Ответ: true";
    } else document.getElementsByClassName("strings_answer")[0].innerHTML = "Ответ: false";
});

document.getElementById("arr_button").addEventListener("click", function(event) {
    var arr = document.getElementsByClassName("numbers");
    
    
    
    console.log(arr);
    var max = Number(arr[0].value);
    var min = Number(arr[0].value);
    for (var i = 1; i < arr.length; i++) {
        
        if (Number(arr[i].value) > max) {

            max = Number(arr[i].value);
            console.log(max);
        }
        if (Number(arr[i].value) < min) {
            min = Number(arr[i].value);

        }
    }
    document.getElementsByClassName("arr_answer")[0].innerHTML = "Ответ: max=" + max + " min= " + min;
});

