    let value = localStorage.getItem("valor")
    let finalval = JSON.parse(value)
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

