export default class catalogo {
  listadeMidias;
    this.listaDEMIdias =[];
}
adicionar(midia) {
    this.listaDEMidias.push(midia);
    thais.rezenderizar();
}
 logo{
const conteiner = documt.getElementbyid("containerCatalago")
container.innerHTML = "";
thais.listaDeMidias.forEach(midia = > {

    container.innerHTML + = midias.obterDadosHtml();
});
 }//dia 13/08

static filtrarpor genero(catalogoinstanciado, generoALVO) {
    return catalogoinstaciado.listaDEMidia.filter(
    m => m. genero.tolowerCase()===generoAI
)