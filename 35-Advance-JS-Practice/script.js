


let waterLao=(address,cb)=>{
    cb({
        name:'sujoy',
        age:21,
        address:{
            vill:'karuigachhi',
            po:'karuigachhi',
            ps:'Tehatta',
            dist:'Nadia',
            state:'west bengal'
        },
        school:'Bhowanipur High School (H.S.)'
    })
}


waterLao('address',(details)=>{
    console.log(details.address.ps);
})