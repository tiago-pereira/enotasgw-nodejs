const PREFIX = "/empresas";

/** Classe da NFE de Empresa. */
module.exports = class NFE {
  
  constructor(httpClient) {
    this.client = httpClient;
  }

  /**
   * Recupera uma lista de Notas Fiscais por um critério de pesquisa
   * 
   * @method GET
   * @param {string} empresaId Identificador único da Empresa relacionada a Nota Fiscal que deseja emitir.
   * @param {integer} pageNumber Número da página, sendo 0 o número da primeira página.
   * @param {integer} pageSize Total de itens a serem retornados por página.
   * @param {string} filtro (default: status Autorizada) Identificador Filtro para realização da pesquisa. Exemplo de filtro: status eq 'Autorizada'.
   * @param {string} ordernarPor (opcional) Campo no qual será aplicado a ordenação.
   * @param {string} direcao (opcional) Direção na qual será feita a ordenação.
   * @return {mixed} Retorna uma lista de Notas Fiscais encontradas pelo critério de pesquisa e paginação definidos.
   */
  listar(idEmpresa, numeroPagina, tamanhoPagina, filtro = "status eq 'Autorizada'", ordernarPor = null, direcao = null) {
    if(ordernarPor == null || direcao == null)
      return this.client.get(`${PREFIX}/${idEmpresa}/nfes?pageNumber=${numeroPagina}&pageSize=${tamanhoPagina}&filter=${filtro}`);
    else
      return this.client.get(`${PREFIX}/${idEmpresa}/nfes?pageNumber=${numeroPagina}&pageSize=${tamanhoPagina}&filter=${filtro}&sortBy=${ordernarPor}&sortDirection=${direcao}`);
  }
  
  /**
   * Consulta notas fiscais emitidas em um determinado período
   * 
   * @method GET
   * @param {string} idEmpresa id da empresa para a qual a nota será emitida
   * @param {int} pageNumber numero da página no qual a pesquisa será feita
   * @param {int} pageSize quantidade de registros por página
   * @param {string} dataInicial data inicial para pesquisa
   * @param {string} dataFinal data final para pesquisa
   * @return {mixed} listaNFe retorna uma lista contendo os registros encontrados na pesquisa
   */
  consultarPorPeriodo(idEmpresa, numeroPagina, tamanhoPagina, dataInicial, dataFinal) {
    // TODO 
  }

  /**
   * Emite uma Nota Fiscal
   * 
   * @method POST
   * @param {string} empresaId Identificador único da Empresa relacionada a Nota Fiscal que deseja emitir.
   * @param {mixed} dadosNFe Dados da Nota Fiscal que deseja emitir.
   * @return {string} nfeId Será retornado o identificador único da nota fiscal.
   */
  emitir(idEmpresa, dadosNFe) {
    return this.client.post(`${PREFIX}/${idEmpresa}/nfes`, dadosNFe);
  }

  /**
   * Cancela uma Nota Fiscal
   * 
   * @method DELETE
   * @param {string} empresaId Identificador único da Empresa relacionada a Nota Fiscal que deseja requisitar.
   * @param {string} nfeId Identificador único da Nota Fiscal que deseja requisitar.
   */
   cancelar(idEmpresa, nfeId) {
    return this.client.delete(`${PREFIX}/${idEmpresa}/nfes/${nfeId}`);
  }

  /**
   * Recupera informações da Nota Fiscal pelo seu Identificado único
   * @method GET
   * @param {string} empresaId Identificador único da Empresa relacionada a Nota Fiscal que deseja requisitar.
   * @param {string} nfeId Identificador único da Nota Fiscal que deseja requisitar.
   */
  consultar(idEmpresa, nfeId) {
    return this.client.get(`${PREFIX}/${idEmpresa}/nfes/${nfeId}`);
  }

  /**
   * Cancela uma Nota Fiscal identificada pelo seu ID Externo
   * 
   * @method DELETE
   * @param {string} empresaId Identificador único da Empresa relacionada a Nota Fiscal que deseja requisitar.
   * @param {string} idExterno Identificador único da Nota Fiscal que deseja requisitar.
   */
  cancelarPorIdExterno(idEmpresa, idExterno) {
    return this.client.delete(`${PREFIX}/${idEmpresa}/nfes/porIdExterno/${idExterno}`);
  }

  /**
   * Recupera informações da Nota Fiscal pelo seu Identificador externo
   * 
   * @method GET
   * @param {string} empresaId id da empresa para a qual a nota será emitida
   * @param {string} idExterno id da empresa para a qual a nota será emitida
   * @return {mixed} O retorno inclui os dados da Nota Fiscal requisitada.
   */
  consultarPorIdExterno(idEmpresa, idExterno) {
    return this.client.get(`${PREFIX}/${idEmpresa}/nfes/porIdExterno/${idExterno}`);
  }

  /**
   * Download do PDF de impressão da Nota Fiscal identificada pelo seu Identificador único
   * 
   * @method GET
   * @param {string} empresaId Identificador único da Empresa relacionada a Nota Fiscal que deseja inserir.
   * @param {string} nfeId Identificador único da Nota Fiscal que deseja requisitar.
   * @return {bytes} O retorno inclui os bytes do PDF da Nota Fiscal requisitada.
   */
  downloadPdf(idEmpresa, nfeId) {
    return this.client.get(`${PREFIX}/${idEmpresa}/nfes/${nfeId}/pdf`);
  }

  /**
   * Download do PDF de impressão da Nota Fiscal identificada pelo seu identificador externo
   * 
   * @method GET
   * @param {string} empresaId Identificador único da Empresa relacionada a Nota Fiscal que deseja inserir.
   * @param {string} nfeId Identificador único da Nota Fiscal que deseja requisitar.
   * @return {bytes} O retorno inclui os bytes do PDF da Nota Fiscal requisitada.
   */
  downloadPdfPorIdExterno(idEmpresa, idExterno){
    return this.client.get(`${PREFIX}/${idEmpresa}/nfes/porIdExterno/${idExterno}/pdf`);
  }

  /**
   * Download do XML da Nota Fiscal identificada pelo seu Identificador único
   * 
   * @method GET
   * @param {string} empresaId Identificador único da Empresa relacionada a Nota Fiscal que deseja requisitar.
   * @param {string} nfeId Identificador único da Nota Fiscal que deseja requisitar.
   * @return {string} retorno inclui uma string com o conteúdo XML da Nota Fiscal requisitada.
   */
  downloadXml(idEmpresa, nfeId){
    return this.client.get(`${PREFIX}/${idEmpresa}/nfes/${nfeId}/xml`);
  }

  /**
   * Download do XML da Nota Fiscal identificada pelo seu Identificador externo
   * 
   * @method GET
   * @param {string} empresaId Identificador único da Empresa relacionada a Nota Fiscal que deseja inserir.
   * @param {string} nfeId Identificador único da Nota Fiscal que deseja requisitar.
   * @return {string} retorno inclui uma string com o conteúdo XML da Nota Fiscal requisitada.
   */
  downloadXmlPorIdExterno(idEmpresa, idExterno){
    return this.client.get(`${PREFIX}/${idEmpresa}/nfes/porIdExterno/${idExterno}/xml`);
  }

}