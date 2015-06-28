var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser');

var routes = require('./routes/index');
var emailRouter = require('./routes/emailRouter');

var app = express();
var port = process.env.PORT || 3000;


// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));


//routes
app.use('/', routes);
app.use('/api/v1/email', emailRouter);


app.listen(port, function(){
    console.log('Gulp is running my app on PORT: ' + port);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next){
        res.status(err.status || 500);
        res.send({
            message: err.message,
            error: err
        });
        return;
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next){
    res.status(err.status || 500);
    res.send({
        message: err.message,
        error: {}
    });
    return;
});

module.exports = app;

