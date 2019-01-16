const PREFIX = "/empresas";

/** Classe da Empresa de Empresa. */
module.exports = class Empresa {

  constructor(httpClient) {
    this.client = httpClient;
  }

  /**
   * Recupera uma lista de empresas por um critério de pesquisa
   * 
   * @method GET
   * @param {integer} numeroPagina Número da página.
   * @param {integer} tamanhoPagina Total de itens a serem retornados por página.
   * @param {string} procurarPor (opcional) Campo no qual será aplicado o termo de pesquisa.
   * @param {string} termo (opcional) Termo de pesquisa.
   * @param {string} ordernarPor (opcional) Campo no qual será aplicado a ordenação.
   * @param {string} direcao (opcional) Direção na qual será feita a ordenação.
   * @return {mixed} Retorna uma lista de empresas encontradas pelo critério de pesquisa e paginação definidos.
   */
  listar(numeroPagina, tamanhoPagina, procurarPor = null, termo = null, ordernarPor = null, direcao = null) {
    if (procurarPor && termo && ordernarPor && direcao)
      return this.client.get(`${PREFIX}?pageNumber=${numeroPagina}&pageSize=${tamanhoPagina}&searchBy=${procurarPor}&searchTerm=${termo}&sortBy=${ordernarPor}&sortDirection=${direcao}`);
    else
      return this.client.get(`${PREFIX}?pageNumber=${numeroPagina}&pageSize=${tamanhoPagina}`);
  }

  /**
   * Insere ou atualiza uma empresa (CNPJ Emissor)
   * 
   * @method POST
   * @param {mixed} empresa Dados da Empresa que deseja inserir ou atualizar. Em casos de atualização o identificador único da empresa deve ser informado, atributo "id".
   * @return {mixed} O retorno inclui o Identificador único da Empresa.
   */
  salvar(empresa) {
    return this.client.post(`${PREFIX}/${idEmpresa}/`, empresa);
  }

  /**
   * Vincula um certificado digital a empresa.
   * 
   * @method POST
   * @param {string} empresaId Identificador único da Empresa relacionada a Nota Fiscal que deseja inserir.
   * @param {file} arquivo Arquivo .PFX ou .P12 do certificado digital, O arquivo deve ser enviado usando codificação multipart/form-data.
   * @param {string} senha Senha do certificado digital.
   */
  atualizarCertificado(empresaId, arquivo, senha) {
    return this.client.post(`${PREFIX}/${empresaId}/certificadoDigital`, { arquivo, senha });
  }

  /**
   * Vincula um logotipo a empresa.
   * 
   * @method POST
   * @param {string} empresaId Identificador único da Empresa relacionada a Nota Fiscal que deseja inserir.
   * @param {file} logotipo Arquivo .JPG, .PNG ou .GIF da imagem a ser utilizada como logotipo, O arquivo da imagem deve ser enviado usando codificação multipart/form-data. Formatos suportados: JPG, PNG e GIF
   */
  logo(empresaId, logotipo) {
    return this.client.post(`${PREFIX}/${empresaId}/logo`, { logotipo });
  }

  /**
   * Recupera informações de uma Empresa (CNPJ Emissor).
   * 
   * @method GET
   * @param {string} empresaId Identificador único da Empresa.
   * @return {mixed} O retorno inclui todos os dados da Empresa em questão.
   */
  consultar(empresaId) {
    return this.client.get(`${PREFIX}/${empresaId}`);
  }
    
}