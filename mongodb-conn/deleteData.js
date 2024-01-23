const dbConnect = require('./mongodbConn')

const deleteData = async () => {
    const data = await dbConnect()
    // single row delete
    // const result = await data.deleteOne({name: 'm 6s'})
    

    // multiple record delete 
    const result = await data.deleteMany({price: 20000})
    if(result.acknowledged && (!result.deletedCount === 0)){
        console.log('data deleted');
    }

    // suppose kariye jo data hmko deletwe karna hai o mere database me hai hi nhi tb kya karenge 
    // to yaha pe ko bhi error nhi milega par
    // deletedCount : 0 show karega 
    // par  acknowledged: true hi rhega 
    // isko hm aise handle karenge

    if(result.deletedCount === 0){
        console.log('data no found in database..');
    }

}

deleteData()