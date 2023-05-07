const successHandleService = (res, data) =>{

    // send
    // 傳入型別來決定回傳格式
    // String => HTML <h1>Hello</h1>
    // Array or Object => JSON
    // 本身預帶 res.end()
    // 請求成功，預設回傳 default 200
    res.send(
        {
            status: true,
            data
        }
    )
}

module.exports = successHandleService;