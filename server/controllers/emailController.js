var emailController = function(){

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
        //res.status(200);
        //res.json({ message: 'Email enviado com sucesso!' });
    };

    return {
        post: post
    };
};

module.exports = emailController;
