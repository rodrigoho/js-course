class NegociacaoController {

  constructor() {

    let $ = document.querySelector.bind(document);
    this._inputData = $('#data-teste');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');
  }

  adiciona(event) {

    event.preventDefault();

    let data = DateHelper.textoParaData(this._inputData.value);
    
    let negociacao = new Negociacao(
      data,
      this._inputQuantidade.value,
      this._inputValor.value
    );
   
    console.log(negociacao);

    console.log(DateHelper.dataParaTexto(negociacao.data));


    this.limpaFormulario();
  }

  limpaFormulario() {
    this._inputData.value = '';
    this._inputData.focus();
    this._inputQuantidade.value = 1;
    this._inputValor.value = 0;
  }
}