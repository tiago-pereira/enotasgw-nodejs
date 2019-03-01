# eNotas Gateway NodeJS

Client JavaScript para integração com API do [eNotas Gateway](https://enotasgw.com.br), plataforma de emissâo automática de nota fiscal eletrônica de serviço (NFS-e), Produto (NF-e) e Consumidor (NFC-e).

**Atenção: Esta biblioteca deve ser utilizada para a emissão de NFS-e (Nota fiscal de Serviço)**

## Utilização

	$ npm i enotasgw-node

```javascript
const eNotas = require("enotasgw-node");
const eNotasClient = new eNotas('SUA-API-KEY');

eNotasClient.nfe.listar('ID-EMPRESA', 0, 25) // eNotasClient.nfe.listar(idEmpresa, numeroPagina, tamanhoPagina)
		.then((invoices: any) => {
			console.log(invoices);
		})
		.catch((err: any) => {
			console.error(err);
			return;
		});

```

## Versão
### 1.1.0
- NFE - (10/11) 90%
  - [x] listar (Recupera uma lista de Notas Fiscais por um critério de pesquisa)
  - [ ] consultarPorPeriodo (Consulta notas fiscais emitidas em um determinado período)
  - [x] emitir (Emite uma Nota Fiscal)
  - [x] cancelar (Cancela uma Nota Fiscal)
  - [x] consultar (Recupera informações da Nota Fiscal pelo seu Identificado único)
  - [x] cancelarPorIdExterno (Cancela uma Nota Fiscal identificada pelo seu ID Externo)
  - [x] consultarPorIdExterno (Recupera informações da Nota Fiscal pelo seu Identificador externo)
  - [x] downloadPdf (Download do PDF de impressão da Nota Fiscal identificada pelo seu Identificador único)
  - [x] downloadPdfPorIdExterno (Download do PDF de impressão da Nota Fiscal identificada pelo seu identificador externo)
  - [x] downloadXml (Download do XML da Nota Fiscal identificada pelo seu Identificador único)
  - [x] downloadXmlPorIdExterno (Download do XML da Nota Fiscal identificada pelo seu Identificador externo)

- EMPRESA - (5/5) 100%
  - [x] listar (Recupera uma lista de empresas por um critério de pesquisa)
  - [x] salvar (Insere ou atualiza uma empresa (CNPJ Emissor))
  - [x] atualizarCertificado (Vincula um certificado digital a empresa)
  - [x] logo (Vincula um logotipo a empresa)
  - [x] consultar (Recupera informações de uma Empresa (CNPJ Emissor))

- PREFEITURA - (1/1) 100%
  - [x] consultar (Consulta as características de uma determinada prefeitura)

- SERVICOSMUNICIPAIS - (1/1) 100%
  - [x] consultar (Consulta serviços municipais que podem ser utilizados para emissão de NFS-e nesta prefeitura)


## Documentação

 - [Doc nodejs-enotasgw](https://htmlpreview.github.io/?https://github.com/wellingtonsilverio/nodejs-enotasgw/blob/master/doc/global.html)
 - [Doc oficial](https://docs.enotasgw.com.br/docs)
 - [No repositório do client php](https://github.com/eNotasGW/php-client/blob/master/README.md)

 ## Créditos

  - [wellingtonsilverio](https://github.com/wellingtonsilverio)
