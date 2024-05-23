var urlnameinput=document.getElementById("UrlName");
var url=document.getElementById("url");
var urlcontainer=[];


if(localStorage.getItem('products')!==null){urlcontainer=
  JSON.parse(localStorage.getItem('products'))
  displayweb();
}
function addUrl(){
    console.log("add")
    var urls={
        name1:urlnameinput.value,
        url1:url.value
    }
    urlcontainer.push(urls);
    localStorage.setItem('products',JSON.stringify(urlcontainer));
console.log(urls);
clearform();
displayweb();

}
function displayweb(){
    var put="";
    for(var i=0;i<urlcontainer.length;i++){

put+=`
<div class="row container d-flex justify-content-center align-items-center text-center ">

<div class=" d-flex justify-content-center align-items-center text-center">

 
  <tbody>

<tr><th>${i+1}</th><th>${urlcontainer[i].name1}</th>
<th class="text-center d-flex align-items-center  justify-content-center"><button onclick="visitUrl(${i})" class="borde py-2 px-3 bg-b1 text-white text-center"> <i class="fa-solid fa-eye text-white px-1"></i>  Visit</button></th>
<th class="text-center"><button onclick="deleteProduct(${i})" class="borde2 py-2 px-3 bg-b1 text-white text-center "> <i class="fa-solid fa-trash-can text-white px-1"></i>  Delete</button></th>

  </tbody>

    </div>
    </div>
    `;

    }
    document.getElementById('rowdata').innerHTML=put;
}
function clearform(){
  urlnameinput.value=null;

url.value=null;
}
function deleteProduct(deleteIndex){
  urlcontainer.splice(deleteIndex,1)
  displayweb();
  localStorage.setItem('products',JSON.stringify(urlcontainer));
  console.log(urlcontainer);

}
function visitUrl(index) {
  var url = urlcontainer[index].url1;
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'http://' + url;
  }
  window.open(url, '_blank');
  console.log(url)
}

