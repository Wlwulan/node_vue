const express = require('express')
const app = express()

app.get('/', (req, res) => res.send({
    "code": "succ",
    "data": [{
        "user_name": "张",
        "set_type": "0",
        "blacklist_type": "0",
        "blacklistTime": null,
        "recoverType": "1",
        "territorialType": "0",
        "id": 1
    }, {
        "user_name": "王",
        "set_type": "0",
        "blacklist_type": "0",
        "blacklistTime": null,
        "recoverType": "1",
        "territorialType": "0",
        "id": 2
    }, {
        "user_name": "刘",
        "set_type": "1",
        "blacklist_type": "0",
        "blacklistTime": null,
        "recoverType": "0",
        "territorialType": "0",
        "id": 3
    }, {
        "user_name": "赵",
        "set_type": "1",
        "blacklist_type": "0",
        "blacklistTime": null,
        "recoverType": "0",
        "territorialType": "0",
        "id": 4
    }]
}))
app.get('/add', (req, res) => res.send({
    data: "添加数据"
}))
app.listen(4000, () => console.log('Example app listening on port 4001!'))