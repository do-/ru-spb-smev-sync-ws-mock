module.exports = {

////////////////////////////////////////////////////////////////////////////////

select_works:

    function () {
        
    	const {FIO, DATE_BORTH, DATE_BEG, DATE_END} = this.rq.request 

		return `<s:Envelope
    xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
    <s:Header>
        <wsse:Security s:actor="http://smev.gosuslugi.ru/actors/recipient"
            xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
            <wsse:BinarySecurityToken EncodingType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-soap-message-security-1.0#Base64Binary" ValueType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-token-profile-1.0#X509v3" wsu:Id="CertId-A1742F169FC32E9A771348130444845683437"
                xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">MIIFdTCCBSKgAwIBAgIKIe7vtwAAAAAljDAKBgYqhQMCAgMFADCBvDEcMBoGCSqGSIb3DQEJARYNY2FAaWFjLnNwYi5ydTELMAkGA1UEBhMCUlUxJjAkBgNVBAcMHdCh0LDQvdC60YIt0J/QtdGC0LXRgNCx0YPRgNCzMTAwLgYDVQQLDCfQo9C00L7RgdGC0L7QstC10YDRj9GO0YnQuNC5INGG0LXQvdGC0YAxJDAiBgNVBAoMG9Ch0J/QsSDQk9Cj0J8g0KHQn9CxINCY0JDQpjEPMA0GA1UEAxMGQ0EgSUFDMB4XDTEyMDMwNjEyMTcwMFoXDTEzMDMwNjEyMjYwMFowggIJMRgwFgYFKoUDZAETDTEwMzc4NDMwNDI5MDcxGDAWBggqhQMDgQMBARMKNzgxNTAwMDg3MDEhMB8GCSqGSIb3DQEJARYSYmVsa2luYUBpYWMuc3BiLnJ1MQswCQYDVQQGEwJSVTEnMCUGA1UEBx4eBCEEMAQ9BDoEQgAtBB8ENQRCBDUEQAQxBEMEQAQzMX0wewYDVQQLHnQEHgRCBDQENQQ7ACAEPwRABD4ENQQ6BEIEOARABD4EMgQwBD0EOARPACAEQQQ4BEEEQgQ1BDwAIAQ4BD0ERAQ+BEAEPAQwBEYEOAQ+BD0EPQQ+BDMEPgAgBDIENwQwBDgEPAQ+BDQENQQ5BEEEQgQyBDgETzErMCkGA1UEAx4iBCEEHwQxACAEEwQjBB8AIACrBCEEHwQxACAEGAQQBCYAuzFZMFcGA1UECR5QBCIEQAQwBD0EQQQ/BD4EQARCBD0ESwQ5ACAEPwQ1BEAALgAgBDQALgA2ACAEGwQ4BEIALgAgBBAAIAQ/BD4EPAAuACAANwQdACwAIAA4BB0xKTAnBgNVBAweIAQdBDAERwQwBDsETAQ9BDgEOgAgBD4EQgQ0BDUEOwQwMS8wLQYDVQQqHiYEHAQwBEAEOARPACAEEAQ7BDUEOgRBBDAEPQQ0BEAEPgQyBD0EMDEXMBUGA1UEBB4OBBEENQQ7BDoEOAQ9BDAwYzAcBgYqhQMCAhMwEgYHKoUDAgIkAAYHKoUDAgIeAQNDAARAOr8Uw0cf2ywAU4t89OguwDYP95ahq6lBUSLSj/NlNgtYRQBlUTkKfvX9Yac57xZW5nE740BeZ4GAvhQXx8pJ4KOCAbAwggGsMA4GA1UdDwEB/wQEAwIE8DAkBgNVHSUEHTAbBgYqhQNkAgIGByqFAwICIgYGCCsGAQUFBwMCMB0GA1UdDgQWBBS4N/XBDnBLMPlgykhz4MRwKazZQzAfBgNVHSMEGDAWgBQsnTxGTLVOjku4cN5M9rGt7x5XSzCBxgYDVR0fBIG+MIG7MIG4oIG1oIGyhiFodHRwOi8vY2EuaWFjLnNwYi5ydS9jcmwvaWFjMi5jcmyGHmh0dHA6Ly9jYS5pYWMudXRzL2NybC9pYWMyLmNybIYraHR0cDovL3NlcnRzZXJ2ZXIuc21vbG55LnV0cy9jYWlhYy9pYWMyLmNybIYiZmlsZTovL2NlcnRzZXJ2ZXIvY2VydHNydi9pYWMyLmNybIYcaHR0cDovL2NhaWFjLnJ1L2NybC9pYWMyLmNybDBrBggrBgEFBQcBAQRfMF0wLgYIKwYBBQUHMAKGImh0dHA6Ly9jYS5pYWMuc3BiLnJ1L2NlcnQvaWFjMi5jZXIwKwYIKwYBBQUHMAKGH2h0dHA6Ly9jYS5pYWMudXRzL2NlcnQvaWFjMi5jZXIwCgYGKoUDAgIDBQADQQDtB2+PeTfgcit0Q/eV53LZtL7gxd4G6GvM3wga2WPuc6YrH+7inGMLTlQBQgOfpyODe4PGzQtibuxki4mzj4tc
            </wsse:BinarySecurityToken>
            <ds:Signature Id="Signature-419393"
                xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
                <ds:SignedInfo>
                    <ds:CanonicalizationMethod Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
                    <ds:SignatureMethod Algorithm="http://www.w3.org/2001/04/xmldsig-more#gostr34102001-gostr3411"/>
                    <ds:Reference URI="#id-419394">
                        <ds:Transforms>
                            <ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
                        </ds:Transforms>
                        <ds:DigestMethod Algorithm="http://www.w3.org/2001/04/xmldsig-more#gostr3411"/>
                        <ds:DigestValue>UWJUj+n6uES3VN6Dq0C9EMq0qZkTT/IkKRHArjbmHQg=</ds:DigestValue>
                    </ds:Reference>
                    <ds:Reference URI="#id-419395">
                        <ds:Transforms>
                            <ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
                        </ds:Transforms>
                        <ds:DigestMethod Algorithm="http://www.w3.org/2001/04/xmldsig-more#gostr3411"/>
                        <ds:DigestValue>SMErDu6aM2UNB+q2k6Yw6gWWPlyaowqvLRUooRDW+Ns=</ds:DigestValue>
                    </ds:Reference>
                </ds:SignedInfo>
                <ds:SignatureValue>bxFsZXI4Vwa/8moxuoLRNO8qIqn3b3n8lAQ0SLv1LglKuzWRautE6ko7AVYjvTi4OH1wrZ03w9pT
0he47UxPlg==</ds:SignatureValue>
                <ds:KeyInfo Id="KeyId-A1742F169FC32E9A771348130444845683438">
                    <wsse:SecurityTokenReference wsu:Id="STRId-A1742F169FC32E9A771348130444845683439"
                        xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
                        <wsse:Reference URI="#CertId-A1742F169FC32E9A771348130444845683437" ValueType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-token-profile-1.0#X509v3"/>
                    </wsse:SecurityTokenReference>
                </ds:KeyInfo>
            </ds:Signature>
        </wsse:Security>
        <smev:Header actor="http://smev.gosuslugi.ru/actors/recipient" wsu:Id="id-419395"
            xmlns:smev="http://smev.gosuslugi.ru/rev111111"
            xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
            <smev:NodeId>78</smev:NodeId>
            <smev:MessageId>2AB49756-8F8F-44AF-B668-5EB9B237D2CF</smev:MessageId>
            <smev:TimeStamp>2012-09-20T12:40:44.4044+04:00</smev:TimeStamp>
            <smev:MessageClass>RESPONSE</smev:MessageClass>
        </smev:Header>
    </s:Header>
    <s:Body wsu:Id="id-419394"
        xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
        <WorksResponse
            xmlns="http://gosuslugi.rspb.ru/periodsservice">
            <WorksResult>
                <PERIOD_ISFIND
                    xmlns="">true
                </PERIOD_ISFIND>
                <PERIOD_ROOT_e
                    xmlns="">
                    <name>${FIO}</name>
                    <borth>${DATE_BORTH}</borth>
                    <datebeg>${DATE_BEG}</datebeg>
                    <dateend>${DATE_END}</dateend>
                </PERIOD_ROOT_e>
                <PERIOD_BODY_e
                    xmlns="">
                    <kpy>1700064398</kpy>
                    <name>${FIO}</name>
                    <adress>ЧЕРНЯХОВСКОГО УЛ дом 51 кв 25</adress>
                    <pase>Паспорт Cерия 40 05  N 883742</pase>
                    <orgname>Санкт-Петербургское государственное казенное учреждение "Центр занятости населения Центрального района Санкт-Петербурга"</orgname>
                    <PERIOD_SUMS_e>
                        <datebeg>2012-01-10</datebeg>
                        <dateend>2012-04-09</dateend>
                    </PERIOD_SUMS_e>
                </PERIOD_BODY_e>
                <PERIOD_BODY_e
                    xmlns="">
                    <kpy>1700065039</kpy>
                    <name>${FIO}</name>
                    <adress>ЧЕРНЯХОВСКОГО УЛ дом 51 кв 25</adress>
                    <pase>Паспорт Cерия 40 05  N 883742</pase>
                    <orgname>Санкт-Петербургское государственное казенное учреждение "Центр занятости населения Центрального района Санкт-Петербурга"</orgname>
                    <PERIOD_SUMS_e>
                        <datebeg>2012-05-28</datebeg>
                        <dateend>2012-08-27</dateend>
                    </PERIOD_SUMS_e>
                </PERIOD_BODY_e>
            </WorksResult>
        </WorksResponse>
    </s:Body>
</s:Envelope>`
   
    },
        
}