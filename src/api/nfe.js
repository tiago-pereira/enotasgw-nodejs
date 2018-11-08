const PREFIX = "/empresas";

module.exports = class NFE {
  
  constructor(httpClient) {
    this.client = httpClient;
  }

  /**
   * Emite uma Nota Fiscal
   * 
   * @param string $idEmpresa id da empresa para a qual a nota será emitida
   * @param mixed $dadosNFe dados da NFe a ser emitida
   * @return string $nfeId retorna o id único da NFe no eNotas GW
   */
  emitir(idEmpresa, dadosNFe) {
    return this.client.post(`${PREFIX}/${idEmpresa}/nfes`, dadosNFe);
  }
    
  /**
   * Cancela uma determinada Nota Fiscal
   * @param string $nfeId Identificador Único da Nota Fiscal
   * @param string $idEmpresa id da empresa para a qual a nota será emitida
   * @return string $nfeId retorna o id único da NFe no eNotas GW
   */
  cancelar(idEmpresa, nfeId) {
    return this.client.delete(`${PREFIX}/${idEmpresa}/nfes/${nfeId}`);
  }
  
  /**
   * Cancela uma determinada Nota Fiscal
   * @param string $idExterno id externo (mapeamento com sistema de origem)
   * @param string $idEmpresa id da empresa para a qual a nota será emitida
   * @return string $nfeId retorna o id único da NFe no eNotas GW
   */
  cancelarPorIdExterno(idEmpresa, idExterno) {
    return this.client.delete(`${PREFIX}/${idEmpresa}/nfes/porIdExterno/${idExterno}`);
  }

  /**
   * Consulta uma Nota Fiscal pelo Identificador Único
   * 
   * @param string $idEmpresa id da empresa para a qual a nota será emitida
   * @param string $nfeId Identificador Único da Nota Fiscal
   * @return	mixed $dadosNFe	retorna os dados da nota como um array
   */
  consultar(idEmpresa, nfeId) {
    return this.client.get(`${PREFIX}/${idEmpresa}/nfes/${nfeId}`);
  }
  
  /**
   * Consulta uma Nota Fiscal pelo seu id externo (id de mapeamento com sistema de origem)
   * 
   * @param string $idEmpresa id da empresa para a qual a nota será emitida
   * @param string $idExterno id externo (mapeamento com sistema de origem)
   * @return	mixed $dadosNFe	retorna os dados da nota como um array
   */
  consultarPorIdExterno(idEmpresa, idExterno) {
    return this.client.get(`${PREFIX}/${idEmpresa}/nfes/porIdExterno/${idExterno}`);
  }
  
  /**
   * Consulta notas fiscais emitidas em um determinado período
   * 
   * @param string $idEmpresa id da empresa para a qual a nota será emitida
   * @param int $pageNumber numero da página no qual a pesquisa será feita
   * @param int $pageSize quantidade de registros por página
   * @param string $dataInicial data inicial para pesquisa
   * @param string $dataFinal data final para pesquisa
   * @return searchResult	$listaNFe retorna uma lista contendo os registros encontrados na pesquisa
   */
  consultarPorPeriodo(idEmpresa, numeroPagina, tamanhoPagina, dataInicial, dataFinal) {
    // TODO 
  }
    
  /**
   * Download do xml de uma Nota Fiscal identificada pelo seu Identificador Único
   * 
   * @param string $idEmpresa id da empresa para a qual a nota será emitida
   * @param string $nfeId Identificador Único da Nota Fiscal
   * @return string xml da nota fiscal
   */
  downloadXml(idEmpresa, nfeId){
    // TODO
  }

    
  /**
   * Download do pdf de uma Nota Fiscal identificada pelo seu id externo (mapeamento com sistema de origem)
   * 
   * @param string $idEmpresa id da empresa para a qual a nota será emitida
   * @param string $nfeId Identificador Único da Nota Fiscal
   * @return os bytes do arquivo pdf
   */
  downloadPdf(idEmpresa, nfeId) {
    // TODO
  }
    
  /**
   * Download do xml de uma Nota Fiscal identificada pelo seu id externo (mapeamento com sistema de origem)
   * 
   * @param string $idEmpresa id da empresa para a qual a nota será emitida
   * @param string $idExterno id externo (mapeamento com sistema de origem)
   * @return string xml da nota fiscal
   */
  downloadXmlPorIdExterno(idEmpresa, idExterno){
    // TODO
  }
    
    
  /**
   * Download do xml de uma Nota Fiscal identificada pelo seu id externo (mapeamento com sistema de origem)
   * 
   * @param string $idEmpresa id da empresa para a qual a nota será emitida
   * @param string $idExterno id externo (mapeamento com sistema de origem)
   * @return os bytes do arquivo pdf
   */
  downloadPdfPorIdExterno(idEmpresa, idExterno){
    // TODO
  }
    
}