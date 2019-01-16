const PREFIX = "/empresas";

/** Classe da Empresa de Empresa. */
module.exports = class Empresa {

  constructor(httpClient) {
    this.client = httpClient;
  }

  /**
   * Consulta uma Empresa pelo Identificador Único
   * 
   * @param {string} id id da empresa que deseja consultar
   * @return {mixed} dados da empresa como um array
   */
  consultar(empresaId) {
    return this.client.get(`${PREFIX}/${empresaId}`, {
      empresaId
    });
  }

  /**
	 * Insere ou atualiza uma empresa
	 * 
	 * @param mixed $dados dados da empresa que a serem utilizados na inserção ou atualização
	 */
  inserirAtualizar(dados) {
    return this.client.post(`${PREFIX}`, dados);
  }


  /**
   * Atualiza a logo da empresa
   * 
   * @param string $idEmpresa id da empresa para a qual a nota será emitida
   * @param fileParameter $arquivo imagem a ser utilizada como logo.
   */
  atualizarLogo(idEmpresa, arquivo) {
    // TODO
  }

  /**
   * Atualiza o certificado digital da empresa
   * 
   * @param string $idEmpresa id da empresa para a qual a nota será emitida
   * @param fileParameter $file arquivo do certificado.
   * @param string $pass senha do certificado.
   */
  atualizarCertificado(idEmpresa, arquivo, senha) {
    // TODO
  }
    
}