    let value = localStorage.getItem("valor")
    let finalval = JSON.parse(value)
    let userinfos = localStorage.getItem("userinfo")
    let finaluserinfos = JSON.parse(userinfos)
    //console.log(finalval.valor)

    function justNumbers(text) {
        var numbers = text.replace(/[^0-9]/g,'');
        return parseInt(numbers);
    }
    //console.log(justNumbers(finalval.valor))
    
    let val = $('#val')
    //console.log(val)
    val[0].innerText = val[0].innerText + justNumbers(finalval.valor)
    
    let dead = $('#deadline')
    dead[0].innerText = "  " + dead[0].innerText+  "  " + Math.floor(Math.random()*8 + 3) + "  " + "Days"

    let name = $('#name')
    name[0].innerText = name[0].innerText + "  " + finaluserinfos.name
  
    let street = $('#street')
    street[0].innerText = street[0].innerText + "  " +  finaluserinfos.street
    
    let city = $('#city')
    city[0].innerText = city[0].innerText + "  " + finaluserinfos.city

    let state = $('#state')
    state[0].innerText = state[0].innerText + "  " + finaluserinfos.state

    let zipcode = $('#zipcode')
    zipcode[0].innerText = zipcode[0].innerText + "  " + finaluserinfos.zipcode
    
    let codeorder = $('#codeorder')
    codeorder[0].innerText = codeorder[0].innerText + "  " + Math.floor(Math.random()*10000000 )
   