// const multer = require('multer')
// const { Client, Storage } = require('node-appwrite')

// const client = new Client()
//     .setEndpoint('https://cloud.appwrite.io/v1')
//     .setProject(process.env.PROJECT_ID)
//     .setKey(process.env.API_KEY);

// const storage = new Storage(client);

// const upload = multer({
//     storage: multer.memoryStorage(),
//     limits: {
//         fileSize: 10 * 1024 * 1024, // 5MB limit
//     },
// });

// const uploadToAppwrite = async (req, res, next) => {
//     if (!req.file) {
//         return res.status(400).send('No file uploaded.');
//     }

//     try {
//         const file = req.file;
//         // console.log(req.file);

//         const fileId = 'unique_' + Date.now();

//         const buffer= file.buffer;
        
//         await storage.createFile(
//             process.env.PROJECT_ID,
//             fileId,
//             buffer
//         );

//         req.fileId = fileId;
//         next();
//     } catch (error) {
//         console.error('Error uploading to Appwrite:', error);
//         res.status(500).send('Error uploading file');
//     }
// };

// module.exports = { upload, uploadToAppwrite };
const multer = require('multer');
const { Client, Storage, InputFile } = require('node-appwrite');
const { Readable } = require('stream');

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(process.env.PROJECT_ID)
    .setKey(process.env.API_KEY);

const storage = new Storage(client);

const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 10 * 1024 * 1024, // 10MB limit
    },
});

const uploadToAppwrite = async (req, res, next) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    try {
        const file = req.file;
        console.log('Uploaded file:', file); // Log the file details

        const fileId = 'unique_' + Date.now();

        const buffer = file.buffer;
        // console.log('Buffer:', buffer); // Log the buffer details
        const filename=file.originalname;
        // console.log(filename); 
        

        await storage.createFile(
            process.env.BUCKET_ID,
            fileId,
            InputFile.fromBuffer(buffer,filename)
        );

        req.fileId = fileId;
        next();
    } catch (error) {
        console.error('Error uploading to Appwrite:', error);
        res.status(500).send('Error uploading file');
    }
};

module.exports = { upload, uploadToAppwrite };