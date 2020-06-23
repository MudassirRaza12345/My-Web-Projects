// // //----CH#21 TO 25

// // //TASK:01
// // // var firstname=prompt("Enter your first name")
// // // var lastname=prompt("Enter your last name")
// // // var fullname=firstname+lastname
// // // alert(fullname)

// // //TASK:02
// // // var user=prompt("Enter your favourite phone","Enter your favourite phone")
// // // var phone=["Samsung Glaxy s6","Samsung Glaxy j6","iphone"]
// // // for(i=0;i<phone.length;i++){
// // //     if(phone[i] === user){
// // //         document.write("------------------------------------"+"<br>")
// // //         document.write("My favourite phone is: "+phone[i]+"<br>"+"Length of string:"+user.length)
// // //         document.write("<br>"+"------------------------------------")
// // //         break
// // //     }

// // // }
// // // if(phone[i] !== user){
// // //     alert("not found your favourite phone")
// // // }

// // //Task:03
// // // var string="Pakistani"
// // // document.write("------------------------------------"+"<br>")
// // // document.write("String:"+string+"<br>"+"Index of 'n': "+string.indexOf("n"))
// // // document.write("<br>"+"------------------------------------")

// // //Task:04
// // // var string="Hello World"
// // // document.write("------------------------------------"+"<br>")
// // // document.write("String:"+string+"<br>"+"Index of 'l': "+string.lastIndexOf("l"))
// // // document.write("<br>"+"------------------------------------")

// // //Task:05
// // // var string="Pakistani"
// // // document.write("------------------------------------"+"<br>")
// // // document.write("String:"+string+"<br>"+"Index of 3: "+string.charAt(3))
// // // document.write("<br>"+"------------------------------------")

// // //Task:06
// // //  TASK:01
// // // var firstname=prompt("Enter your first name")
// // // var lastname=prompt("Enter your last name")
// // // var fullname=firstname.concat(lastname)
// // // alert(fullname)

// // //Task:07
// // // var string="Hyderabad"
// // // document.write("------------------------------------"+"<br>")
// // // document.write("City:"+string+"<br>"+"After replacement:"+string.replace("Hyderabad","Islamabad"))
// // // document.write("<br>"+"------------------------------------")

// // //Task:08
// // // var string="Ali and Sami are best friends.They play cricket and football together"
// // // document.write("------------------------------------"+"<br>")
// // // document.write("Before replacement:"+"<br>"+string+"<br>"+"<br>"+"After replacement:"+"<br>"+string.replace(/and/g,"&"))
// // // document.write("<br>"+"------------------------------------")



// // // //Task:09
// // // var string="472"
// // // document.write("------------------------------------"+"<br>")
// // // document.write("Value:"+string+"<br>"+"Type:"+"string")
// // // document.write("<br>"+"Value:"+parseInt(string)+"<br>"+"Type:"+"number")
// // // document.write("<br>"+"------------------------------------")

// // //Task:10
// // // var user=prompt("Enter the string")
// // // document.write("------------------------------------"+"<br>")
// // // document.write("User input:"+user+"<br>"+"Upper case:"+user.toUpperCase())
// // // document.write("<br>"+"------------------------------------")

// // //Task:11
// // // var user=prompt("Enter the string")
// // // var firstword=user.slice(0,1)
// // // firstword=firstword.toUpperCase()
// // // var remainword=user.slice(1)
// // // remainword=remainword.toLowerCase()
// // // var Fullword=firstword+remainword
// // // document.write("------------------------------------"+"<br>")
// // // document.write("User input:"+user+"<br>"+"Title case:"+Fullword)
// // // document.write("<br>"+"------------------------------------")

// // //Task:12
// // // var num=35.36
// // // document.write("------------------------------------"+"<br>")
// // // document.write("Number:"+num+"<br>"+"Result:"+num.toString())
// // // document.write("<br>"+"------------------------------------")
// // //var a=prompt("Enter the character to check")
// // // var index=0;
// // // var i=a.charCodeAt(index)
// // // if(i>=65 && i<=90){
// // //     document.write("The letter you enter is upper case")
// // // }
// // // else if(i>=97 && i<=122){
// // //     document.write("The letter you enter is lower case")
// // // }
// // // else if(i>=48 && i<=57){
// // //     document.write("The letter you enter is digit")
// // // }

