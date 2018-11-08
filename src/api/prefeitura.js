const PREFIX = "/estados/cidades";

module.exports = class NFE {

  constructor(httpClient) {
    this.client = httpClient;
  }

  /**
   * Consulta as características de uma determinada prefeitura
   * 
   *@param int codigoIbge código ibge da cidade cuja a prefeitura será consultada
   *@return mixed contendo as características da prefeitura em questão
   */
  consultar(codigoIbge) {
    return this.client.get(`${PREFIX}/${codigoIbge}/provedor`, {
      codigoIbge
    });
  }
  
}