const express = require('express');
const router = express.Router();

//DELIVERY IMPORT
const LojasDelivery = require('../controller/delivery/lojas/lojas_controller');
//DELIVERY IMPORT PRODUTOS
const DeliveryProdutos = require('../controller/delivery/produtos/controller');
const Pedidos = require('../controller/delivery/pedidos/Controller');
//DELIVERY IMPORT TIPOS CARTOES
const MPDelivery = require('../controller/delivery/cartoes/Controller');
//DELIVERY IMPORT CUPONS
const DCupons = require('../controller/delivery_cupons');
//DELIVERY AVALIACOES
const DeliveryAvaliacoes = require('../controller/delivery/avaliacoes/avaliacoes_controller');


//const ProdutoController = require('../controller/ProdutosController');
//const AdicionalController = require('../controller/AdicionalController');
const UsuarioController = require('../controller/usuarios/Controller');
const LoginController = require('../controller/LoginController');

/*AGENDAMENTOS
const AgendamentoController = require('../controller/AgendamentoController');
const ClienteAgendamentos = require('../controller/Cliente_Agendamentos');

const AvaliacaoController = require('../controller/AvaliacaoController');
const ServicosController = require('../controller/ServicosController');
const HrController = require('../controller/HorariosController');
const FavController = require('../controller/FavoritosController');

//CONCESSIONARIAS
const CarrosController = require('../controller/CarrosController');
const ConcController = require('../controller/ConcessionariasController');

//IMOVEIS
const ImobController = require('../controller/ImobiliariaController');
const ImovController = require('../controller/ImovelController');

//PRESTADORES
const Prestadorcontroller = require('../controller/Prestador');

//VLojas
const VLojasController = require('../controller/VLojasController');

//Mensagens
const MsgController = require('../controller/Mensagem');*/

//USUARIOS
const UEnderecos = require('../controller/Usuarios_Enderecos');


//DELIVERY

router.get('/filterLojaDeliveryLogin/:usuario/:senha', LojasDelivery.filterDeliveryLogin);
router.get('/filterLojaDelivery/:usuario/:senha', LojasDelivery.filterDeliveryLogin);
router.put('/atualizaAberto/:id', LojasDelivery.updateAberto);
router.put('/atualizaBusca/:id', LojasDelivery.updateBusca);

router.post('/insereDeliveryLoja', LojasDelivery.createLoja);
router.get('/filterLojaAll/:cidade', LojasDelivery.filterLoja);
router.get('/filterLojaCategoria/:cidade/:cat', LojasDelivery.filterLojaCategoria);
router.get('/filterLojaDetalhes/:id', LojasDelivery.filterLojaDetalhes);

//DELIVERY PRODUTOS
router.post('/createProd', DeliveryProdutos.createProd);
router.post('/atualizaProduto/:id', DeliveryProdutos.updateProduto);
router.get('/filterProd/:id/:categoria', DeliveryProdutos.filtraProd);
router.get('/filterProdAll/:id', DeliveryProdutos.filtraProdAll);
router.get('/filterProdDistinct/:id', DeliveryProdutos.filtraProdCategoria);
router.get('/filterProdDetalhes/:id', DeliveryProdutos.filtraProdDetalhes);

//ADICIONAIS LANCHERIA
router.post('/insereAdicionalProd', DeliveryProdutos.createAdicional);
router.get('/filterAcidionalProd/:id', DeliveryProdutos.filterAdicional);

//SABORES
router.post('/createSaborPizzaria', DeliveryProdutos.createSabor);
router.post('/updateSaborPizzaria/:id', DeliveryProdutos.updateSabor);
router.get('/filterCategoriasPizzaria/:id/:categoria', DeliveryProdutos.filtraSaboresCategoria);
router.get('/filterCaregoriaPizzariaDistinct/:id', DeliveryProdutos.filtraSaboresCategoriaDistinct);
router.get('/filterSaboresAll/:id', DeliveryProdutos.FiltraSaboresAll);

