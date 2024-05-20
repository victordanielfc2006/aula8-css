let email = [
    "email1@gmail.com", //0
    "email2@gmail.com", //1
    "email3@gmail.com", //2
    "email4@gmail.com", //3
]

// for (let cont = 0; cont < email.length; i++) {
//     console.log(`Email enviado para:${email}[const]}`);
// }

// Valor do Array
// Index do Array
// Array completo
email.forEach((email)=>{
    console.log(`Email enviado para:${email}`);
})
console.log(`--- --- --- --- --- ---`);
email.forEach((valor, index, array) => {
    console.log(`Email enviado para ${valor}`);
    console.log(`Você é o número ${elemento} da lista.`);
    console.log(`Elementos da lista: ${array} da lista.`);
    console.log(`--- --- --- --- --- ---`);

})