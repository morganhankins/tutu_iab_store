// Enable secure sessions, express-style middleware, and more:
// https://docs.begin.com/en/functions/http/
//
// let begin = require('@architect/functions')

let data = require('@begin/data')

exports.handler = async function http(req) {
  console.log(req)

    let key = req.body['key']
    let token = await data.get({'iab', key})

    if(token == null) {
	// fail token already exits
	return {
	    status: 401,
	    type: 'application/json; charset=utf8',
	    body: "fail"
	}
    } else {
	await data.set({table, key, "y"}) // TODO :)
	
	return {
	    status: 200,
	    type: 'application/json; charset=utf8',
	    body: "ok"
	}
    }
}
