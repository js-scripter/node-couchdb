const url = 'http://admin:123@localhost:5984'
const nano = require('nano')(url);
const short = require('short-uuid');

// nano.db.create('alice')
// .then((response) =>  {
//     alice = nano.use('alice')
//     return alice.insert({ happy: true }, 'rabbit')
// }).then((response) => {
//     console.log('you have inserted a document with an _id of rabbit')
//     console.log(response);
// }).catch(err=>{
//     if(statusCode==412)
//     err=null
//     console.log(err)
// })

// nano.db.list().then((body) => {
//     // body is an array
//     body.forEach((db) => {
//       console.log(db);
//     });
//   });

//using promise
//  function init(DbName){
//     nano.db.list()
//     .then(listOfDb=>{
//         console.log(listOfDb)
//         if(!listOfDb.includes(DbName)){
//             nano.db.create(DbName)
//             .then((response) =>  {
//                 alice = nano.use(DbName)
//                 return alice.insert({ happy: true }, 'rabbit')
//             }).then((response) => {
//                 console.log('you have inserted a document with an _id of rabbit')
//                 console.log(response);
//             }).catch(err=>{
//                 if(statusCode==412)
//                 err=null
//                 console.log(err)
//             })
//         }else{
//             const alice = nano.use(DbName)
//             alice.insert({ happy: true }, short.generate())
//             .then((response) => {
//                 console.log('you have inserted a document with an _id of rabbit')
//                 console.log(response);
//             }).catch(err=>{
//                 if(err.statusCode==412)
//                 err=null
//                 console.log(err)
//             })
//         }
//     })
    
   
// }
//promise base function call
// init('alice')

//async function
async function asyncInit(DbName){
    let dbInstance
    const listOfDb = await nano.db.list()
    console.log(listOfDb)
    if(!listOfDb.includes(DbName)){
        await nano.db.create(DbName)
        dbInstance = await nano.use(DbName)
        // const response = await dbInstance.insert({ happy: true }, short.generate())
        const indexDef = {
            index: { fields: ['year'] },
            name: 'yearindex'
        };
        const index = await dbInstance.createIndex(indexDef)
        console.log(`you have created index ${indexDef.name} on field ${indexDef.index.fields}`)
    }else{
        const dbInstance = await nano.use(DbName)
        const response = await dbInstance.insert({ happy: true }, 'sarah')
        console.log('you have inserted a document with an _id of unique id')
        console.log(response);
    }

}

//async await function call
// asyncInit('test')

//function to insert docs
async function asyncInsert(dbName, doc){
    dbInstance = await nano.use(dbName)
    const response = await dbInstance.insert(doc, short.generate())
    console.log(response)
}
// asyncInsert('test',{year:1976,name:'sarah'})

//async update function
async function asyncUpdate(dbName,doc){
    try {
        const dbInstance = nano.use(dbName)
        const result = await dbInstance.insert(doc)
        console.log(result)
    } catch (error) {
        console.log(error)        
    }
}
//call async update function
// const updateDoc={ _id: 'rabbit', _rev: '9-2edb532e1c1233f54b645ee9e70d1c61', name:'rabbit mq', happy: false, type:'queue software for queue' }
// asyncUpdate('alice',updateDoc)

// async delete function
async function asyncDelete(dbName,_id,rev){
    try {
        const dbInstance = await nano.use(dbName)
        const result  = await dbInstance.destroy(_id,rev)
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

//call async delete 
// asyncDelete('alice','ajNHNH6DLS3fDHDsSc1meQ','1-d1628a1063a3da5e9252ee6d52a66b12')

//async get doc by _id
async function asyncGetDoc(dbName,_id){
    try {
        const dbInstance = await nano.use(dbName)
        const result = await dbInstance.get(_id)
        console.log(result)
        
    } catch (error) {
        console.log(error)
    }
}

//call async get by doc _id 
// asyncGetDoc('alice','anV3RNGbke65x18yfJ3JJT')


//get list of docs
async function getDocsList(dbName){
    try {
        const dbInstance = await nano.use(dbName)
        const result = await dbInstance.list({include_docs: true})
        result.rows.forEach((doc) => {
            console.log(doc.doc);
        });
    } catch (error) {
        console.log(error)
    }
}

//call get all docs in db
// getDocsList('alice')

async function fetchDocs(dbName,keys){
    try {
        // const keys = ['tiger', 'zebra', 'donkey'];
        const dbInstance = await nano.use(dbName)
        const result = await dbInstance.fetch({keys: keys})
        result.rows.forEach((doc) => {
            console.log(doc.doc);
        });
    } catch (error) {
        console.log(error)
    }
}

// fetchDocs('alice',['rabbit','sachin','shilpa'])



// find documents where the name = "Brian" and age > 25.
async function asyncFind(){
    const q = {
        selector: {
          name: { "$eq": "sachin"},
          year : { "$gt": 1972 }
        },
        fields: [ "name",  "year" ],
        limit:50
    };
    const alice = await nano.use('test')
    alice.find(q).then((doc) => {
        console.log(doc);
    });
}
asyncFind()