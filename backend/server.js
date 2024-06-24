import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import { notFound, errorHandler } from './middleware/errorHandler.js'
import connectDB from './config/db.js'
import productRoute from './routes/productRoutes.js'
const PORT = process.env.PORT || 8000


// connect to MongoDB
connectDB()
 
// initialize express
const app = express()

app.get('/', (req, res) => {
    res.send('API is running...')
})

app.use('/api/products', productRoute)

app.use(notFound)
app.use(errorHandler)


// listening to port
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))

