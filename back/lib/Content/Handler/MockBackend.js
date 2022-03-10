const Dia = require ('../../Ext/Dia/Dia.js')
const {XMLReader, XMLNode} = require ('xml-toolkit')

module.exports = class extends Dia.HTTP.Handler {
    
    constructor (o) {
		super (o)
		this.import ((require ('./Base')), [
			'fork', 
			'get_body_element',
			'to_soap_fault',
		])
    }

    get_ttl () {
    	return 0
    }

	get_method_name () {
		let rq = this.rq
		if (rq.part)   return 'get_' + rq.part + '_of_' + rq.type
		if (rq.action) return 'do_'  + rq.action + '_' + rq.type
		return (rq.id ? 'get_item_of_' : 'select_') + rq.type
	}

    check () {
        super.check ()
        let m = this.http.request.method
        if (m != 'POST') throw '405 No ' + m + 's please'
    }

    is_anonymous () {
        return true
    }

    is_transactional () {
        return false
    }
    
    async read_params () {
        
        this.rq = {}
        
		const xml = await this.get_http_request_body (this.http.request)
                
		const body = await new XMLReader ({
			filterElements : 'Body',
			map            : XMLNode.toObject ({})
		}).process (xml).findFirst ()   		
		
		const [[t, d]] = Object.entries (body)
		
		this.rq.type = t

			.replace (/Request$/, '') // method, not message name

			.replace (/[A-Z]/g,       // CamelCase to under_scores
				(m, o) => (o ? '_' : '') + m.toLowerCase ()
			)		
		
		for (const [k, v] of Object.entries (d)) this.rq [k] = d [k]

    }    

    send_out_data (data) {
 		let rp = this.http.response
        rp.statusCode = 200
        rp.setHeader ('Content-Type', 'application/soap+xml')
        rp.end (data)
	}
    
}