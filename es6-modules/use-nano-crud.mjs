import db from './nano-crud.mjs'
const dbName='q4'

// const indexDef = {
//     index: { fields: ['year'] },
//     name: 'yearindex'
// };
// db.asyncInit(dbName,indexDef)
// .then(res=>{
//     console.log(res)
// })
// .catch(err=>{
//     console.log(err)
// })

// db.asyncInsert(dbName,{year:1965,name:'bill gates', gender:'male'})
// .then(res=>{
//     console.log(res)
// })
// .catch(err=>{
//     console.log(err)
// })

// db.asyncGetDoc(dbName,'fa03361b54c9ce8450dcc05290014971')
// .then(res=>{
//     console.log(res)
// })
// .catch(err=>{
//     console.log(err)
// })

// const updateDoc={
//      _id: 'fa03361b54c9ce8450dcc05290014971', 
//      _rev: '1-5b8e9de950a6abebdbdda6c9342374ef', 
//      name:'Mark Zukerberg', 
//      gender:'male' ,
//      year:1974
// }
// db.asyncUpdate(dbName,updateDoc)
// .then(res=>{
//     console.log(res)
// })
// .catch(err=>{
//     console.log(err)
// })


// db.asyncGetDoc(dbName,'fa03361b54c9ce8450dcc05290014971')
// .then(res=>{
//     console.log(res)
// })
// .catch(err=>{
//     console.log(err)
// })

// db.asyncInsert(dbName,{year:1985,name:'jack dorsy', gender:'male'})
// .then(res=>{
//     console.log(res)
// })
// .catch(err=>{
//     console.log(err)
// })

// const query = {
//     selector: {
//       name: { "$eq": "jack dorsy"},
//       year : { "$lt": 2000 }
//     },
//     fields: [ "name",  "year", "gender", "_id","_rev" ],
//     limit:50
// };
// db.asyncFind(dbName,query)
// .then(res=>{
//     console.log(res)
// })
// .catch(err=>{
//     console.log(ErrorEvent)
// })

// db.asyncDelete(dbName,'fa03361b54c9ce8450dcc05290014971','2-425a037b297d214a29a622b2c2dd5004')
// .then(res=>{
//     console.log(res)
// })
// .catch(err=>{
//     console.log(err)
// })



//////////////////////////////////////////////////////////////////////////////////

// db.getDocsList(dbName)
// .then(res=>{
//     console.log(res)
// })
// .catch(err=>{
//     console.log(err)
// })

// db.fetchDocs(dbName,['fa03361b54c9ce8450dcc0529001072d','fa03361b54c9ce8450dcc0529000d5c4'])
// .then(res=>{
//     console.log(res)
// })
// .catch(err=>{
//     console.log(err)
// })

