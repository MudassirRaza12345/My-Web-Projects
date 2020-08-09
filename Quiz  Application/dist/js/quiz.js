// Start page
function submitForm(e){
    e.preventDefault()
    var name =document.forms["welcome_form"]["username"].value;

    location.href="quiz.html"
    //store player name
    sessionStorage.setItem("name",name)
console.log(name)
}


window.onload=function(){
    show(0)
}


// Quiz QUESTIONS
let questions=[
     
    
    {
        id:1,
        question:"Who is the founder of Pakistan ?",
        answer:"Quaid-e-Azam Muhammad Ali Jinnah",
        options:[
            "Quaid-e-Azam Muhammad Ali Jinnah",
            "Allama Iqbal",
            "Liaquat Ali Khan",
            "None of these"
        ]

    },
    {
        id:2,
        question:"When Pakistan came into being on ......",
        answer:"1947",
        options:[
            "1945",
            "1965",
            "1947",
            "None of these"
        ]

    },
    {
        id:3,
        question:"National flower of Pakistan is ......",
        answer:"jasmine",
        options:[
            "Rose",
            "Jasmine",
            "Sunflower",
            "None of these"
        ]

    },
    {
        id:4,
        question:"National animal of Pakistan is ......",
        answer:"Markhor",
        options:[
            "Markhor",
            "Lion",
            "Parrot",
            "None of these"
        ]

    },
    {
        id:5,
        question:"National Sports of Pakistan is ......",
        answer:"Hockey",
        options:[
            "Football",
            "Hockey",
            "Cricket",
            "None of these"
        ]

    },
    {
        id:6,
        question:" Pakistan day celeberated on .....",
        answer:"23 March",
        options:[
            "11 September",
            "25 December",
            "23 March",
            "None of these"
        ]

    },
    {
        id:7,
        question:"Biggest dam of Pakistan is .......",
        answer:"Tarbeela Dam",
        options:[
            "Tarbeela Dam",
            "Mangla Dam",
            "New Dam",
            "None of these"
        ]

    },
    {
        id:8,
        question:"Biggest mine of salt in Pakistan at .......",
        answer:"Khewra",
        options:[
            "Karachi",
            "Khewra",
            "sui",
            "None of these"
        ]

    },
    {
        id:9,
        question:"Biggest industry of Pakistan is .......",
        answer:"Textile",
        options:[
            "Architecture",
            "Furniture",
            "Textile",
            "None of these"
        ]

    },
    {
        id:10,
        question:"Pakistan become nuclear power in ...... year",
        answer:"1998",
        options:[
            "1998",
            "2005",
            "2009",
            "None of these"
        ]

    }
    

]


let question_count=0;
let point=0;
function next(){
      //get answer of user
    let user_answer=document.querySelector("li.option.active").innerHTML


    //Check answer of user
    if(user_answer == questions[question_count].answer){
        point++
        sessionStorage.setItem("point", point);
    }
    
    
if(question_count ==questions.length - 1){
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
location.href="end.html"

}
  

console.log(user_answer)


 
    question_count++
    console.log(question_count)
    show(question_count)
}

function show(count){
    let question=document.getElementById("questions")
    console.log(question)
    // question.innerHTML=questions[0]
    //another way to write

  //  question.innerHTML="<h2>"+questions[count].question+"</h2>" +"";
  //question.innerHTML=`<h2>Hello World </h2>`
  question.innerHTML=`
  <h2>Q${count + 1}. ${questions[count].question}</h2>
  <ul class="option_group">
  <li class="option">${questions[count].options[0]}</li>
  <li class="option">${questions[count].options[1]}</li>
  <li class="option">${questions[count].options[2]}</li>
  <li class="option">${questions[count].options[3]}</li>
  </ul>`;

  toogleactive();
}

function toogleactive(){
    let option =document.querySelectorAll("li.option");
    for(let i=0;i< option.length;i++){
        option[i].onclick=function(){
            for(let j=0;j<option.length;j++){
                if(option[j].classList.contains("active")){
                    option[j].classList.remove("active");
                }
            }
            option[i].classList.add("active")
        }

    }
}

//Timer
let dt =new Date(new Date().setTime(0))
let ctime =dt.getTime()
let seconds=Math.floor((ctime %(100 * 60))/1000)
let minutes=Math.floor((ctime %(1000 * 60 * 60))/(1000*60))
let time=0;
let mytime=setInterval(function(){
    time++
    if(seconds <59){
        seconds++
    }
    else{
        seconds=0
        minutes++
    }
    
    
// console.log(timer)
// here 10 means two digits
let formatted_sec = seconds < 10 ? `0${seconds}`: `${seconds}`;
// console.log(formatted_sec)
let formatted_min = minutes < 10 ? `0${minutes}`: `${minutes}`;
document.querySelector("span.time").innerHTML=`${formatted_min} : ${formatted_sec}`;
},1000);



// uesr info
let user_name = sessionStorage.getItem("name");
let user_points = sessionStorage.getItem("point");
let user_time = sessionStorage.getItem("time");
document.querySelector("span.name").innerHTML = user_name;
document.querySelector("span.points").innerHTML = user_points;
document.querySelector("span.time_taken").innerHTML = user_time;

