module.exports = {

////////////////////////////////////////////////////////////////////////////////

select_get_form9_sync:

    function () {
        
//    	const {} = this.rq.request
            	    
		return `<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
   <s:Header>
      <wsse:Security s:actor="http://smev.gosuslugi.ru/actors/recipient" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
         <wsse:BinarySecurityToken EncodingType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-soap-message-security-1.0#Base64Binary" ValueType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-token-profile-1.0#X509v3" wsu:Id="CertId-96D377E1597B8876A213637873710752616301" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">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</wsse:BinarySecurityToken>
         <ds:Signature Id="Signature-1251955" xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
            <ds:SignedInfo>
               <ds:CanonicalizationMethod Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
               <ds:SignatureMethod Algorithm="http://www.w3.org/2001/04/xmldsig-more#gostr34102001-gostr3411"/>
               <ds:Reference URI="#_2">
                  <ds:Transforms>
                     <ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
                  </ds:Transforms>
                  <ds:DigestMethod Algorithm="http://www.w3.org/2001/04/xmldsig-more#gostr3411"/>
                  <ds:DigestValue>zvDFtG7VRO82iXdNUprZpzA7Gew6MV/a4+8ezqcLEvc=</ds:DigestValue>
               </ds:Reference>
               <ds:Reference URI="#id-1251956">
                  <ds:Transforms>
                     <ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
                  </ds:Transforms>
                  <ds:DigestMethod Algorithm="http://www.w3.org/2001/04/xmldsig-more#gostr3411"/>
                  <ds:DigestValue>cmAYZcqZAxTl/LQFKzY8xMICC+jYQEOUFmA3pfn6Bu8=</ds:DigestValue>
               </ds:Reference>
            </ds:SignedInfo>
            <ds:SignatureValue>Z9szoOtEkiwMYqONmoSqHOs/nWnjjy5mi7HkHV5x6uDkiHotfL0sxznRCOGHbZgZeXdPhMYV5tN3
NTBEHBoIrg==</ds:SignatureValue>
            <ds:KeyInfo Id="KeyId-96D377E1597B8876A213637873710752616302">
               <wsse:SecurityTokenReference wsu:Id="STRId-96D377E1597B8876A213637873710752616303" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
                  <wsse:Reference URI="#CertId-96D377E1597B8876A213637873710752616301" ValueType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-token-profile-1.0#X509v3"/>
               </wsse:SecurityTokenReference>
            </ds:KeyInfo>
         </ds:Signature>
      </wsse:Security>
      <o:Security s:actor="http://smev.gosuslugi.ru/actors/smev" s:mustUnderstand="1" xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
         <o:BinarySecurityToken EncodingType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-soap-message-security-1.0#Base64Binary" ValueType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-token-profile-1.0#X509v3" u:Id="uuid-c2ed69a2-67d8-4ce2-a295-14419966cf6e-126">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</o:BinarySecurityToken>
         <Signature xmlns="http://www.w3.org/2000/09/xmldsig#">
            <SignedInfo>
               <CanonicalizationMethod Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
               <SignatureMethod Algorithm="http://www.w3.org/2001/04/xmldsig-more#gostr34102001-gostr3411"/>
               <Reference URI="#_2">
                  <Transforms>
                     <Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
                  </Transforms>
                  <DigestMethod Algorithm="http://www.w3.org/2001/04/xmldsig-more#gostr3411"/>
                  <DigestValue>zvDFtG7VRO82iXdNUprZpzA7Gew6MV/a4+8ezqcLEvc=</DigestValue>
               </Reference>
            </SignedInfo>
            <SignatureValue>j8w3O0l9kJ5YCIZ96HfOlFXtTfdJ9+qlPgFT7cymPiMnY3ZL657PKP+bAuyWn7Z4EFVg7a3C+QvxI/L6DIx6hw==</SignatureValue>
            <KeyInfo>
               <o:SecurityTokenReference>
                  <o:Reference URI="#uuid-c2ed69a2-67d8-4ce2-a295-14419966cf6e-126" ValueType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-token-profile-1.0#X509v3"/>
               </o:SecurityTokenReference>
            </KeyInfo>
         </Signature>
      </o:Security>
      <smev:Header actor="http://smev.gosuslugi.ru/actors/recipient" u:Id="id-1251956" xmlns:smev="http://smev.gosuslugi.ru/rev111111">
         <smev:NodeId>78</smev:NodeId>
         <smev:MessageId>0BB38137-4B58-4EE0-9281-6FB4183C64BD</smev:MessageId>
         <smev:TimeStamp>2013-03-20T16:49:31.4931+03:00</smev:TimeStamp>
         <smev:MessageClass>RESPONSE</smev:MessageClass>
      </smev:Header>
   </s:Header>
   <s:Body u:Id="_2">
      <GetForm9SyncResponse xmlns="http://tempuri.org/">
         <GetForm9SyncResult xmlns:a="http://schemas.datacontract.org/2004/07/GetForm9Sync" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
<!--
         <GetForm9SyncResult xmlns:a="http://schemas.datacontract.org/2004/07/GetForm9ASync" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
-->
            <a:Document>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</a:Document>
            <a:Status>
               <a:Code>1</a:Code>
               <a:Name>Запрос успешно обработан</a:Name>
            </a:Status>
         </GetForm9SyncResult>
      </GetForm9SyncResponse>
   </s:Body>
</s:Envelope>`
   
    },
        
}