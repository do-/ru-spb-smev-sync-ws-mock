module.exports = {

////////////////////////////////////////////////////////////////////////////////

get_item_of_get_status:

    function () {
    
		const status = [
//			{id: 0, label: 'Ошибка в запросе'},
			{id: 2, label: 'В очереди на обработку'},
			{id: 3, label: 'В работе'},
			{id: 4, label: 'Запрос успешно обработан'},
//			{id: 5, label: 'Ошибка на стороне поставщика'},
//			{id: 6, label: 'Адрес не найден'},
//			{id: 7, label: 'Человек не найден'},
//			{id: 8, label: 'Заданный Id запроса не корректен'},
//			{id: 9, label: 'Заданный Id не найден'},
		]
   	    
   	    const {id, label} = status [Math.floor (status.length * Math.random ())]

    	const doc = id !== 4 ? '' : `<d4p1:Document>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</d4p1:Document>`
   	    
		return `<?xml version="1.0" encoding="UTF-8"?>
<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
   <s:Header>
   </s:Header>
   <s:Body wsu:Id="body">
      <GetStatusResponse xmlns="http://tempuri.org/">
         <GetStatusResult xmlns:d4p1="http://schemas.datacontract.org/2004/07/GetForm9ASync" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
            ${doc}
            <d4p1:Status>
               <d4p1:Code>${id}</d4p1:Code>
               <d4p1:Name>${label}</d4p1:Name>
            </d4p1:Status>
         </GetStatusResult>
      </GetStatusResponse>
   </s:Body>
</s:Envelope>`
   
    },
        
}