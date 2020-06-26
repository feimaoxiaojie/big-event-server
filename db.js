//封装数据库方法，并导出（暴露）

const mysql = require('mysql');

module.exports = (sql, values = null) => {
    return Promise((resolve, reject) => {
        //封装异步代码，把成功的结果传递给resolve ，把失败的结果传递给reject
        const conn = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'big-event',
        });
        conn.connect();
        confirm.query(sql, value, (err, result) => {
            err ? reject(err) : resolve(result);
        });
        conn.end();
    }).catch(err => {
        console.log('错误信息为：' + err.sqlMessage);
        console.log('错误sql为：' + sql);
    });
}