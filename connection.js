var config = {
    user: 'MBYDOMAIN/211979976',
    password: '',
    server: 'srv2\pupils', 
    database: 'furniture',
    options: {
      port: 0 //////// ask elkarif
    } 
};
// connect to your database


const getRequest = () => {
    sql.connect(config, function (err) {
        if (err) console.log(err);
        // create Request object
    }); 
    return new sql.Request();  
}