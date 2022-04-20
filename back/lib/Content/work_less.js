module.exports = {

////////////////////////////////////////////////////////////////////////////////

select_work_less:

    function () {
        
    	const {FIO, DATE_BORTH} = this.rq.request
            	    
		return `<?xml version="1.0" encoding="UTF-8"?>
<s:Envelope
    xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
    <s:Header>
        <wsse:Security
            xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" s:actor="http://smev.gosuslugi.ru/actors/smev">
            <wsse:BinarySecurityToken
                xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" EncodingType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-soap-message-security-1.0#Base64Binary" ValueType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-token-profile-1.0#X509v3" wsu:Id="CertId-4A6D88BBCF93B62C0F1355300839373175"
                xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">MIIFdTCCBSKgAwIBAgIKIe7vtwAAAAAljDAKBgYqhQMCAgMFADCBvDEcMBoGCSqGSIb3DQEJARYNY2FAaWFjLnNwYi5ydTELMAkGA1UEBhMCUlUxJjAkBgNVBAcMHdCh0LDQvdC60YIt0J/QtdGC0LXRgNCx0YPRgNCzMTAwLgYDVQQLDCfQo9C00L7RgdGC0L7QstC10YDRj9GO0YnQuNC5INGG0LXQvdGC0YAxJDAiBgNVBAoMG9Ch0J/QsSDQk9Cj0J8g0KHQn9CxINCY0JDQpjEPMA0GA1UEAxMGQ0EgSUFDMB4XDTEyMDMwNjEyMTcwMFoXDTEzMDMwNjEyMjYwMFowggIJMRgwFgYFKoUDZAETDTEwMzc4NDMwNDI5MDcxGDAWBggqhQMDgQMBARMKNzgxNTAwMDg3MDEhMB8GCSqGSIb3DQEJARYSYmVsa2luYUBpYWMuc3BiLnJ1MQswCQYDVQQGEwJSVTEnMCUGA1UEBx4eBCEEMAQ9BDoEQgAtBB8ENQRCBDUEQAQxBEMEQAQzMX0wewYDVQQLHnQEHgRCBDQENQQ7ACAEPwRABD4ENQQ6BEIEOARABD4EMgQwBD0EOARPACAEQQQ4BEEEQgQ1BDwAIAQ4BD0ERAQ+BEAEPAQwBEYEOAQ+BD0EPQQ+BDMEPgAgBDIENwQwBDgEPAQ+BDQENQQ5BEEEQgQyBDgETzErMCkGA1UEAx4iBCEEHwQxACAEEwQjBB8AIACrBCEEHwQxACAEGAQQBCYAuzFZMFcGA1UECR5QBCIEQAQwBD0EQQQ/BD4EQARCBD0ESwQ5ACAEPwQ1BEAALgAgBDQALgA2ACAEGwQ4BEIALgAgBBAAIAQ/BD4EPAAuACAANwQdACwAIAA4BB0xKTAnBgNVBAweIAQdBDAERwQwBDsETAQ9BDgEOgAgBD4EQgQ0BDUEOwQwMS8wLQYDVQQqHiYEHAQwBEAEOARPACAEEAQ7BDUEOgRBBDAEPQQ0BEAEPgQyBD0EMDEXMBUGA1UEBB4OBBEENQQ7BDoEOAQ9BDAwYzAcBgYqhQMCAhMwEgYHKoUDAgIkAAYHKoUDAgIeAQNDAARAOr8Uw0cf2ywAU4t89OguwDYP95ahq6lBUSLSj/NlNgtYRQBlUTkKfvX9Yac57xZW5nE740BeZ4GAvhQXx8pJ4KOCAbAwggGsMA4GA1UdDwEB/wQEAwIE8DAkBgNVHSUEHTAbBgYqhQNkAgIGByqFAwICIgYGCCsGAQUFBwMCMB0GA1UdDgQWBBS4N/XBDnBLMPlgykhz4MRwKazZQzAfBgNVHSMEGDAWgBQsnTxGTLVOjku4cN5M9rGt7x5XSzCBxgYDVR0fBIG+MIG7MIG4oIG1oIGyhiFodHRwOi8vY2EuaWFjLnNwYi5ydS9jcmwvaWFjMi5jcmyGHmh0dHA6Ly9jYS5pYWMudXRzL2NybC9pYWMyLmNybIYraHR0cDovL3NlcnRzZXJ2ZXIuc21vbG55LnV0cy9jYWlhYy9pYWMyLmNybIYiZmlsZTovL2NlcnRzZXJ2ZXIvY2VydHNydi9pYWMyLmNybIYcaHR0cDovL2NhaWFjLnJ1L2NybC9pYWMyLmNybDBrBggrBgEFBQcBAQRfMF0wLgYIKwYBBQUHMAKGImh0dHA6Ly9jYS5pYWMuc3BiLnJ1L2NlcnQvaWFjMi5jZXIwKwYIKwYBBQUHMAKGH2h0dHA6Ly9jYS5pYWMudXRzL2NlcnQvaWFjMi5jZXIwCgYGKoUDAgIDBQADQQDtB2+PeTfgcit0Q/eV53LZtL7gxd4G6GvM3wga2WPuc6YrH+7inGMLTlQBQgOfpyODe4PGzQtibuxki4mzj4tc
            </wsse:BinarySecurityToken>
            <ds:Signature
                xmlns:ds="http://www.w3.org/2000/09/xmldsig#" Id="Signature-74">
                <ds:SignedInfo>
                    <ds:CanonicalizationMethod Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
                    <ds:SignatureMethod Algorithm="http://www.w3.org/2001/04/xmldsig-more#gostr34102001-gostr3411"/>
                    <ds:Reference URI="#id-75">
                        <ds:Transforms>
                            <ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
                        </ds:Transforms>
                        <ds:DigestMethod Algorithm="http://www.w3.org/2001/04/xmldsig-more#gostr3411"/>
                        <ds:DigestValue>vNXk7i01OZk5ZlJL0sRWU7w7KiLJYzClVpyKA63Amtk=</ds:DigestValue>
                    </ds:Reference>
                </ds:SignedInfo>
                <ds:SignatureValue>
fkc980e0bSzLT/GWlYK1JfifJQiDYbERH9qyHa0pZccyFDXoVv99O4jbN5tr237YIAa5ioBP99HQ
srcCH6nTKA==
</ds:SignatureValue>
                <ds:KeyInfo Id="KeyId-4A6D88BBCF93B62C0F1355300839373176">
                    <wsse:SecurityTokenReference
                        xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" wsu:Id="STRId-4A6D88BBCF93B62C0F1355300839373177"
                        xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
                        <wsse:Reference URI="#CertId-4A6D88BBCF93B62C0F1355300839373175" ValueType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-token-profile-1.0#X509v3"
                            xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"/>
                        </wsse:SecurityTokenReference>
                    </ds:KeyInfo>
                </ds:Signature>
            </wsse:Security>
        </s:Header>
        <s:Body
            xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" wsu:Id="id-75">
            <WorkLessResponse
                xmlns="http://gosuslugi.rspb.ru/periodsservice">
                <WorkLessResult>
                    <PERIOD_ISFIND
                        xmlns="">false</PERIOD_ISFIND>
<!--                        
                    <PERIOD_ROOT_e
                        xmlns="">
                        <name>${FIO}</name>
                        <borth>${DATE_BORTH}</borth>
                        <datebeg>2012-01-01</datebeg>
                        <dateend>2012-10-30</dateend>
                    </PERIOD_ROOT_e>
                    <PERIOD_BODY_e
                        xmlns="">
                        <kpy>500092411</kpy>
                        <name>${FIO}</name>
                        <adress>ВЕРНОСТИ УЛ дом 42 кв 130</adress>
                        <pase>Паспорт Cерия 40 04  N 433621</pase>
                        <orgname>Санкт-Петербургское государственное казенное учреждение "Центр занятости населения Калининского района Санкт-Петербурга"</orgname>
                        <PERIOD_SUMS_e>
                            <datebeg>2012-02-15</datebeg>
                            <dateend>2012-04-04</dateend>
                        </PERIOD_SUMS_e>
                    </PERIOD_BODY_e>
-->                    
                </WorkLessResult>
            </WorkLessResponse>
        </s:Body>
    </s:Envelope>`
   
    },
        
}