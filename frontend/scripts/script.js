//script na index1

// the products
var products = [
    {name: "Gamer Keyboard", category: "Keyboard", price: 269, img: "/frontend/images/tecrgb.jpg"},
    {name: "Gamer Mouse", category: "Mouse", price: 187, img: "/frontend/images/mousergb.png"},
    {name: "Gamer Headset", category: "Headset", price: 95, img: "/frontend/images/headset.jpg"},
    {name: "Gamer Chair", category: "Chair", price: 849, img: "/frontend/images/cadeiragamer.jpg"},
    {name: "Gamer Cabinet", category: "Cabinet", price: 300, img: "/frontend/images/cpugamer.jpg"},
];

//create products from the variable products inside the ID container
let i = 0
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
}

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
        img.src = "/frontend/images/image-not-found.png"
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

$('.ua button').click(function() {
    var t = $(this).siblings(); // Vai pegar todos os irmãos.
    module.export = t
    console.log(t)
    });