//PEDIDOS
router.post('/insertPedido', Pedidos.createPedido);
router.get('/filtraPedidosCliente/:id', Pedidos.filtraPedidosClientes);
router.get('/filtraPedidosLoja/:id/:data', Pedidos.filtraPedidosAguardandoLojas);
router.get('/filtraPedidosProducaoLoja/:id', Pedidos.filtraPedidosProducaoLojas);
router.get('/filtraPedidosEntregaLoja/:id', Pedidos.filtraPedidosEmTransporteLojas);
router.get('/filtraPedidosBuscarLoja/:id', Pedidos.filtraPedidosAguardandoClienteLojas);
router.get('/filtraPedidosDataLoja/:id', Pedidos.filtraPedidosFinalizadoDatasLojas);
router.get('/filtraPedidosVendasDataLoja/:id/:data', Pedidos.filtraPedidosVendaDataLojas);
router.get('/filtraPedidosVendasMesLoja/:id/:data', Pedidos.filtraPedidosVendaMesLojas);
router.get('/filtraValorTotalLoja/:id', Pedidos.filtraValorTotalRelatorios);
router.get('/filtraPedidosFinalizadosLoja/:id/:data', Pedidos.filtraPedidosFinalizadoLojas);
router.get('/filtraPedidoDetalhes/:id', Pedidos.filtraPedidosAguardandoDetalhes);
router.put('/atualizaStatusPedido/:id', Pedidos.atualizaPedido);
//DELIVERY CARTÕES
router.post('/insereCartoes', MPDelivery.createMPagamentos);
router.put('/alteraCartoes/:id', MPDelivery.updateMPagamentos);
router.delete('/deletaCartoes/:id', MPDelivery.deleteMPagamentos);
router.get('/filtraCartoes/:id', MPDelivery.filtraMPagamentos);
//DELIVERY CUPONS
router.post('/insereCupom', DCupons.createCupons);
router.get('/filtracupom/:id/:nome', DCupons.filtraCupons);
//DELIVERY AVALIAÇÕES
router.post('/insereDeliveryAvaliacao', DeliveryAvaliacoes.createAvaliacoes);
router.get('/filtraAvaliacoesDeliveryLimit/:id', DeliveryAvaliacoes.filtraAvLojaLimit);
router.get('/filtraAvaliacoesDeliveryAll/:id', DeliveryAvaliacoes.filtraAvLojaAll);



//LOGIN
router.post('/gravaLogin', LoginController.createLogin);
router.get('/filterLogin/:token', LoginController.filterLogin);
router.delete('/deleteLogin/:email', LoginController.deleteLogin);

