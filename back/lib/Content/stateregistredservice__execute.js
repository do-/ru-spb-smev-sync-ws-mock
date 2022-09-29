module.exports = {

////////////////////////////////////////////////////////////////////////////////

select_stateregistredservice__execute:

    function () {

    	const {rq: {request: {FIO, DATE_BORTH}}} = this

    	const found = FIO.length % 2 === 0
    	
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
				<stat1>${parseInt (DATE_BORTH.charAt (3)) < 5 ? '' : 'не '}состоит</stat1>
				<stat2>${parseInt (DATE_BORTH.charAt (9)) < 5 ? '' : 'не '}получает</stat2>
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