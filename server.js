let express = require('express');
let app = express();
let routes = require('./routes');

app.use(express.urlencoded({extended: true}));

app.use('/', routes);

app.listen(8000, function(){
    console.log('server is listening on port 8000')  
});
