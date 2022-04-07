module.exports = {

////////////////////////////////////////////////////////////////////////////////

select_id_card14:

    function () {
    
    	const {person, snils} = this.rq.MessageData.AppData.info
    	    	    	
    	let dotations = ''

		return (
			`<soapenv:Envelope xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soapenv:Header>
      <wsse:Security soapenv:mustUnderstand="0" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"/>
   </soapenv:Header>
   <soapenv:Body wsu:Id="body" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
      <ns1:idCard14Response xmlns:ns1="http://smev.gosuslugi.ru/rev111111">
         <ns1:Message>
            <ns1:Sender>
               <ns1:Code>SIV_IOGV_SPB</ns1:Code>
               <ns1:Name>КИС СПб</ns1:Name>
            </ns1:Sender>
            <ns1:Recipient>
               <ns1:Code>SIV_IOGV_SPB</ns1:Code>
               <ns1:Name>КИС СПб</ns1:Name>
            </ns1:Recipient>
            <ns1:Originator>
               <ns1:Code>SIV_IOGV_SPB</ns1:Code>
               <ns1:Name>КИС СПб</ns1:Name>
            </ns1:Originator>
            <ns1:TypeCode>GSRV</ns1:TypeCode>
            <ns1:Status>RESULT</ns1:Status>
            <ns1:Date>2012-03-28T16:07:48.756Z</ns1:Date>
            <ns1:ExchangeType>1</ns1:ExchangeType>
            <ns1:ServiceCode>1</ns1:ServiceCode>
            <ns1:TestMsg>тестовый запрос по сервису getIdsCard8</ns1:TestMsg>
         </ns1:Message>
         <MessageData xmlns="http://smev.gosuslugi.ru/rev111111">
            <AppData Id="AppData">
               <info>
                  <person>
                     <fNameCiv>${person.fNameCiv}</fNameCiv>
                     <iNameCiv>${person.iNameCiv}</iNameCiv>
                     <mNameCiv>${person.mNameCiv}</mNameCiv>
                     <docDatCiv>${person.docDatCiv}</docDatCiv>
                  </person>
                  <snils>${snils}</snils>
                  <document>
                     <codeKind>1</codeKind>
                     <numDoc>787731</numDoc>
                     <seriesDoc>4002</seriesDoc>
                     <dateDoc>2002-07-19T00:00:00.000Z</dateDoc>
                  </document>
                  <handlingCode>0</handlingCode>
               </info>
               <document>
                  <titleDoc>Удостоверение участника ликвидации последствий аварии на Чернобыльской АЭС 1986-1987 годах</titleDoc>
                  <numDoc>${('0' + Math.floor (1e6 * Math.random ())).slice (-6)}</numDoc>
                  <seriesDoc>${String.fromCharCode ('А'.charCodeAt (0) + Math.floor (32 * Math.random ()))}</seriesDoc>
                  <dateDoc>${new Date (Date.now () - 2e12 * Math.random ()).toJSON ().slice (0, 10) + 'T00:00:00'}</dateDoc>
                  <orgDoc>ОСЗН МОСКОВСКИЙ РН</orgDoc>
               </document>
               <ds:Signature xmlns="http://www.w3.org/2000/09/xmldsig#">
                  <ds:KeyInfo>
                     <ds:X509Data>
                        <ds:X509Certificate>MIIEQzCCA/CgAwIBAgIKGx590AAAAAAO9jAKBgYqhQMCAgMFADCBvDEcMBoGCSqGSIb3DQEJARYN
Y2FAaWFjLnNwYi5ydTELMAkGA1UEBhMCUlUxJjAkBgNVBAcMHdCh0LDQvdC60YIt0J/QtdGC0LXR
gNCx0YPRgNCzMTAwLgYDVQQLDCfQo9C00L7RgdGC0L7QstC10YDRj9GO0YnQuNC5INGG0LXQvdGC
0YAxJDAiBgNVBAoMG9Ch0J/QsSDQk9Cj0J8g0KHQn9CxINCY0JDQpjEPMA0GA1UEAxMGQ0EgSUFD
MB4XDTExMDIwNzA2NDgwMFoXDTEyMDIwNzA2NTcwMFowgd8xGzAZBgkqhkiG9w0BCQEWDHRlc3RA
dGVzdC5ydTELMAkGA1UEBhMCUlUxJzAlBgNVBAceHgQhBDAEPQQ6BEIALQQfBDUEQgQ1BEAEMQRD
BEAEMzEnMCUGA1UECh4eBCEEHwQxACAEEwQjBB8AIAQhBB8EMQAgBBgEEAQmMRMwEQYDVQQLHgoE
HgRCBDQENQQ7MTMwMQYDVQQDHioEIgQ1BEEEQgQ+BDIESwQ5ACAEHwQ+BDsETAQ3BD4EMgQwBEIE
NQQ7BEwxFzAVBgNVBAweDgQYBD0ENgQ1BD0ENQRAMGMwHAYGKoUDAgITMBIGByqFAwICJAAGByqF
AwICHgEDQwAEQJ0RmfGzRyMirtjQpdenovL2kkHK2BbjaFkpCThZhYHtbQy3W7sn+OlZkpyt9m/B
yaQAaRU6zf76OmmOfYhKQgWjggGpMIIBpTAOBgNVHQ8BAf8EBAMCBPAwHQYDVR0lBBYwFAYIKwYB
BQUHAwQGCCsGAQUFBwMCMB0GA1UdDgQWBBRN4U6HPphczdfsViHNKh0Yz4F1vTAfBgNVHSMEGDAW
gBQsnTxGTLVOjku4cN5M9rGt7x5XSzCBxgYDVR0fBIG+MIG7MIG4oIG1oIGyhiFodHRwOi8vY2Eu
aWFjLnNwYi5ydS9jcmwvaWFjMi5jcmyGHmh0dHA6Ly9jYS5pYWMudXRzL2NybC9pYWMyLmNybIYr
aHR0cDovL3NlcnRzZXJ2ZXIuc21vbG55LnV0cy9jYWlhYy9pYWMyLmNybIYiZmlsZTovL2NlcnRz
ZXJ2ZXIvY2VydHNydi9pYWMyLmNybIYcaHR0cDovL2NhaWFjLnJ1L2NybC9pYWMyLmNybDBrBggr
BgEFBQcBAQRfMF0wLgYIKwYBBQUHMAKGImh0dHA6Ly9jYS5pYWMuc3BiLnJ1L2NlcnQvaWFjMi5j
ZXIwKwYIKwYBBQUHMAKGH2h0dHA6Ly9jYS5pYWMudXRzL2NlcnQvaWFjMi5jZXIwCgYGKoUDAgID
BQADQQAsWdPzrJCLrBVgXLe7Nn8tKkbEZfORUuOdEqZ3mgegf1thC6lTjKDK2NNiSPdQBWFLOOuT
gQMsq259NfKVuYkq</ds:X509Certificate>
                     </ds:X509Data>
                  </ds:KeyInfo>
                  <ds:SignedInfo>
                     <ds:CanonicalizationMethod Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
                     <ds:SignatureMethod Algorithm="http://www.w3.org/2001/04/xmldsig-more#gostr34102001-gostr3411"/>
                     <ds:Reference URI="#AppData">
                        <ds:Transforms>
                           <ds:Transform Algorithm="http://www.w3.org/2000/09/xmldsig#enveloped-signature"/>
                           <ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
                        </ds:Transforms>
                        <ds:DigestMethod Algorithm="http://www.w3.org/2001/04/xmldsig-more#gostr3411"/>
                        <ds:DigestValue>s2wDff9KvbbOnt/Nnn560MLhr0zUsF/RwdT7tIu2DBQ=</ds:DigestValue>
                     </ds:Reference>
                  </ds:SignedInfo>
                  <ds:SignatureValue>OzYtLfraE3pdoSXgm8fyESd1e5lXOmZV49673ym179zKKHe6N7b2ooIEdE3S5YDAH9lA0mOQ6YQW
9hiCO8dRKA==</ds:SignatureValue>
               </ds:Signature>
            </AppData>
         </MessageData>
      </ns1:idCard14Response>
   </soapenv:Body>
</soapenv:Envelope>`)
    
    },
        
}