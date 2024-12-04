import app from './app.js'
import { connectDB } from './db.js'
import {ip_actual} from "./configip.js"
connectDB();
// app.listen(4000,`0.0.0.0`)
// console.log('Server on port:',4000)
app.listen(4000,ip_actual,()=>{
    console.log('Server corriendo en http:'+ip_actual+':4000')
})