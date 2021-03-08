const express = require('express')
const app = express()

const fileUpload = require('express-fileupload')
const path = require('path')


app.use(fileUpload({
    createParentPath: true
}))
app.use(express.urlencoded({ extended: true }))
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

app.set('view engine', 'ejs')

app.get('/', (request, response) => {
    response.render('index')
})

app.post('/upload-profile-pic', (request, response) => {
    try {
        if (request.files) {
            let profile_pic = request.files.profile_pic

            let file_name = `./uploads/${profile_pic.name}`

            profile_pic.mv(file_name)

            response.render('image', { image: file_name })
        } else {
            response.end('<h1>No file uploaded!</h1>')
        }
    } catch (error) {
        response.send(error)
    }
})

app.listen(3000)