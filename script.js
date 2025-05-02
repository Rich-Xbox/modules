import {input1, input2, yigindi, ayirma, kupaytma, boluv, natija, qushish_f, ayirish_f, kopaytirish_f, bolish_f} from './hello.js'


yigindi.addEventListener("click", ()=>{
    natija.innerHTML = qushish_f(input1.value, input2.value)
})
ayirma.addEventListener("click", ()=>{
    natija.innerHTML = ayirish_f(input1.value, input2.value)
})
kupaytma.addEventListener("click", ()=>{
    natija.innerHTML = kopaytirish_f(input1.value, input2.value)
})
boluv.addEventListener("click", ()=>{
    natija.innerHTML = bolish_f(input1.value, input2.value)
})
