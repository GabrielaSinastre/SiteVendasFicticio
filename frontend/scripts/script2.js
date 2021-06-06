
// para criar elementos no carrinho
    let principal = document.getElementById('coluna')
    console.log(principal)
    let li = document.createElement('li');
    let img = document.createElement('img');
    let div = document.createElement('div');
    let h3 = document.createElement('h3');

    div.className = 'infomations'
    
    img.src = "/frontend/images/cadeiragamer.jpg"
    div.innerText = "Notebook"
    h3.innerText = "Price: $" + 1212

    principal.appendChild(li)
    li.appendChild(img)
    li.appendChild(div)
    li.appendChild(h3)
//  end para criar elementos no carrinho
    let v = $('#address-infos h4')
    v[0].innerText = v[0].innerText + 14214 // valor que vai somando
    console.log(v)
    //let sumprice = document.getElementsByTagName('section #address-infos h4')
    //console.log(sumprice)
    //sumprice.innerText = 1000
    

   
    