const express = require('express')
const fileUpload = require('express-fileupload')
const morgan = require('morgan')
const path = require('path')

const app = express()

/*
 * Here is what each of these packages do:
 * 
 * express - Popular web framework built on top of Node.js. We'll be using it for developing REST API.
 * body-parser - Node.js request body parsing middleware which parses the incoming request body before your handlers, and make it available under request.body property. In short, it simplifies the incoming request.
 * cors - Another Express middleware for enabling CORS (Cross-Origin Resource Sharing) requests.
 * express-fileupload - Simple Express middleware for uploading files. It parses multipart/form-data requests, extracts the files if available, and make them available under request.files property.
 * morgan - Node.js middleware for logging HTTP requests.
 * lodash - A JavaScript library which provides utility functions for arrays, numbers, objects, strings, etc.
 */

// enable files upload
app.use(fileUpload({
    createParentPath: true
}))

//add other middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.set('view engine', 'ejs')


app.get('/', function (request, response) {
    response.render('index')
})

app.post('/upload-profile-pic', async (request, response) => {
    try {
        if (!request.files) {
            response.send('<h1>No file uploaded</h1>')
            /*
            response.send({
                status: false,
                message: 'No file uploaded'
            })
            */
        } else {
            //Use the name of the input field (i.e. "profile_pic") to retrieve the uploaded file
            let profile_pic = request.files.profile_pic

            //Use the mv() method to place the file in upload directory (i.e. "uploads")
            let file_name = './uploads/' + profile_pic.name
            profile_pic.mv(file_name)

            //send response
            response.render('image', { images: [file_name] })

            /*
            response.send({
                status: true,
                message: 'File is uploaded',
                data: {
                    name: profile_pic.name,
                    mimetype: profile_pic.mimetype,
                    size: profile_pic.size
                }
            })
            */
        }
    } catch (err) {
        response.status(500).send(err)
    }
})

app.post('/upload-photos', async (request, response) => {
    try {
        if (!request.files) {
            response.send('<h1>No file uploaded</h1>')
        } else {
            let images = []

            //loop all files
            for (let photo of request.files.photos) {
                //move photo to uploads directory
                let file_name = './uploads/' + photo.name
                photo.mv(file_name)

                //push file details
                images.push(file_name)
            }

            //return response
            response.render('image', { images: images })
        }
    } catch (err) {
        response.status(500).send(err)
    }
})

//start app 
const port = process.env.PORT || 3000

app.listen(port, () =>
    console.log(`App is listening on port ${port}.`)
)