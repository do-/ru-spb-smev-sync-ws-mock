module.exports = {

////////////////////////////////////////////////////////////////////////////////

select_stateregistred2__execute:

    function () {
    
    	const {FIO, DATE_BORTH} = this.rq.Request
            	    
		return `<?xml version="1.0" encoding="UTF-8"?>
			<s:Envelope
				xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
				<s:Body
					xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
					xmlns:xsd="http://www.w3.org/2001/XMLSchema">
					<ExecuteResponse
						xmlns="http://smev.rspb.ru/regional/stateregistred2">
						<ExecuteResult>
							<STATE_REGISTRED_ISFIND
								xmlns="">true</STATE_REGISTRED_ISFIND>
							<STATE_REGISTRED_ROOT_e
								xmlns="">
								<name>${FIO}</name>
								<borth>${DATE_BORTH}</borth>
								<datebeg>2012-01-01</datebeg>
								<dateend>2012-07-10</dateend>
							</STATE_REGISTRED_ROOT_e>
							<STATE_REGISTRED_BODY_e
								xmlns="">
								<kpy>400089349</kpy>
								<name>КАРТОШКИНА СВЕТЛАНА АЛЕКСАНДРОВНА</name>
								<adress>АВИАКОНСТРУКТОРОВ ПР-КТ дом 39 корп 1 кв 102</adress>
								<pase>Паспорт Cерия 40 05  N 741580</pase>
								<stat1>зарегистрирован(а)</stat1>
								<regdate>2011-01-27</regdate>
								<enddate>2012-06-15</enddate>
								<datz>2012-07-10</datz>
								<stat2>не получает</stat2>
								<perbegz>2012-01-01</perbegz>
								<perendz>2012-07-10</perendz>
								<stat3>получал(a)</stat3>
								<orgname>Санкт-Петербургское государственное казенное учреждение "Центр занятости населения Приморского района Санкт-Петербурга"</orgname>
							</STATE_REGISTRED_BODY_e>
						</ExecuteResult>
					</ExecuteResponse>
				</s:Body>
			</s:Envelope>`
   
    },
        
}