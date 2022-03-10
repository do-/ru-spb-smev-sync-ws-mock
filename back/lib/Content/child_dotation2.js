module.exports = {

////////////////////////////////////////////////////////////////////////////////

select_child_dotation2:

    function () {
    
    	const {rq: {MessageData: {AppData: {info: {snils, startDate, endDate}}}}} = this
    	    	
    	let   dt    = new Date (('' + startDate).slice (0, 10)); if (isNaN (dt))    throw new Error ('Wrong startDate: ' + startDate)
    	const dt_to = new Date (('' + endDate).slice (0, 10));   if (isNaN (dt_to)) throw new Error ('Wrong endDate: '   + endDate)

    	if (dt > dt_to) throw new Error ('startDate > endDate: ' + startDate + ' > ' + endDate)
    	
    	let dotations = ''; while (dt < dt_to) {
    	
			const m = 1 + dt.getMonth ()

			dotations += `
                  <dotation>
                     <grantName>Ежемесячное пособие на детей от рождения до 1.5 лет (1-й ребенок) – абз. 2 части  1 ст. 5 Закона СПб от 24.11.2004г. № 587-80 «О социальной поддержке семей, имеющих детей, в Санкт-Петербурге»</grantName>
                     <properties>
                        <property>
                           <monthSum>${m}</monthSum>
                           <monthYear>${dt.getFullYear ()}</monthYear>
                           <grantSum>${(10000 * Math.random ()).toFixed (2).replace ('.', ',')}</grantSum>
                           <beneficiary>
                              <fNameCiv>ПАНКРАТОВА</fNameCiv>
                              <iNameCiv>ОЛЬГА</iNameCiv>
                              <mNameCiv>АЛЕКСАНДРОВНА</mNameCiv>
                              <docDatCiv>1978-03-04T00:00:00.000Z</docDatCiv>
                           </beneficiary>
                           <beneficiarySnils/>
                           <beneficiaryAddress>
                              <index>198320</index>
                              <reg>Санкт-Петербург</reg>
                              <town>Санкт-Петербург</town>
                              <street>КР СЕЛО НАРВСКАЯ УЛ.</street>
                              <house>6</house>
                              <flat>61</flat>
                           </beneficiaryAddress>
                        </property>
                     </properties>
                  </dotation>
			`

			dt.setMonth (m)

    	}

		return (
			`<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Header>
      <wsse:Security SOAP-ENV:actor="http://smev.gosuslugi.ru/actors/smev" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
         <wsse:BinarySecurityToken EncodingType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-soap-message-security-1.0#Base64Binary" ValueType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-token-profile-1.0#X509v3" wsu:Id="CertId-99737434A135BB59F113341422509213298" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">MIIFdTCCBSKgAwIBAgIKIe7vtwAAAAAljDAKBgYqhQMCAgMFADCBvDEcMBoGCSqGSIb3DQEJARYNY2FAaWFjLnNwYi5ydTELMAkGA1UEBhMCUlUxJjAkBgNVBAcMHdCh0LDQvdC60YIt0J/QtdGC0LXRgNCx0YPRgNCzMTAwLgYDVQQLDCfQo9C00L7RgdGC0L7QstC10YDRj9GO0YnQuNC5INGG0LXQvdGC0YAxJDAiBgNVBAoMG9Ch0J/QsSDQk9Cj0J8g0KHQn9CxINCY0JDQpjEPMA0GA1UEAxMGQ0EgSUFDMB4XDTEyMDMwNjEyMTcwMFoXDTEzMDMwNjEyMjYwMFowggIJMRgwFgYFKoUDZAETDTEwMzc4NDMwNDI5MDcxGDAWBggqhQMDgQMBARMKNzgxNTAwMDg3MDEhMB8GCSqGSIb3DQEJARYSYmVsa2luYUBpYWMuc3BiLnJ1MQswCQYDVQQGEwJSVTEnMCUGA1UEBx4eBCEEMAQ9BDoEQgAtBB8ENQRCBDUEQAQxBEMEQAQzMX0wewYDVQQLHnQEHgRCBDQENQQ7ACAEPwRABD4ENQQ6BEIEOARABD4EMgQwBD0EOARPACAEQQQ4BEEEQgQ1BDwAIAQ4BD0ERAQ+BEAEPAQwBEYEOAQ+BD0EPQQ+BDMEPgAgBDIENwQwBDgEPAQ+BDQENQQ5BEEEQgQyBDgETzErMCkGA1UEAx4iBCEEHwQxACAEEwQjBB8AIACrBCEEHwQxACAEGAQQBCYAuzFZMFcGA1UECR5QBCIEQAQwBD0EQQQ/BD4EQARCBD0ESwQ5ACAEPwQ1BEAALgAgBDQALgA2ACAEGwQ4BEIALgAgBBAAIAQ/BD4EPAAuACAANwQdACwAIAA4BB0xKTAnBgNVBAweIAQdBDAERwQwBDsETAQ9BDgEOgAgBD4EQgQ0BDUEOwQwMS8wLQYDVQQqHiYEHAQwBEAEOARPACAEEAQ7BDUEOgRBBDAEPQQ0BEAEPgQyBD0EMDEXMBUGA1UEBB4OBBEENQQ7BDoEOAQ9BDAwYzAcBgYqhQMCAhMwEgYHKoUDAgIkAAYHKoUDAgIeAQNDAARAOr8Uw0cf2ywAU4t89OguwDYP95ahq6lBUSLSj/NlNgtYRQBlUTkKfvX9Yac57xZW5nE740BeZ4GAvhQXx8pJ4KOCAbAwggGsMA4GA1UdDwEB/wQEAwIE8DAkBgNVHSUEHTAbBgYqhQNkAgIGByqFAwICIgYGCCsGAQUFBwMCMB0GA1UdDgQWBBS4N/XBDnBLMPlgykhz4MRwKazZQzAfBgNVHSMEGDAWgBQsnTxGTLVOjku4cN5M9rGt7x5XSzCBxgYDVR0fBIG+MIG7MIG4oIG1oIGyhiFodHRwOi8vY2EuaWFjLnNwYi5ydS9jcmwvaWFjMi5jcmyGHmh0dHA6Ly9jYS5pYWMudXRzL2NybC9pYWMyLmNybIYraHR0cDovL3NlcnRzZXJ2ZXIuc21vbG55LnV0cy9jYWlhYy9pYWMyLmNybIYiZmlsZTovL2NlcnRzZXJ2ZXIvY2VydHNydi9pYWMyLmNybIYcaHR0cDovL2NhaWFjLnJ1L2NybC9pYWMyLmNybDBrBggrBgEFBQcBAQRfMF0wLgYIKwYBBQUHMAKGImh0dHA6Ly9jYS5pYWMuc3BiLnJ1L2NlcnQvaWFjMi5jZXIwKwYIKwYBBQUHMAKGH2h0dHA6Ly9jYS5pYWMudXRzL2NlcnQvaWFjMi5jZXIwCgYGKoUDAgIDBQADQQDtB2+PeTfgcit0Q/eV53LZtL7gxd4G6GvM3wga2WPuc6YrH+7inGMLTlQBQgOfpyODe4PGzQtibuxki4mzj4tc</wsse:BinarySecurityToken>
         <ds:Signature Id="Signature-2199" xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
            <ds:SignedInfo>
               <ds:CanonicalizationMethod Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
               <ds:SignatureMethod Algorithm="http://www.w3.org/2001/04/xmldsig-more#gostr34102001-gostr3411"/>
               <ds:Reference URI="#id-2200">
                  <ds:Transforms>
                     <ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
                  </ds:Transforms>
                  <ds:DigestMethod Algorithm="http://www.w3.org/2001/04/xmldsig-more#gostr3411"/>
                  <ds:DigestValue>3K/6YoQj5/mnkNhCik2qwkEP8w5oDlbs3zt/uXuRnsU=</ds:DigestValue>
               </ds:Reference>
            </ds:SignedInfo>
            <ds:SignatureValue>srdB/OG4J6wIhsRR7AMpaYMY/mMZyYBr0BP6jU8mQuU4Il/RSSh3ZzMa3LMfmJgNmpPdyaTaykxs
9cp0kh/Y+Q==</ds:SignatureValue>
            <ds:KeyInfo Id="KeyId-99737434A135BB59F113341422509213299">
               <wsse:SecurityTokenReference wsu:Id="STRId-99737434A135BB59F113341422509213300" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
                  <wsse:Reference URI="#CertId-99737434A135BB59F113341422509213298" ValueType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-token-profile-1.0#X509v3"/>
               </wsse:SecurityTokenReference>
            </ds:KeyInfo>
         </ds:Signature>
      </wsse:Security>
   </SOAP-ENV:Header>
   <SOAP-ENV:Body wsu:Id="id-2200" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
      <ns1:childDotation2Response xmlns:ns1="http://smev.gosuslugi.ru/rev111111" xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
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
            <ns1:Date>2012-04-11T10:54:11.013Z</ns1:Date>
            <ns1:ExchangeType>1</ns1:ExchangeType>
            <ns1:ServiceCode>1</ns1:ServiceCode>
            <ns1:TestMsg>Тестовый запрос по методу getChildDotation2</ns1:TestMsg>
         </ns1:Message>
         <MessageData xmlns="http://smev.gosuslugi.ru/rev111111">
            <AppData Id="AppData">
               <info>
                  <person>
                     <fNameCiv>ПАНКРАТОВА</fNameCiv>
                     <iNameCiv>ОЛЬГА</iNameCiv>
                     <mNameCiv>АЛЕКСАНДРОВНА</mNameCiv>
                     <docDatCiv>1978-03-04T00:00:00.000Z</docDatCiv>
                  </person>
                  <snils>${snils}</snils>
                  <document>
                     <codeKind>01</codeKind>
                     <numDoc>150977</numDoc>
                     <seriesDoc>41 08</seriesDoc>
                     <dateDoc>2009-03-04T00:00:00.000Z</dateDoc>
                  </document>
                  <startDate>2011-06-01T00:00:00.000Z</startDate>
                  <endDate>2011-06-30T00:00:00.000Z</endDate>
                  <child>
                     <fNameCiv>ПАНКРАТОВА</fNameCiv>
                     <iNameCiv>БОГДАНА</iNameCiv>
                     <mNameCiv>МАКСИМОВНА</mNameCiv>
                     <docDatCiv>2010-02-01T00:00:00.000Z</docDatCiv>
                  </child>
                  <childDocument>
                     <codeKind>03</codeKind>
                     <numDoc>777630</numDoc>
                     <seriesDoc>II-АК</seriesDoc>
                     <dateDoc>2010-03-02T00:00:00.000Z</dateDoc>
                     <issuedBy>ЗАГС КРАСНОСЕЛЬСКИЙ РН</issuedBy>
                  </childDocument>
                  <childSnils/>
                  <handlingCode>0</handlingCode>
               </info>
               <dotations>${dotations}</dotations>
               <Signature xmlns="http://www.w3.org/2000/09/xmldsig#">
                  <KeyInfo>
                     <X509Data>
                        <X509Certificate>MIIEQzCCA/CgAwIBAgIKGx590AAAAAAO9jAKBgYqhQMCAgMFADCBvDEcMBoGCSqGSIb3DQEJARYN
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
gQMsq259NfKVuYkq</X509Certificate>
                     </X509Data>
                  </KeyInfo>
                  <SignedInfo>
                     <CanonicalizationMethod Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
                     <SignatureMethod Algorithm="http://www.w3.org/2001/04/xmldsig-more#gostr34102001-gostr3411"/>
                     <Reference URI="#AppData">
                        <Transforms>
                           <Transform Algorithm="http://www.w3.org/2000/09/xmldsig#enveloped-signature"/>
                           <Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
                        </Transforms>
                        <DigestMethod Algorithm="http://www.w3.org/2001/04/xmldsig-more#gostr3411"/>
                        <DigestValue>s2wDff9KvbbOnt/Nnn560MLhr0zUsF/RwdT7tIu2DBQ=</DigestValue>
                     </Reference>
                  </SignedInfo>
                  <SignatureValue>DdUtepV40G4wRGyTKX4jhwIrSlrGH08ht1ZcxMIv4Af6NX9R6RYh7R8U1F0FY+1E+4WFJVB2SG1q
LfBoCGr3Gg==</SignatureValue>
               </Signature>
            </AppData>
         </MessageData>
      </ns1:childDotation2Response>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`)
    
    },
        
}