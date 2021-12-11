const Dia = require ('../../Ext/Dia/Dia.js')
const DiaW2uiFilter = require ('../../Ext/Dia/Content/Handler/HTTP/Ext/w2ui/Filter.js')

module.exports = class extends Dia.HTTP.Handler {
    
    constructor (o) {
		super (o)
		this.import ((require ('./Base')), [
			'get_method_name',
			'fork', 
			'get_body_element',
		])
    }

    check () {
        super.check ()
        let m = this.http.request.method
        if (m != 'POST') throw '405 No ' + m + 's please'
    }

    is_anonymous () {
        return true
    }
    
    to_fault (x) {

    	let o = super.to_fault (x)
    	
    	o.content = `<error>\n<![CDATA[${x.stack || x}]]>\n</error>`
    	
    	return o
    
    }    
    
    w2ui_filter () {return new DiaW2uiFilter (this.rq)}

}