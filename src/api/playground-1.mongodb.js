// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('merndb');

// Create a new document in the collection.
db.getCollection('users').insertOne({
        "_id": {
          "$oid": "673775b609bbfff2ff704b55"
        },
        "username": "uwu",
        "email": "uwu@gmail.com",
        "password": "$2a$10$Tyc3ZQhdt9MtSC1vaupm5e3UktKI7JmeUVcH756WQi5XguMFDLAR6",
        "createdAt": {
          "$date": "2024-11-15T16:24:22.366Z"
        },
        "updatedAt": {
          "$date": "2024-11-15T16:24:22.366Z"
        },
        "__v": 0
});
