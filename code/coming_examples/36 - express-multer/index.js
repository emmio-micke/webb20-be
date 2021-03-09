const express = require('express');
const multer = require('multer');
const morgan = require('morgan');

// create express app
const app = express();

// upload file path
const FILE_PATH = 'uploads';

// configure multer
const upload = multer({
    dest: `${FILE_PATH}/`,
    limits: {
        files: 5, // allow up to 5 files per request,
        fieldSize: 2 * 1024 * 1024 // 2 MB (max file size)
    },
    /*
    File information
    Each file contains the following information:

    Key	            Description	                                Note
    fieldname	    Field name specified in the form	
    originalname	Name of the file on the user's computer	
    encoding	    Encoding type of the file	
    mimetype	    Mime type of the file	
    size	        Size of the file in bytes	
    destination	    The folder to which the file has been saved	DiskStorage
    filename	    The name of the file within the destination	DiskStorage
    path	        The full path to the uploaded file	        DiskStorage
    buffer	        A Buffer of the entire file	                MemoryStorage
    */
    fileFilter: (request, file, callback) => {
        // allow images only
        if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
            return callback(new Error('Only images are allowed.'), false);
        }
        callback(null, true);
    }
});

// add other middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get('/', function (request, response) {
    response.sendFile(__dirname + '/index.html')
});

app.post('/upload-profile-pic', upload.single('profile_pic'), async (request, response) => {
    try {
        const avatar = request.file;

        // make sure file is available
        if (!avatar) {
            response.status(400).send({
                status: false,
                data: 'No file is selected.'
            });
        } else {
            // send response
            response.send({
                status: true,
                message: 'File is uploaded.',
                data: {
                    name: avatar.originalname,
                    mimetype: avatar.mimetype,
                    size: avatar.size
                }
            });
        }

    } catch (err) {
        response.status(500).send(err);
    }
});

const multer_upload = multer().array('photos');

app.post('/upload-photos', (request, response) => {
    try {
        await upload(request, response);
        const photos = request.files;

        // check if photos are available
        if (!photos) {
            response.status(400).send({
                status: false,
                data: 'No photo is selected.'
            });
        } else {
            let data = [];

            // iterate over all photos
            photos.map(p => data.push({
                name: p.originalname,
                mimetype: p.mimetype,
                size: p.size
            }));

            // send response
            response.send({
                status: true,
                message: 'Photos are uploaded.',
                data: data
            });
        }

    } catch (err) {
        response.status(500).send(err);
    }
});

// start the app 
const port = process.env.PORT || 3000;

app.listen(port, () =>
    console.log(`App is listening on port ${port}.`)
);
