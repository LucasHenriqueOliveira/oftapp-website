var emailController = function(transporter){

    // send email
    var post = function(req, res){
        var name = req.body.name;
        var email = req.body.email;
        var message = req.body.message;

        if(!name){
            res.status(400);
            res.json({ message: 'Informe o seu nome!' });
        }

        if(!email){
            res.status(400);
            res.json({ message: 'Informe o seu email!' });
        }

        if(!message){
            res.status(400);
            res.json({ message: 'Informe a sua mensagem!' });
        }

        var mailOptions = {
            from: email,
            to: 'contato.oftapp@gmail.com',
            subject: 'Contato [Oftapp]',
            text: message + ' ' + name
        };

        transporter.sendMail(mailOptions, function(error, info) {
            if(error) {
                res.status(500);
                res.json({ message: 'Ocorreu um erro no envio do email!' });
            } else {
                res.status(200);
                res.json({ message: 'Email enviado com sucesso!' });
            }
        });
    };

    return {
        post: post
    };
};

module.exports = emailController;
