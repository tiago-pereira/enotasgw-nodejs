const PREFIX = "/estados";

module.exports = class NFE {

  constructor(httpClient) {
    this.client = httpClient;
  }

  /**
	 * Consulta serviços municipais que podem ser utilizados para emissão de NFS-e nesta prefeitura
	 * 
	 * @param string $uf sigla do estado
	 * @param string $cidade nome da cidade
	 * @param int $pageNumber numero da página no qual a pesquisa será feita
	 * @param int $pageSize quantidade de registros por página
	 * @param string $termoPesquisa termo de pesquisa que será usado para pesquisar
	 * @return searchResult	$listaServicosMunicipais retorna uma lista contendo os registros encontrados na pesquisa
	 */
  consultar(uf, cidade, pageNumber, pageSize, termoPesquisa) {
    termoPesquisa = termoPesquisa && `contains(descricao, '${termoPesquisa}')`;

    return this.client.get(`${PREFIX}/${uf}/cidades/${cidade}/servicos`, {
      params: {
        pageNumber,
        pageSize,
        filter: termoPesquisa
      }
    });
  }
  
}