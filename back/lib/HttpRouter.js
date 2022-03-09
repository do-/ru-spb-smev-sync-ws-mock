const mock  = require ('./Content/Handler/MockBackend.js')

module.exports = class extends require ('./Ext/Dia/Content/Handler/HTTP/Router.js') {

	create_http_handler (http) {
	
		let {conf} = this, {pools} = conf

		return new mock ({conf, pools, http})

	}
		
}