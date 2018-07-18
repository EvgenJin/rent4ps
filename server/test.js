var a = [{productId: 'a589',name: 'Resident Evil 7 (PS4/RU) (Аренда 7 дней)',price: '155.00',currency: '4',inStock: '1' },
        { productId: 'a295',name: 'Tom Clancy’s Ghost Recon Wildlands  (PS4/RU) (Аренда 7 дней)',price: '155.00',currency: '4',inStock: '1' },
        { productId: 'a724',name: 'UFC 3 (PS4/RU) (Аренда 7 дней)',price: '299.00',currency: '4',inStock: '1' } ]

var b = [ { id: 'fff916a4-7bd8-4f11-9bbf-5072747585f8',name: 'Tom Clancy',productId: 'a724' },
          { id: '85594e7a-0afe-4948-90ee-8c0c5e4263e0',name: 'NHL!',productId: 'a295' },
          { id: '85594e7a-0afe-4948-90ee-8c0c5e4263e0',name: 'Resident Evil 7',productId: 'a589' }  
        ] 

var c = [];
 
b.forEach(item => {
    c[item.productId]=item;
    // console.log(c[type.type])
    console.log(item)
});
 
 
getArray = () => {
    // a.forEach(item => {console.log(item)})
    // b.forEach(item => {console.log(item)})
    a.forEach(item => {
            item.type_name=c[item.productId].name;
    })
    console.log(a)
}
getArray()
