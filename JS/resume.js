var para;
var paravalue;
var query=window.location.search.substring(1).split("?");
for(var i in query){
  para=query[i].substring(1).split("=");
  paravalue=parseInt(para[1]);
}
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
  var info=store.get(paravalue);
  info.onsuccess=function(data){
    console.log(data);
    personalinfo(data.target.result);
  }
}
var left=document.querySelector(".left");
var right=document.querySelector(".right");
function personalinfo(pi){
  var h1=document.createElement("h2");
  h1.textContent="Profile";
  left.append(h1);
    left.append(document.createElement("hr"));
  var image=document.createElement("img");
  image.src="images/player.svg"
  image.alt=pi.name
  left.append(image);
  left.append(document.createElement("br"));
  var name=document.createElement("name");
  name.textContent=pi.name;
  left.append(name);
  left.append(document.createElement("br"));
  var mobile=document.createElement("mobile");
  mobile.textContent=pi.mobile;
  left.append(mobile);
  left.append(document.createElement("br"));
  var email=document.createElement("email");
  email.textContent=pi.email;
  left.append(email);
  left.append(document.createElement("br"));
  var address=document.createElement("address");
  address.textContent=pi.address;
  left.append(address);
  left.append(document.createElement("br"));
  // var head12=document.createElement("h2");
  // head12.textContent="Career Objective";
  // right.append(head12);
  var h1=document.createElement("h2");
  h1.textContent="career";
  right.append(h1);
  right.append(document.createElement("hr"));
  var career=document.createElement("career");
  career.textContent=pi.career;
  right.append(career);

  right.append(document.createElement("hr"));
  var head11=document.createElement("h2");
  head11.textContent="Education Details";
  right.append(head11);
  right.append(document.createElement("hr"));
  var table=document.createElement("table");
  table.border="1";
  var tr1="<tr><th>institute</th><th>branch</th><th>year</th><th>per</th></tr>"
  var tr2="";
  for(var i in pi.education){
    // console.log(pi.education.institute);
    tr2=tr2+"<tr><td>"+pi.education[i].ins+"</td><td>"+pi.education[i].degree+"</td><td>"+pi.education[i].branch+"</td><td>"+pi.education[i].percentage+"</td></tr>"
  }
  table.innerHTML=tr1+tr2;
  right.append(table);
  var h1=document.createElement("h2");
  h1.textContent="skills";
  right.append(h1);
  right.append(document.createElement("hr"));
  var skills=document.createElement("skills")
  skills.textContent=pi.skills;
  right.append(skills);

  // right.append(document.createElement("br"));
}
