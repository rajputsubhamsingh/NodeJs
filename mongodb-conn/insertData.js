const dbConnect = require('./mongodbConn')

const insert = async () => {
    const db = await dbConnect();

    // single data insert karne ke liye

    // const result = await db.insertOne({
    //     name: 's-4 ultra',
    //     brand: 'poco',
    //     price: 17600,
    //     category: 'mobile'
    // })
    // if(result.acknowledged){
    //     console.log('data inserted');
    // }

    // multiple data insert karne liye 
    const result = await db.insertMany(
        [
            {
                name: 's-4 ultra',
                brand: 'poco',
                price: 17600,
                category: 'mobile'
            },
            {
                name: 's-6 ultra',
                brand: 'poco',
                price: 15620,
                category: 'mobile'
            },{
                name: 's-8 ultra',
                brand: 'poco',
                price: 12300,
                category: 'mobile'
            }
        ]
    )
    if(result.acknowledged){
        console.log('data inserted');
    }
    
}

insert()