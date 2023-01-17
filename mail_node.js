const nodemailer = require('nodemailer');
 
 
let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your gmail',
        pass: 'app password',
    }
});
 
let mailDetails = {
    from: 'your gmail',
    to: "test@gmail.com",
    subject: 'Test mail',
    text: 'Node.js testing mail'
};
 
mailTransporter.sendMail(mailDetails, function(err, data) {
    if(err) {
        console.log('Error Occurs');
    } else {
        console.log('Email sent successfully');
    }
});