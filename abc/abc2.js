    var sql = require("mssql");
    var config = {
        user: 'hoanganh1',
        password: 'hoanganh23',
        server: 'localhost',
        database: 'hoanganh'
    };
    sql.connect(config, function (err) {
        if (err) console.log(err);
        var request = new sql.Request();
        request.query('select * from Company ', function (err, recordset) {
            sql.close();
            console.log(recordset.recordsets[0]);
            // var abc1= recordset.recordsets[0];
            // var x=JSON.parse(recordset.recordsets[0]);
            // console.log(x);
        });
    });
