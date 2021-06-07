//user infos

let user = {
    name: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
}

let getuser = prompt("Put your name: ");
user.name = getuser;
getuser = prompt("Put the name of your street: ");
user.street = getuser;
getuser = prompt("Put the name of your city: ");
user.city = getuser;
getuser = prompt("Put the name of your state");
user.state = getuser;
getuser = prompt("Put your zipcode: ");
user.zipcode = getuser;

//let infos = 'Name: ' + user.name + ' Street: ' + user.street + ' City: ' + user.city + ' State: '+ user.state + ' Zipcode: ' + user.zipcode  
localStorage.setItem("userinfo",JSON.stringify(user))

let infos = document.getElementById('address-infos');
let h5name = document.createElement('h5');
let h5street = document.createElement('h5');
let h5city = document.createElement('h5');
let h5state = document.createElement('h5');
let h5zipcode = document.createElement('h5');
let ue = document.createElement('h4');

h5name.innerText = `Name: ` + user.name
infos.appendChild(h5name) 
h5street.innerText = `Street: ` + user.street
infos.appendChild(h5street) 
h5city.innerText = `City: ` + user.city
infos.appendChild(h5city) 
h5state.innerText = `State: ` + user.state
infos.appendChild(h5state) 
h5zipcode.innerText = `Zipcode: ` + user.zipcode 
infos.appendChild(h5zipcode) 
ue.innerText = `Order Value: $  `
infos.appendChild(ue)
console.log(infos)
// para criar elementos no carrinho
    
    
  /*  function filtarsrc(array){
        let j = 20
        let a
        while(j < array.length){
            a += array[j]
        }
        console.log(a)
        return a
    }*/

    //filtarsrc(final[0].imagem)
    //console.log(final.h2)
    //console.log(final.h1)
function sumcart(){
    let product = localStorage.getItem("produto")
    let final = JSON.parse(product)
    //console.log(final)
    let i = 0

    while(i < final.length && final != null){
    let principal = document.getElementById('coluna')
    let li = document.createElement('li');
    let img = document.createElement('img');
    let div = document.createElement('div');
    let h3 = document.createElement('h3');

    div.className = 'infomations'
    

    img.src = final[i].imagem
    div.innerText = final[i].h2
    //console.log(`${final[i].h2}`)
    h3.innerText = "Price: " + final[i].h1

    principal.appendChild(li)
    li.appendChild(img)
    li.appendChild(div)
    li.appendChild(h3)
    i++
    }
}
    sumcart()
//  end para criar elementos no carrinho.
function justNumbers(text) {
    var numbers = text.replace(/[^0-9]/g,'');
    return parseInt(numbers);
}
let sum = 0
$('#coluna li').each(function() {
    
    sum += justNumbers($(this)[0].children[2].innerText)
    //console.log(sum)
    
   });


    let v = $('#address-infos h4')
    v[0].innerText = v[0].innerText + sum // valor que vai somando
    //console.log(v)
    //let sumprice = document.getElementsByTagName('section #address-infos h4')
    //console.log(sumprice)
    //sumprice.innerText = 1000
    
    $('section button').click(function() {
        var [valor] = $(this).siblings('div').children('h4');
        console.log(valor)
        var produto = {valor:valor.innerText}    
        localStorage.setItem("valor",JSON.stringify(produto))
        //console.log(h2)
        });
   
    