
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
   
    