// // //Task:13
// // // var user=prompt("Enter the user name ")
// // // for(var i=0;i<=user.length;i++){
// // //     if(user.charCodeAt(i)=== 33 ||user.charCodeAt(i)=== 44 ||user.charCodeAt(i)=== 46 || user.charCodeAt(i)=== 64 ){
// // //         alert("Please enter a valid username")
// // // }
// // // }
// // //Task:14
// // // var A=["cake","applepie","cookie","chips","patties"]
// // // var user =prompt("Welcome to ALi Bakery.What do you want to order sir/ma'am?")
// // // var b=user.toLowerCase();
// // // for(i=0;i<user.length;i++){
// // //     if(A[i]===b){
// // //         document.write("---------------------------------------------------------"+"<br>")
// // //         document.write(user+" is available at index "+i+" in our bakery")
// // //         document.write("<br>"+"---------------------------------------------------------")
// // //     }
// // // }
// // // if(A[i] !==b){
// // //     document.write("---------------------------------------------------------"+"<br>")
// // //     document.write("We are sorry "+user+" is not available  in our bakery")
// // //     document.write("<br>"+"---------------------------------------------------------")
// // // }

// // //TASK:15
//   var pass=prompt("Enter your password : ");
// var firstChar=pass.charCodeAt(0);
// var len=pass.length;
// if(firstChar >=48 && firstChar <=57  )
// {
//     alert("Enter a valid password");
// }
// else if(len>6)
// {
//     alert("Enter a valid password");
// }
// else
// {
//     document.write("your password is : "+pass);
// }









 

// // //Task:16
// var university="University of Karachi"
// var b=university.split('')
// for(i=0;i<b.length;i++){
//     document.write(b[i]+"<br>")
// }
// // //Task:17
// // // var user=prompt("")
// // // document.write(user.lastIndexOf(prompt("enter the value for last index")))

// // //Task:18
// // // var a="The quick brown fox jumps over the lazy dog"
// // // document.write("Text:"+a+"<br>"+"There are "+a.match(/the/g).length+" occurance(s) of word 'the'")


// // //--Ch:26 to 30
// // //Task:1
// // // var number=+(prompt("Enter the positive integer"))
// // // var round=Math.round(number)
// // // var floor=Math.floor(number)
// // // var ceil=Math.ceil(number)
// // // document.write("---------------------------------------------------------"+"<br>")
// // // document.write("number:"+number+"<br>"+"round off value:"+round+"<br>"+"floorvalue:"+floor+"<br>"+"ceilvalue:"+ceil )
// // // document.write("<br>"+"---------------------------------------------------------")

// // //Task:2
// // // var number=+(prompt("Enter the negative integer"))
// // // var round=Math.round(number)
// // // var floor=Math.floor(number)
// // // var ceil=Math.ceil(number)
// // // document.write("---------------------------------------------------------"+"<br>")
// // // document.write("number:"+number+"<br>"+"round off value:"+round+"<br>"+"floorvalue:"+floor+"<br>"+"ceilvalue:"+ceil )
// // // document.write("<br>"+"---------------------------------------------------------")

// // //TAsk:3
// // // var a=+prompt("enter number")
// // // var b=Math.abs(a)
// // // document.write("---------------------------------------------------------"+"<br>")
// // // document.write("The absolute value of :"+a+" is "+ b )
// // // document.write("<br>"+"---------------------------------------------------------")

// // //Task:4
// // // var diceRoll=Math.floor(Math.random()*6)+1;
// // // document.write("random dice value: "+diceRoll)

// // //Task:5

// // // var toss=Math.random() * 2
// // // //0X2=0  or 1*2=2
// // // var floor=Math.floor(toss)
// // // //agr meri value .99 ai ge to ya 0 krda ga
// // // //agr meri value 1.5 ai ge to ya 1 krda ga
// // // document.write(floor+"<br>")
// // // if(floor === 0){
// // //     alert("Heads  wins")
// // // }
// // // else{
// // //     alert("Tails  wins")
// // // }

// // //Task6
// // // var toss=Math.random(2,11)  *100 
// // // var floor=Math.floor(toss)
// // // document.write(floor)



// // //Task:7
// // // var a=parseFloat(prompt("Enter your weight"))
// // // document.write("The weight of user is "+a+" Kilograms")

// // //Task:8
// // // var guess=+prompt("Enter your guess")
// // // var toss=Math.random(2,11)  *10 +1
// // // var floor=Math.floor(toss)

// // // document.write(floor+"<br>")
// // // if(floor === guess){
// // //     alert("Congratulation you  wins")
// // // }
// // // else{
// // //     alert("you  loss")
// // // }


// // //ch:31 to 35
// // //Task:1
// // // var a=new Date()
// // // document.write(a)

