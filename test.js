document.getElementsByClassName("block_quiz_button")[0].addEventListener("click", function(event){
    let str;
    let quest;
    let rez = 0;
    for (let i=1;i<=10;i++){
        str = "q";
        str+=i;
        
        quest = document.getElementsByName(str);
        answer = document.getElementsByClassName(str);
        for (let j=0;j<quest.length-1;j++){
            if (quest[j].type == "radio" && quest[j].checked){
                if (quest[j].value == "true"){
                    rez+=1;
                    answer[j].innerHTML = "&#9989"
                } else if (quest[j].value == "false") {
                    answer[j].innerHTML = "	&#10060"
                }
            }
        }
        console.log(str);
    }
    document.getElementById("quiz_answer").innerHTML = "Результат: "+ rez + "/ 10";
});

function refresh(){
    let str;
    let quest;
    let rez = 0;
    for (let i=1;i<=10;i++){
        str = "q";
        str+=i;
        
        quest = document.getElementsByName(str);
        answer = document.getElementsByClassName(str);
        for (let j=0;j<quest.length-1;j++){
            document.getElementsByClassName(str)[j].innerHTML = "";
        }
        
    }
    document.getElementById("quiz_answer").innerHTML = "";
}

