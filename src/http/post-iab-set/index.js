// Enable secure sessions, express-style middleware, and more:
// https://docs.begin.com/en/functions/http/
//
// let begin = require('@architect/functions')

let data = require('@begin/data')

exports.handler = async function http(req) {

    console.log(req)

    let key = req.body['key'];

    let token = await data.get({table: 'iab', key:key});
    
    // fail token already exits
    if(token != null) {
	return {
	    status: 401,
	    type: 'application/json; charset=utf8',
	    body: 'fail'
	}
    } else {
	let table = 'iab';
	let y = 'y';

	await data.set({table, key, y});
	
	return {
	    status: 200,
	    type: 'application/json; charset=utf8',
	    body: 'ok'
	}
    }
}
