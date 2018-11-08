# eNotas GW NodeJS

Client JavaScript para integração com API do [eNotas Gateway](https://enotas.com.br/?ref=S8182429W&hsrc=YWR3b3Jkc2Vub3Rhcw%3D%3D), plataforma de emissâo automática de nota fiscal eletrônica de serviço (NFS-e), Produto (NF-e) e Consumidor (NFC-e).

Atenção: Esta biblioteca deve ser utilizada para a emissão de NFS-e (Nota fiscal de Serviço)

## Utilização

	$ npm i enotasgw-node

```javascript
const eNotas = require("enotasgw-node");
const eNotasClient = new eNotas('SUA-API-KEY');

eNotasClient.empresa.consultar('130E5483-6C37-4A36-8DA6-1020AB8D0201')
  .then(res => console.log(res))
  .catch(err => console.log(err));

```

## Documentação

[No repositório do client php](https://github.com/eNotasGW/php-client/blob/master/README.md)