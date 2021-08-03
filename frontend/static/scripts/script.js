//script na index1
// the products

/*var products = [
    {name: "Gamer Keyboard", category: "Keyboard", price: 269, img: "/static/images/tecrgb.jpg"},
    {name: "Gamer Mouse", category: "Mouse", price: 187, img: "/static/images/mousergb.png"},
    {name: "Gamer Headset", category: "Headset", price: 95, img: "/static/images/headset.jpg"},
    {name: "Gamer Chair", category: "Chair", price: 849, img: "/static/images/cadeiragamer.jpg"},
    {name: "Gamer Cabinet", category: "Cabinet", price: 300, img: "/static/images/cpugamer.jpg"},
];*/

//create products from the variable products inside the ID container
/*let i = 0
while(i < products.length){
    
    let mom = document.getElementById('container');
    let div = document.createElement('div');
    let h2 = document.createElement('h2');
    let h4 = document.createElement('h4');
    let h1 = document.createElement('h1');
    let img = document.createElement('img');
    let but = document.createElement('button');

    div.className = 'ua'
    h2.innerText = products[i].name
    h4.innerText = products[i].category
    h1.innerText = `$ ` + products[i].price
    img.src = products[i].img
    but.innerText = "Add To Cart"

    mom.appendChild(div)
    div.appendChild(img)
    div.appendChild(h2)
    div.appendChild(h4)
    div.appendChild(h1)
    div.appendChild(but)
    i++
}*/

// adding product
function add(){
    if(document.getElementById('prodname').value != "" && document.getElementById('prodprice').value != "" && document.getElementById('prodcat').value != ""){

        let inp1 = document.getElementById('prodname').value;
        let inp2 = document.getElementById('prodprice').value;
        let inp3 = document.getElementById('prodcat').value;
        //creating a card inside the ID container
        let mom = document.getElementById('container');
        let div = document.createElement('div');
        let h2 = document.createElement('h2');
        let h4 = document.createElement('h4');
        let h1 = document.createElement('h1');
        let img = document.createElement('img');
        let but = document.createElement('button');

        div.className = 'ua'
        h2.innerText = inp1
        h4.innerText = inp3
        h1.innerText = `$ ` + inp2
        img.src = "/static/images/tecrgb.jpg"
        but.innerText = "Add To Cart"

        mom.appendChild(div)
        div.appendChild(img)
        div.appendChild(h2)
        div.appendChild(h4)
        div.appendChild(h1)
        div.appendChild(but)

        document.getElementById('prodname').value = '';
        document.getElementById('prodprice').value ='';
        document.getElementById('prodcat').value ='';
        // atualizar o filtro enquanto adiciona filter(document.getElementById('prodcat').value)
    }
    else alert("Error to add product, invalid fields")

}


//filter function
function filter(prod){
    //console.log(prod)
    $('.ua').each(function() {
        console.log($(this)[0].children[2].innerText.toLowerCase())
        if($(this)[0].children[2].innerText.toLowerCase() == prod){
            $(this).show()
        }
        else {
            $(this).hide()
        }
       });
}

let v = []

$('.ua button').click(function() {
    var [imagem] = $(this).siblings('img'); // Vai pegar todos os irmãos.
    var [h2] = $(this).siblings('h2'); 
    var [h1] = $(this).siblings('h1');


    var produto = {imagem:imagem.src, h2:h2.innerText, h1:h1.innerText}

    v.push(produto)

    localStorage.setItem("produto",JSON.stringify(v))
    //console.log(h2)
    });

    //login

$('#log').click(function(){
    let mom = document.getElementsByTagName('BODY')[0]
        
    let form = document.createElement('form')

    let inputname = document.createElement('input')
    let inputstreet = document.createElement('input')
    let inputcity = document.createElement('input')
    let inputstate = document.createElement('input')
    let inputzipcode = document.createElement('input')
    let inputimg = document.createElement('input')
    let butconfirm = document.createElement('button')

    let message = 'Please we need some information to register:'
    form.innerText= message
    form.id="formlog"
    form.method="POST"
    form.action="http://localhost:5000/home"
    form.enctype='multipart/form-data'
    butconfirm.id='form-submit'
    
    //ids e type dos input:
    inputname.type='text'
    inputstreet.type='text'
    inputcity.type='text'
    inputstate.type='text'
    inputzipcode.type='number'
    inputimg.type='file'
    inputname.name='name'
    inputstreet.name='street'
    inputcity.name='city'
    inputstate.name='state'
    inputzipcode.name='zip'
    inputimg.name='file'

    inputname.id='name'
    inputstreet.id='street'
    inputcity.id='city'
    inputstate.id='state'
    inputzipcode.type='zip'    

    inputname.placeholder="Type Your Full Name"
    inputstreet.placeholder="Type Your Street"
    inputcity.placeholder="Type Your City"
    inputstate.placeholder="Type Your State"
    inputzipcode.placeholder="Type Your Zip-Code"
    //inputimg.placeholder="Upload Your Image"
    
    butconfirm.innerText='Confirm'
    butconfirm.type='submit'
     
    mom.appendChild(form)

    form.appendChild(inputname)
    form.appendChild(inputstreet)
    form.appendChild(inputcity)
    form.appendChild(inputstate)
    form.appendChild(inputzipcode)
    form.appendChild(inputimg)
    form.appendChild(butconfirm)

});

//$('#confirmreg').click(function(){
//    $('#sumir').show()
//    $('.form').show()    
//})

