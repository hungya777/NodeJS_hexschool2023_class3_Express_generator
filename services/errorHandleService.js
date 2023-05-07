const errorHandleService = (res, errCode = 400, err = "欄位未填寫正確，或無此 todo ID") => {
    res.status(errCode).send({
        status: false,
        message: err.errors? err.errors : err
    }).end();
}

module.exports = errorHandleService;