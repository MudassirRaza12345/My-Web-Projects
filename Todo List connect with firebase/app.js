var list =document.getElementById("list")
//console.log(firebase)
firebase.database().ref('todos').on('child_added',function(data){
//agr koi new data add ho ga to wo is fuction ka paremeter ma ajaa ga
// console.log(data.val())

//create li
    var li=document.createElement('li')
//ab ma input sa nhi balqa firebase sa data get kro ga  
    var litext=document.createTextNode(data.val().value)
    // litext.style.marginLeft="30px"
    li.appendChild(litext)
    li.style.border="1px solid #0000ff"
    // li.firstChild.nodeValue.style.Color="#000000"
    li.style.borderColor=" 10px #f5f5f5"
    // li.style.backgroundColor='#f5f5f5'
    li.style.marginLeft="50px"
    li.style.paddingLeft="20px"
    li.style.marginBottom="20px"

    


    list.appendChild(li)

   // create edit
        
    var editbtn=document.createElement("button")
    var editicon=document.createElement('i')
    editicon.setAttribute("class","fa fa-edit")
   editbtn.appendChild(editicon)
    var edittex=document.createTextNode("Edit")
    editbtn.setAttribute("class","text-primary")
    editbtn.style.margin="5px"
    editbtn.style.marginLeft="80px"
    editbtn.setAttribute('id',data.val().key)
    //mna edit button pr aik attribute set kya ha 
    //jb bhi edit press hoga to isko is li id(key) mil
    //jaa gi jo firebase pr jis sa save ha ya li 

    
   
    editbtn.appendChild(edittex)
    li.appendChild(editbtn)
    editbtn.setAttribute("onclick","editItem(this)")

    //createdelbtn
    var delbtn=document.createElement("button") 
    delbtn.setAttribute("class","text-danger")
    var delticon=document.createElement('i')
    delticon.setAttribute("class","fa fa-trash")
    delbtn.appendChild(delticon)
    //aik sa ziada attribute set krsakta ha
    
    delbtn.setAttribute("onclick","deleteItem(this)")
      
    delbtn.setAttribute('id',data.val().key)
    //mna delete button pr aik attribute set kya ha 
    //jb bhi delete press hoga to isko is li id(key) mil
    //jaa gi jo firebase pr jis sa save ha ya li 
    delbtn.style.marginLeft="80px"
    //this ka through ma pora button get kroga
    //yani pora uthakr deda ga
    //yani yhi wala button pora this ka through get krsakta ha
    var delText=document.createTextNode("Delte")
    delbtn.appendChild(delText)
    li.appendChild(delbtn)
    list.appendChild(li)
    
    
    



})

// we using real time database.on represent realtime database

//create li tag with text node
function addTodo(){
  
   var todoitem=document.getElementById("todo-item")
//    console.log(todoitem.value)
//    ab ma apna datafirebase pr bhj dena chata hon
//todo item ki value ko

var database=firebase.database().ref('todos') 
var key=database.push().key
// isa firebase apko random key bna kr deda ga or jo key bna kr da ga wo unique hogi

var todo={
    value :todoitem.value,
    key:key
}
//object ka ander aik or object bnana ka lia
database.child(key).set(todo)
//sent key to firebase 






    
     todoitem.value=""
     //for making empty input field
    
}
function deleteItem(e){
    //e means pora delte button
    //mna parentNode joka li thi isko get kya 
    //.remove() (del krda ga is li ko)
firebase.database().ref('todos').child(e.id).remove()
//console.log(e.id)
    e.parentNode.remove()
    
    //this ka through ma pora button get kroga
    //yani pora uthakr deda ga

    
}
function deleteAll(){
    //list means ul -->humna ul ki value empty krdi
    list.innerHTML=""
    firebase.database().ref('todos').remove()
}
function editItem(e){
        var editvalue=prompt("Enter edit value",e.parentNode.firstChild.nodeValue)
    var editTodo={
        value:editvalue,
        key:e.id

    }
    // console.log(editTodo)
    firebase.database().ref('todos').child(e.id).set(editTodo)

     e.parentNode.firstChild.nodeValue=editvalue

    }