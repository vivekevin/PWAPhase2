function submitData(){
  var career=document.querySelector("#career").value;
  var name=document.querySelector("#name").value;
  var mobile=document.querySelector("#mobile").value;
  var email=document.querySelector("#email").value;
  var address=document.querySelector("#address").value;
  // var education=document.querySelector("#education").value;
  var college=document.querySelector("#college").value;
  var degree=document.querySelector("#degree").value;
  var branch=document.querySelector("#branch").value;
  var percentage=document.querySelector("#percentage").value;
  // var intermediate=document.querySelector("#intermediate").value;
  var college1=document.querySelector("#college1").value;
  var degree1=document.querySelector("#degree1").value;
  var branch1=document.querySelector("#branch1").value;
  var percentage1=document.querySelector("#percentage1").value;
  // var technical=document.querySelector("#technical").value;
  var school=document.querySelector("#school").value;
  var degree2=document.querySelector("#degree2").value;
  var board=document.querySelector("#board").value;
  var percentage2=document.querySelector("#percentage2").value;
  var skills=document.querySelector("#skills").value;
  // Indexed DB implementation
  var idb=window.indexedDB || window.mozIndexedDB || window.msIndexedDB || window.webkitIndexedDB ;
if(!idb in window)
{
  console.log("indexedDB is not supported");
}
// IndexedDB creation
var open=idb.open("storeData",1);
console.log("IndexedDB is created");
open.onupgradeneeded=function(e){
  var request=e.target.result;
  store=request.createObjectStore("formdata",{keyPath:"id",autoIncrement:true});
console.log("store is created");
}
open.onerror=function(error){
  console.log("Error is occured");
}
open.onsuccess=function(e){
  request=e.target.result;
  var transaction=request.transaction("formdata","readwrite");
  store=transaction.objectStore("formdata");
  store.put({
    career:career,
    name:name,
    mobile:mobile,
    email:email,
    address:address,
    education:[
    {
      ins:college,
      degree:degree,
      branch:branch,
      percentage:percentage
    },
    {
      ins:college1,
      degree:degree1,
      branch:branch1,
      percentage:percentage1
    },
    {
      ins:school,
      degree:degree2,
      branch:board,
      percentage:percentage2
    }
  ],
  skills:skills

  });
}
window.open("index.html");
}
