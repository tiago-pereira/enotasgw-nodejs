const Client = require("./client");
const Empresa = require("./api/empresa");
const NFE = require("./api/nfe");
const Prefeitura = require("./api/prefeitura");
const ServicosMunicipais = require("./api/servicosMunicipais");

module.exports = class eNotas {
  
  constructor(accessToken, baseUrl, options = {}) {
    let env = options.env || process.env;

    let opts = Object.assign({}, options);
    let token = accessToken || env.ENOTAS_API_KEY;
    if (!token) { throw new Error('APIKey inválida') }

    opts['headers'] = Object.assign(opts['headers'] || {}, {
        'Authorization': `Basic ${token}`,
        'Content-Type': 'application/json'
    });

    this.httpClient = opts.httpClient || new Client(baseUrl, opts);

    this._empresa = undefined;
    this._nfe = undefined;
    this._prefeitura = undefined;
    this._servicosMunicipais = undefined;
  }

  get empresa() {
    this._empresa = this._empresa || new Empresa(this.httpClient);
    return this._empresa;
  }

  get nfe() {
    this._nfe = this._nfe || new NFE(this.httpClient);
    return this._nfe;
  }

  get prefeitura() {
    this._prefeitura = this._prefeitura || new Prefeitura(this.httpClient);
    return this._prefeitura;
  }

  get servicosMunicipais() {
    this._servicosMunicipais = this._servicosMunicipais || new ServicosMunicipais(this.httpClient);
    return this._servicosMunicipais;
  }
}