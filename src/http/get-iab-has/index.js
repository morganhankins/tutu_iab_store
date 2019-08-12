// Enable secure sessions, express-style middleware, and more:
// https://docs.begin.com/en/functions/http/
//
// let begin = require('@architect/functions')

let data = require('@begin/data')

exports.handler = async function http(req) {

    console.log(req)

    let key = req.body['key'];
    let token = await data.get({table: 'iab', key: key});
    
    if(token != null) {
	return {
	    status: 200,
	    type: 'application/json; charset=utf8',
	    body: 'has'
	}
    } else {
	return {
	    status: 404,
	    type: 'application/json; charset=utf8',
	    body: 'not'
	}
    }
}
