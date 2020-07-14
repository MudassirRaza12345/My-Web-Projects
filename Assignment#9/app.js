// //--------------ch:38 to 42
// // TASK#1
// var a=+prompt("Enter the number for power")
// var b=+prompt("Enter the power of number")
// var c= Math.pow(a,b)
// document.write("The number for power is: "+a+"<br>")
// document.write("The power of number is: "+b+"<br>")
// document.write("Result: "+c)

//OR
// var a=+prompt("Enter the number for power")
// var b=+prompt("Enter the power of number")
// var c= a**b
// document.write("The number for power is: "+a+"<br>")
// document.write("The power of number is: "+b+"<br>")
// document.write("Result: "+c)

// // TASK#2
// //  var a=+prompt("Enter the year")
// // function year(a){
// //     if(a%4 ==0 ){
        
// //         alert("Leap Year")

// //     }else{
// //         alert("not a leap year")
// //     }

// // }
// // year(a)

 


// // TASK#3
// // var a=+prompt("Enter the length 1")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
// // var b=+prompt("Enter the length 2")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
// // var c=+prompt("Enter the length 3")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
// // function totalsides(a,b,c){
// //     var s=a+b+c/2
// //     document.write("-----<b>Area of Triangle</b>---------"+"<br>")
// //     document.write("<b>Length 1:</b>"+" "+a+"<br>")
// //     document.write("<b>Length 2: </b>"+b+"<br>")
// //     document.write("<b>Length 3: </b>"+c+"<br>")
// //     document.write("<b> S: </b>"+s+"<br>")
    
    
// //     return s;
// // }
// // var Si=totalsides(a,b,c)

// // function area(s,a,b,c){
// //    var area=s*(s-a)*(s-b)*(s-c)
// //    document.write("<b> Area of Triangle is:</b> "+area+"<br>")
// //    document.write("<b>-------------------------------------</b>") 
// // }
// // area(Si,a,b,c)





// // TASK#4
// // var s1=+prompt("Enter the First subject Marks ")
// // var s2=+prompt("Enter the second subject Marks ")
// // var s3=+prompt("Enter the third subject Marks ")


// // function averagemark(s1,s2,s3){
// //     return  s1+s2+s3
// //    }
// // var totalmarks= averagemark(s1,s2,s3)

// // function percentage(per){
// //     return (per*100)/300;
    
// //  } 
// //  var pie=percentage(totalmarks)
 
// //  function main(a,b){    
// //     document.write("-----<b>Average Marks And Percentage</b>---------"+"<br>")
// //     document.write("<b>First subject Marks:</b> "+s1+"<br>")
// //     document.write("<b>Second subject Marks: </b>"+s2+"<br>")
// //     document.write("<b>Third subject Marks </b>"+s3+"<br>")
// //     document.write("<b> average:</b> "+a+"<br>")
// //     document.write("<b>percentage:</b> "+b+"%"+"<br>")
// //     document.write("<b>-------------------------------------</b>")
// // }
// // main(totalmarks,pie)

// // TASK#5
// // var a=prompt("Enter the string")
// // var b=prompt("which word index you want to find")
// // function indexfinding(){
// //     document.write("-----<b>Finding index through index function</b> -----"+"<br/>")
// //     document.write("<b>string:</b> "+a+"<br>")
// //     document.write("<b>ANSWER:</b>"+a.indexOf(b)+"<br>")
// //     document.write("<b>-------------------------------------</b>")
// // }
// // indexfinding()

// // TASK#6
// // var A=prompt("Enter the sentence ")
// // function removevowels(){
// //     var a=A.replace(/[aeiou]/g,' ')
// //     document.write(A)
// //     document.write("<br>"+a)
// // }
// // removevowels()

 

// // TASK#7
 
     
     
//     // function findOccurrences() {
//     //   var str = "Pleases read this application and give me gratuity";
//     //   var count = 0;
//     //   let haveSeenVowel = false;
    
//     //   for (const letter of str.toLowerCase()) {
//     //     switch (letter) {
//     //       case 'a':
//     //       case 'e':
//     //       case 'i':
//     //       case 'o':
//     //       case 'u':
//     //         {
//     //           if (haveSeenVowel) {
//     //             count++;
//     //             haveSeenVowel = false;
//     //           } else {
//     //             haveSeenVowel = true;
//     //           }
//     //           break;
//     //         }
//     //       default:
//     //         haveSeenVowel = false
//     //     }
//     //   }
    
//     //   return count
//     // }
    
//     // console.log(findOccurrences());










// // TASK#8
// // var distance=+prompt("Enter the distance betwwen two cities")
// // document.write("<b>----------------------------------------------------------- </b> "+"<br>")
// // document.write("<b>Distance in Kilometer:</b> "+distance+"Km"+"<br>")
// // function meter(){
// //     //meter=km*1000
// //     var meter=distance *1000
// //     document.write("<b>Distance in meter:</b> "+meter+"m"+"<br>")
// // }
// // meter()

// // function feet(){
// //     //feet=km*3280.84
// //     var feet=distance *3280.84
// //     document.write("<b>Distance in feet:</b> "+feet+"ft"+"<br>")
// // }
// // feet()

// // function inches(){
// //     //inches=km*39370.1
// //     var inches=distance *39370.1
// //     document.write("<b>Distance in feet:</b> "+inches+"inches"+"<br>")
// // }
// // inches()

// // function centimeter(){
// //     //centimeter=km*100000
// //     var centimeter=distance *100000
// //     document.write("<b>Distance in feet:</b> "+centimeter+"cm"+"<br>")
// //     document.write("-----------------------------------------------------------")
// // }
// // centimeter()

// // TASK#9
// // var  time_worked, over_time, overtime_pay=0;
// // for(i=1;i<=10;i++){
// //     time_worked=prompt("enter the time employee worked in hr "+"<br>");
// //     if(time_worked>40){
// // over_time=time_worked-40;
// // overtime_pay=overtime_pay+(12*over_time);
// // }
// // document.write("<br>"+"Total Overtime Pay Of 10 Employees Is:"+overtime_pay);
// // }


// // TASK#10
// // var amount=parseInt(prompt("Please input the amount for with draw"))
// // document.write("You will have "+parseInt(amount/100)+" hundreds notes "+parseInt((amount%100)/50)+" fifty notes "+parseInt(((amount%100)%50)/10)+" ten notes")






// // TASK#1
// // TASK#1
// // TASK#1
// // TASK#1
// // TASK#1
// // TASK#1