module.exports = {

////////////////////////////////////////////////////////////////////////////////

select_execute:

    function () {
    
    	const {rq: {request: {FIO, DATE_BORTH}}} = this
    	
    	const found = false //FIO.length % 2 === 0
    	const nye   = parseInt (DATE_BORTH.charAt (9)) < 5 ? '' : 'не '
    	
    	let r = `<STATE_REGISTRED_ISFIND xmlns="">${found}</STATE_REGISTRED_ISFIND>`
    	
    	if (found) r += `
			<STATE_REGISTRED_ROOT_e xmlns="">
				<name>${FIO}</name>
				<borth>${DATE_BORTH}</borth>
				<date>2014-05-14</date>
			</STATE_REGISTRED_ROOT_e>
			<STATE_REGISTRED_BODY_e
				xmlns="">
				<kpy>0</kpy>
				<stat1>${nye}состоит</stat1>
				<stat2>${nye}получает</stat2>
			</STATE_REGISTRED_BODY_e>
    	`
    
		return `<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
			<s:Body
				xmlns:xsd="http://www.w3.org/2001/XMLSchema"
				xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
				<ExecuteResponse xmlns="http://gosuslugi.rspb.ru/stateregistredservice">
					<ExecuteResult>${r}</ExecuteResult>
				</ExecuteResponse>
			</s:Body>
		</s:Envelope>`
   
    },
        
}