//USUÁRIOS
router.post('/adcUsuario', UsuarioController.createUsuario);
router.get('/filterUsuario/:email/:senha', UsuarioController.filterUsuario);
router.post('/updateUsuario/:_id/:endereco/:estado', UsuarioController.updateUsuario);
router.put('/updateUsuario/:id', UsuarioController.updateTutoServicos);
//ENDERECOS
router.post('/insereEndereco', UEnderecos.createEndereco);
router.get('/filterEnderecos/:id', UEnderecos.filtraEnderecos);
router.delete('/deleteEndereco/:id', UEnderecos.deleteEndereco);
/*
//PRESTADOR
router.post('/inserePrestador', Prestadorcontroller.createPrestador);
router.get('/filterPrestadorAll', Prestadorcontroller.filtraPrestadorAll);
router.get('/filterPrestadorCidade/:cidade', Prestadorcontroller.filtraPrestadorCidade);
router.get('/filterPrestadorCategoria/:categoria', Prestadorcontroller.filtraPrestadorCategoria);
router.get('/filterPrestadorCidadeCategoria/:cidade/:categoria', Prestadorcontroller.filtraPrestadorCidadeCategoria);
router.get('/filterPrestadorCidadeDistinct', Prestadorcontroller.filtraPrestadorCidadeDistinct);
router.get('/filterPrestadorCategoriaDistinct/:cidade', Prestadorcontroller.filtraPrestadorCategoriaDistinct);
router.get('/filterPrestadorDetail/:id', Prestadorcontroller.filtraPrestadorDetalhes);
router.get('/filterPrestadorAvaliacao/:id', Prestadorcontroller.filtraAvaliacao);
router.get('/filterPrestadorHr/:id', Prestadorcontroller.filtraHorarios);

//HORARIOS
router.get('/filterHrPrestador/:id/:dia', HrController.filterHora);
router.post('/createHr/', HrController.createHora);

//SERVICOS PRESTADOR
router.get('/filterServicos/:id', ServicosController.filterServico);
router.post('/insereServicos/', ServicosController.createServico);

//AGENDAMENTO PRESTADOR
router.get('/filterAgPrestador/:id', AgendamentoController.filterAgPrestador);
router.get('/filterHr/:data/:hora/:status', AgendamentoController.filterHoraServicos);
router.get('/filterHrDt/:data/:status', AgendamentoController.filterHoraServicosDt);
router.post('/insereAgendamento/', AgendamentoController.createAg);

//AGENDAMENTOS CLIENTE
router.post('/insereBuscaServico', ClienteAgendamentos.createAg);
router.get('/filterAgCliente/:id/:st1/:st2', AgendamentoController.filterAgClientes);
router.get('/filterAgClienteFinalizados/:id', AgendamentoController.filterAgClientesFinalizados);
router.get('/filterAgClienteCancelados/:id', AgendamentoController.filterAgClientesCancelados);

//AGENDAMENTO CLIENTE
router.post('/createAvPrestador', AvaliacaoController.createAv);
router.get('/filterAvPrestador/:id', AvaliacaoController.FilterAvPrestador);

//FAVORITOS
router.post('/createFav', FavController.createFav);
router.get('/filterFav/:id/:idf', FavController.filterFav);
router.get('/filterFavCli/:id', FavController.filterFavCli);
router.delete('/deleteFav/:idf/:idc', FavController.removeFav);

//PRODUTOS
router.post('/adcProd', ProdutoController.createProdutos);
router.get('/filterProd/:idloja', ProdutoController.filterProdutos);
router.get('/filterProdU/:idProd', ProdutoController.filterProdutosU);

//ADICIONAL
router.post('/adcAdicional', AdicionalController.CreateAdicional);
router.get('/filterAdc/:idProd', AdicionalController.filterAdicional);

//CARROS
//FILTROS CARROS
router.post('/createCarro', CarrosController.createCarro);
router.get('/filterCarroBusca/:modelo', CarrosController.filterCarroBusca);
router.get('/filterCarroCidadeBusca', CarrosController.filterCarroCidadeBusca);
router.get('/filterCarroModeloBuscaMarca/:marca', CarrosController.filterCarroModeloBuscaMarca);
router.get('/filterCarroModeloBusca', CarrosController.filterCarroModeloBusca);
router.get('/filterCarroModeloBuscaCidade/:cidade', CarrosController.filterCarroModeloBuscaCidade);
router.get('/filterCarroModeloBuscaCidadeMarca/:cidade/:marca', CarrosController.filterCarroModeloBuscaCidadeMarca);
router.get('/filterCarroMarcaBusca', CarrosController.filterCarroMarcaBusca);
router.get('/filterCarroMarcaBuscaCidade/:cidade', CarrosController.filterCarroMarcaBuscaCidade);

//QUERY CARROS
router.get('/queryCarros', CarrosController.filterCarrosSemCampos);
router.get('/queryCarrosCidade/:cidade', CarrosController.filterCarrosCidade);
router.get('/queryCarrosMarca/:marca', CarrosController.filterCarrosMarca);
router.get('/queryCarrosModelo/:modelo', CarrosController.filterCarrosModelo);
router.get('/queryCarrosMarcaModelo/:modelo/:marca', CarrosController.filterCarrosModelo);
router.get('/queryCarrosCidadeModelo/:modelo/:cidade', CarrosController.filterCarrosCidadeModelo);
router.get('/queryCarrosCidadeMarca/:marca/:cidade', CarrosController.filterCarrosCidadeMarca);
router.get('/queryCarrosTodosA/:cidade/:marca/:modelo', CarrosController.filterCarrosTodosA);

//QUERY CARRO DETALHE
router.get('/queryCarroDetalhe/:id', CarrosController.filterCarrosDetail);

//QUERY CONCESSIONARIAS
router.post('/insereConcessionaria', ConcController.createConc);
router.get('/queryConcessionarias/:ativo', ConcController.filterConcAll);
router.get('/queryConcessionarias/:ativo/:cidade', ConcController.filterConcCidade);
router.get('/queryConcDetalhes/:id', ConcController.filterDetalhes);
router.get('/queryCarrosConc/:status/:id', ConcController.queryCarroConc);
router.get('/queryCarrosConcMarca/:status/:id/:marca', ConcController.queryCarroConcMarca);
router.get('/queryCarrosConcModelo/:status/:id/:modelo', ConcController.queryCarroConcModelo);
router.get('/queryCarrosConcAno/:status/:id/:ano', ConcController.queryCarroConcAno);
router.get('/queryCarrosConcMarcaModelo/:status/:id/:marca/:modelo', ConcController.queryCarroConcMM);
router.get('/queryCarrosConcMarcaAno/:status/:id/:marca/:ano', ConcController.queryCarroConcMA);
router.get('/queryCarrosConcMoAno/:status/:id/:modelo/:ano', ConcController.queryCarroConcMoA);
router.get('/queryCarrosConcTodos/:status/:id/:marca/:modelo/:ano', ConcController.queryCarroConcTodos);
router.get('/filterCCarroMarcaBusca/:status/:id', ConcController.filterCarroConcMarcas);
router.get('/filterCCarroModeloBuscaMarca/:status/:id/:marca', ConcController.filterCarroConcModeloMarcas);
router.get('/filterCCarroModeloBusca/:status/:id', ConcController.filterCarroConcModelos);
router.get('/filterCCarroAnoBusca/:status/:id', ConcController.filterCarroConcAnos);
router.get('/filterCCarroAnoBuscaMarca/:status/:id/:marca', ConcController.filterCarroConcAnosMarca);
router.get('/filterCCarroAnoBuscaModelo/:status/:id/:modelo', ConcController.filterCarroConcAnosModelo);
router.get('/filterCCarroAnoBuscaTodos/:status/:id/:marca/:modelo', ConcController.filterCarroConcAnosTodos);
//router.get('/queryCarrosConcLimit/:status/:id', ConcController.filterCarroConc);

//IMOBILIARIAS
router.post('/insereImobiliaria', ImobController.createImob);
router.get('/filtraCidadesImob/:ativo', ImobController.filterCidadeDistinct);
router.get('/queryImobAll/:ativo', ImobController.filterImobAll);
router.get('/queryImobCidade/:ativo/:cidade', ImobController.filterImobCidade);
router.get('/queryImobDetail/:id', ImobController.filterImobDetail);

//IMOVEIS
router.post('/insereImovel', ImovController.createImov);
router.get('/queryImovImob/:ativo/:id', ImovController.filterImovImobiliaria);
router.get('/queryImovImob2/:ativo/:id/:tipo', ImovController.filterImovImobiliaria2);
router.get('/queryImovImovBairro/:ativo/:id/:bairro/:tipo', ImovController.filterImovBairro);
router.get('/queryImovDetail/:ativo/:id', ImovController.filterImovDetail);
router.get('/filtraBairroImovDistinct/:ativo/:id/:tipo', ImovController.filterImovBairroDistinct);

//TELA FILTER IMOVEIS
router.get('/queryFiltrarCidadeImoveisDistinct/:ativo/:tipo', ImovController.filterCidadeImoveis);
router.get('/queryFiltrarBairrosImoveisDistinct/:ativo/:cidade/:tipo', ImovController.filterBairroImoveis);

router.get('/queryImoveisFiltra/:ativo/:tipo', ImovController.filterQueryImoveis);
router.get('/queryImoveisFiltraCidade/:ativo/:cidade/:tipo', ImovController.filterQueryImoveisCidade);
router.get('/queryImoveisFiltraBairro/:ativo/:cidade/:bairro/:tipo', ImovController.filterQueryImoveisBairro);

//VLOJAS
router.post('/insereVLoja', VLojasController.createVLoja);
router.get('/filtraCidadesDistinctVLojas/:ativo', VLojasController.filterCidadeDistinct);
router.get('/filtraVLojasAll/:ativo', VLojasController.filterLojasAll);
router.get('/filtraVLojasCidade/:ativo/:cidade', VLojasController.filterLojasCidade);

router.get('/filtraVLojaDetail/:ativo/:id', VLojasController.filterLojaDetail);

//LOJAS PRODUTOS
router.post('/insereProdutosLoja', VLojasController.createProdutos);
router.get('/filtraLojaProdutos/:idl', VLojasController.filtraProdLoja);
router.get('/filtraLojaProdutoDetail/:idp', VLojasController.filtraProdDetail);
router.get('/filtraVLojaRelacionados/:ativo/:id/:cat/:subc', VLojasController.filtraRelacionados);
router.get('/filtraLojaProdutoFav/:ativo/:idl/:fav', VLojasController.filtraProdFav);
router.get('/filtraLojaProdutosMaisVendidos/:ativo/:idl/:mv', VLojasController.filtraProdMaisVendidos);

//Mensagens

router.post('/insereMensagem', MsgController.createMsg);
router.get('/filtraMensagens/:idA', MsgController.filtraMsg);
router.get('/filtraSalas/:idA', MsgController.filtraSala);*/



module.exports = router;