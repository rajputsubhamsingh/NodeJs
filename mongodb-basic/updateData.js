const dbConnect = require('./mongodbConn')

const updateData = async () => {
    let data = await dbConnect()
    // const result = await data.updateOne(
    //     { name: 'm 40' },    // kisme change karna uska kuch referece
    //     {$set: { price: 20000 }}    // kya update karna hai usko 
    // )

    // const result = await data.updateOne(
    //     { name: 'm 40' },    // kisme change karna uska kuch referece
    //     {$set: { name: 'm 6s' }}    // kya update karna hai usko 
    // )


    //  update many 
    const result = await data.updateMany(
        { brand: 'poco' },   
        {$set: { price: 20000, camera: "48mp" }}    // yaha update ke sath sath ek naya feature camera: "48mp" bhi add kara hai.
    )
    if(result.acknowledged){
        console.log(result);
    }
}

updateData()