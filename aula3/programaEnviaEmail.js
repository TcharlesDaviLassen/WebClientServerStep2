// http://myaccount.google.com/

var nodemailer = require('nodemailer');


let email_user = 'tcharles.lassen@universo.univates.br';
let email_pass = "TcharlesDavi1896";
let email_to = 'tcharles.lassen@universo.univates.br';
let email_subject = "supiscoinha";
let email_content = "Teste email content";
let email_html = "Teste email";



var transponder = nodemailer.createTransport(
    {
        service: "gmail",
        auth: {
            user: email_user,
            pass: email_pass
        }
    }
)

var mailOptions = {
    from: email_user,
    to: email_to,
    subject: email_subject,
    text: email_content,
    html: email_html
};

transponder.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log("Erro ao enviar o email " + error)
    }
    else {
        console.log("Email enviado " + info.response)
    }
})