// // //Task:2
// // // var month=["jan","feb","mar","april","may","june","july","aug","sep","oct","nov","dec"]
// // // var a=new Date()
// // // var b=a.getMonth()
// // // var currentmonth=month[b]
// // // document.write(currentmonth)

// // //Task:3
// // // var a=new Date()
// // // var b=a.getDay()
// // if(b==6){
// //     alert("Today is Sat")
// // }
// // else if(b==0){
// //     alert("Today is Sun")
// // }

// //OR
// // var day=["Sun","Mon","Tue","wed","Thur","Fri","Sat"]
// // var a=new Date()
// // b=a.getDay()
// // for(i=0;i<day.length;i++){
// //     if(b==0){
// //         document.write("Today is "+day[b])
// //         break
// //         }
// //         else if(b==1){
// //             document.write("Today is "+day[b])
// //             break
// //             }
// // }
// // document.write("Today is "+b)

// // //Task:4
// // // var a=new Date()
// // // var b=a.getDay()
// // // if(b==6||b==0){
// // //     alert("It's Fun day")
// // // }

// // //Task:5
// // // var a=new Date()
// // // var b=a.getDate()
// // // if(b<16){
// // //     alert("First fifteen days of the month")
// // // }
// // // else {
// // //     alert("Last days of month")
// // // }

// // //Task:6
// // // var a=new Date();
// // // b=a.getTime();
// // // var c=((a/1000)/60/60)
// // // document.write("Current Date"+a+"<br>") 
// // // document.write("Elapsed milliseconds since January 1,1970: "+b+"<br>")
// // // document.write("Elapsed minutes since January 1,1970: "+c+"<br>")

// // //Task:7

// // // var a=new Date()
// // // var b=a.getHours()
// // // if(b>=12){
// // //     document.write("Its AM")
// // // }
// // // else{
// // //     document.write("Its PM")
// // // }

// // //Task:8
// // var a=new Date("2021")
// //  document.write(a)

// // //Task:9
// // // //var cr=new Date()
// // // var cr1=cr.getTime()
// // // var diff=cr1-ar1
// // // var day1=diff/(1000*60*60*24) 
// // // var dayfinal=Math.floor(day1)
// // // alert(dayfinal+" days passed since 1st Ramzan ")

// // //Task:10
// // // var ar=new Date("January 1,2020")
// // // var ar1=ar.getTime()
// // // var cr=new Date()
// // // var cr1=cr.getTime()
// // // var diff=cr1-ar1
// // // var sec=diff/(1000*60)  
// // // var dayfinal=Math.floor(sec)
// // // document.write("On reference date "+cr+"<br>")
// // // document.write(dayfinal+" seconds has passed since begining of 2015")

// // //Task:11
// // var a=new Date()
// // b=a.setHours(a.getHours() -1)
// // document.write(a)
// //Task:12
// // var a=new Date()
// // b=a.setFullYear(a.getFullYear() -100)
// // document.write(a)

// // //Task:13
// // var user=+prompt("Enter your age")
// // var a=new Date();
// // var b=a.getFullYear();
// // var yearofborn=b-user 
// // document.write("Year of born :"+yearofborn+"<br>")


// //Task:14
// // var cmame="<b>MUHAMMAD MUDASSIR RAZA</b>"
// // var month="<b>June</b>"
// // var units="<b>410</b>"
// // var per="<b>16</b>"
// // var net="<b>6560</b>"
// // var late="<b>350</b>"
// // var gross="<b>6910</b>"
// // document.write("<b>K-Electric Bill</b>"+"<br>"+"<br>")
// // document.write("Customer Name: "+cmame+"<br>")
// // document.write("Month: "+month+"<br>")
// // document.write("Number of units: "+units+"<br>"+"<br>")
// // document.write("Charges per units: "+per+"<br>")
// // document.write("Net Amount Payable(within DueDate): "+net+"<br>")
// // document.write("Late payment surcharge: "+late+"<br>")
// // document.write("Gross Amount payable(after DueDate ): "+gross+"<br>")

// // //Ch:35 to 38

// // //Task:1
// // // var a =new Date
// // // document.write(a)

// // //Task:2
// // // var firstname=prompt("Enter your first name")
// // // var lasttname=prompt("Enter your last name")
// // // function name(firstname,lastname){
// // //     alert("Welcome "+firstname+" "+lastname)
// // // }
// // // name(firstname,lasttname)

