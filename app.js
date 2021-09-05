const path=require('path')
const express=require('express')
const dotenv=require('dotenv')
const cors=require('cors')
const connectDB=require('./config/db')
//load env vars
dotenv.config({ path: './config/config.env' })

//connect to the database
connectDB()

const app = express()

const storesRouter=require('./routes/stores')

//body parser middleware
app.use(express.json())

//Enable cors
app.use(cors())

app.use(express.static(path.join(__dirname,'public')))

app.use('/api/v1/stores',storesRouter)




const PORT = process.env.PORT || 3000

app.listen(PORT,()=>console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))