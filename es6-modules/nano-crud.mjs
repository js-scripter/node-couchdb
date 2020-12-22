const url = 'http://admin:123@localhost:5984'
import nano from 'nano'
const dbAccess = nano(url)

async function asyncInit(DbName,indexDef){
    try {
        let dbInstance
        const listOfDb = await dbAccess.db.list()
        console.log(listOfDb)
        if(!listOfDb.includes(DbName)){
            await dbAccess.db.create(DbName)
            dbInstance = await dbAccess.use(DbName)
            const index = await dbInstance.createIndex(indexDef)
            return `DB ${DbName} created with index ${indexDef.name} on field ${indexDef.index.fields}`
        }
    } catch (error) {
        return `statusCode : ${error.statusCode}, dbError : ${error.reason}`
    }
}

// function to insert docs
async function asyncInsert(dbName, doc){
    try {
        const dbInstance = await dbAccess.use(dbName)
        const response = await dbInstance.insert(doc)
        console.log(response)
    } catch (error) {
        return `statusCode : ${error.statusCode}, dbError : ${error.reason}`
    }
}
// update docs
async function asyncUpdate(dbName,doc){
    try {
        const dbInstance = dbAccess.use(dbName)
        const result = await dbInstance.insert(doc)
        return result
    } catch (error) {
        return `statusCode : ${error.statusCode}, dbError : ${error.reason}`
        // return error   
    }
}

// delete docs
async function asyncDelete(dbName,_id,rev){
    try {
        const dbInstance = await dbAccess.use(dbName)
        const result  = await dbInstance.destroy(_id,rev)
        // console.log(result)
        return result
    } catch (error) {
        return `statusCode : ${error.statusCode}, dbError : ${error.reason}`
    }
}

// get a doc by _id
async function asyncGetDoc(dbName,_id){
    try {
        const dbInstance = await dbAccess.use(dbName)
        const result = await dbInstance.get(_id)
        console.log(result)
        
    } catch (error) {
        return `statusCode : ${error.statusCode}, dbError : ${error.reason}`
    }
}

//fetch all docs in db
async function getDocsList(dbName){
    try {
        const dbInstance = await dbAccess.use(dbName)
        const result = await dbInstance.list({include_docs: true})
        result.rows.forEach((doc) => {
            console.log(doc.doc);
        });
    } catch (error) {
        return `statusCode : ${error.statusCode}, dbError : ${error.reason}`
    }
}

//fetch many docs by index key which is _id in this example
async function fetchDocs(dbName,keys){
    try {
        const dbInstance = await dbAccess.use(dbName)
        const result = await dbInstance.fetch({keys: keys})
        result.rows.forEach((doc) => {
            console.log(doc.doc);
        });
    } catch (error) {
        return `statusCode : ${error.statusCode}, dbError : ${error.reason}`
    }
}
// find by query on any field other than index key which is _id in this example
async function asyncFind(dbName,query){
    try {
        const dbInstance = await dbAccess.use(dbName)
        const result  = await dbInstance.find(query)
        return result        
    } catch (error) {
        return `statusCode : ${error.statusCode}, dbError : ${error.reason}`
    }
    
}

export default  {
    asyncInit,
    asyncInsert,
    asyncUpdate,
    asyncDelete,
    asyncGetDoc,
    getDocsList,
    fetchDocs,
    asyncFind
}