// // // //Task:3
// // // var firstnum=+prompt("Enter  first number")
// // // var lastnum=+prompt("Enter  last number")
// // // function name(firstnum,lastnum){
// // //        var z= firstnum+lastnum
// // //        return z
// // // }
// // // var g=  name(firstnum,lastnum)
// // // document.write("The of two numbers is "+g)

// // //Task:4
// // // var firstnum=+prompt("Enter  first number")
// // // var lastnum=+prompt("Enter  last number")
// // // var operator=prompt("Enter your operator")
// // // function name(firstnum,lastnum,operator){
// // //     if(operator=="+"){
// // //         var z= firstnum+lastnum
// // //         return z
// // //     }else if(operator=="*"){
// // //         var z= firstnum*lastnum
// // //         return z
// // //     }else if(operator=="-"){
// // //         var z= firstnum-lastnum
// // //         return z
// // //     }else if(operator=="/"){
// // //         var z= firstnum/lastnum
// // //         return z
// // //     }else if(operator=="%"){
// // //         var z= firstnum%lastnum
// // //         return z
// // //     }else{
// // //         alert("please write the operator ")
// // //     }
// // // }
// // // var g=  name(firstnum,lastnum,operator)
// // // document.write("The result two numbers is "+g)

// // //Task:5
// // // function square(num){
// // //     document.write("The square of "+num+" is"+num**2)
// // // }
// // // square(2)


// // //Task:6
// // // function factorial(n){
// // //     if(n==0 ||n==1){
// // //         return 1
// // //     }else{
// // //         return n*factorial(n-1)
// // //     }
// // // }
// // // var a=+prompt("Enter the number")
// // // answer =factorial(a)
// // // document.write("The factorial "+a+" is "+answer)

// // //Task:7
// // // var start=+prompt("Enter the start number for counting")
// // // var end=+prompt("Enter the end number for counting")
// // // function counting(start,end){
// // //     for(i=start;i<=end;i++){
// // //         document.write(i+"<br>")
// // //     }
// // // }
// // // counting(start,end)

// // //Task:8
// // // function hypo(a,b){
// // //     return Math.sqrt(Math.pow(a,2)+Math.pow(b,2))
// // // }
// // // var result =hypo(2,4)
// // // document.write("The hypotenuse is "+result)

// // //OR
// // // function hypo(a,b){
// // //     return Math.sqrt((a**2)+(b**2))
// // // }
// // // var result =hypo(2,4)
// // // document.write("The hypotenuse is "+result)

// // //Task:9
// // // function Area(l,b){
// // //     return l*b 
// // // }
// // // var result =Area(2,4)
// // // document.write("The Area is "+result)

// // //Task:10
// // // var word=prompt("Enter you word to check")
// // // function palindrme(a){
// // //     var check="";
// // //     for(var i=a.length-1;i>=0;i--){
// // //         check+=a[i]
// // //     }if(check==a){
// // //         alert(a +" is palindrome")
// // //     }else{
// // //         alert(a +" is not palindrome word" )
// // //     }
// // // }
// // // palindrme(word)

// // //Task:11
// //  function titleCase(str) {
// //     var splitStr = str.toLowerCase().split(' ');
// //     for (var i = 0; i < splitStr.length; i++) {
// //         // You do not need to check if i is larger than splitStr length, as your for does that for you
// //         // Assign it back to the array
// //         splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
// //     }
// //     // Directly return the joined string
// //     return splitStr.join(' '); 
// //  }
 
// //  document.write(titleCase("the quick bown fox"));

//  //Task:12
// //  function find_longest_word(str)
// //  {
// //    var array1 = str.match(/\w[a-z]{0,}/gi);
// //    var result = array1[0];
 
// //    for(var x = 1 ; x < array1.length ; x++)
// //    {
// //      if(result.length < array1[x].length)
// //      {
// //      result = array1[x];
// //      } 
// //    }
// //    return result;
// //  }
// //  document.write(find_longest_word('Web Development Tutorial'));

// //Task:13
// // function char_count(str, letter) 
// // {
// //  var letter_Count = 0;
// //  for (var position = 0; position < str.length; position++) 
// //  {
// //     if (str.charAt(position) == letter) 
// //       {
// //       letter_Count += 1;
// //       }
// //   }
// //   return letter_Count;
// // }

// // document.write(char_count('w3resource.com', 'o'));


// //Task:14
// function circum(r){
//     var cir=2*3.142*r
//     document.write("Circumference of circle ="+cir+"<br>")

// // }
// // function Area(r){
// //     var cir=3.142*(r**2)
// //     document.write("Area of circle ="+cir)

// // }
// circum(2)
// Area(2)