const user  ={id:1, name:'Jamal Uddin ', job: 'model'};

// javascript object notation (JSON)

const stringified = JSON.stringify(user);


// console.log(stringified);
// console.log(user);


const shop = {
    ownerName :'Saon',
    address :{
        village:'A',
        postOffice:'B',
        city:'C',
        country:'D'
    },
    products:['mobile','laptop','desktop','keyboard','mouse'],
    revenue: 50000,
    isOpen: true,
    isNew: false
};

console.log(shop);

const shopJSON = JSON.stringify(shop);
console.log(shopJSON);