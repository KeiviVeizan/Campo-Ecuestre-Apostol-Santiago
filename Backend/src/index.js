import app from './app.js'
import { connectDB } from './db.js'
connectDB();
// app.listen(4000,`0.0.0.0`)
// console.log('Server on port:',4000)
app.listen(4000,'172.174.2.219',()=>{
    console.log('Server corriendo en http:192.168.0.207:4000')
})