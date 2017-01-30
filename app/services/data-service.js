import request from 'superagent'

const dataService = store => next => action => {
    next(action)
    switch (action.type) {
    case 'GET_SHOP_DATA':
        request
            .get('http://localhost:3001/items/data')
            .end((err, res) => {
                if (err) {
                    return next({
                        type: 'GET_SHOP_DATA_ERROR',
                        err
                    })
                }
                const data = JSON.parse(res.text)
                next({
                    type: 'GET_SHOP_DATA_RECEIVED',
                    data
                })
            })
        break
    default:
        break
    }

};

export default dataService