

document.getElementById("boton").addEventListener("click",function(){
    axios( "http://localhost:5000/amigos")
    .then(archivo=>{
        
        document.getElementById("lista").innerHTML=""
        archivo.data.map((e)=>{
            let li=document.createElement("li");
            li.textContent=e.name+" X"
            document.getElementById("lista").appendChild(li);
        })
        
        if(document.getElementById("lista").children.length<1){
            let p=document.createElement("p")
            p.innerText="No Hay amigos registrados"
            document.getElementById("lista").appendChild(p)
        }   
    })
})


document.getElementById("search").addEventListener("click",function(){
    axios( "http://localhost:5000/amigos")
    .then(archivo=>{
        let txt=document.getElementById("input").value
        var x=false
        archivo.data.map((e)=>{
            if(e.id==txt) {x=true; document.getElementById("amigo").textContent=e.name}
            if(x===false) document.getElementById("amigo").textContent="no es tu amigo"
        })
        document.getElementById("input").value=""
    })
})


 document.getElementById("delete").addEventListener("click",function(){

     axios.delete( "http://localhost:5000/amigos/"+document.getElementById("inputDelete").value)
     .then(()=>{document.getElementById("sucess").textContent="deleted friend n°"+document.getElementById("inputDelete").value; document.getElementById("inputDelete").value=""})
})