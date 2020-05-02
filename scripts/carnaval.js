const Materials = require('Materials');
const Scene = require('Scene');
const NativeUI = require('NativeUI');
const Textures = require('Textures');


const logo1 = Scene.root.find('er');
const mask = Scene.root.find('maskplane');
const index = 0;
const configuration = {
  selectedIndex: index,
  items: [
    {image_texture: Textures.get('griobutton')},
{image_texture: Textures.get('virabutton')},
{image_texture: Textures.get('beijaflorbutton')},
{image_texture: Textures.get('mangueirabutton')},
{image_texture: Textures.get('salgueirobutton')},
{image_texture: Textures.get('mocidadebutton')},
{image_texture: Textures.get('unidosdatijucabutton')},
{image_texture: Textures.get('saoclementebutton')},
{image_texture: Textures.get('uniaodailhabutton')},
{image_texture: Textures.get('estaciodesabutton')},
{image_texture: Textures.get('paraisodotuiutibutton')},
{image_texture: Textures.get('portelabutton')},
{image_texture: Textures.get('vilaisabelbutton')},


  ],
  mats: [
    {material: [Materials.get("granderio"),Materials.get("granderiomask")]}, //Grande Rio,
{material: [Materials.get("viradouro"),Materials.get("viradouromask")]}, //viradouro
{material: [Materials.get("beijaflor"), Materials.get("beijaflormask")]}, //beijaflor
{material: [Materials.get("mangueira"), Materials.get("mangueiramask")]},//mangueira
{material: [Materials.get("salgueiro"), Materials.get("salgueiromask")]},//salgueiro
{material: [Materials.get("mocidade"), Materials.get("mocidademask")]},//mocidade
{material: [Materials.get("unidosdatijuca"), Materials.get("unidosdatijucamask")]},//unidos da tijuca
{material: [Materials.get("saoclemente"), Materials.get("saoclementemask")]},//sao clemente
{material: [Materials.get("uniaodailha"), Materials.get("uniaodailhamask")]},
{material: [Materials.get("estaciodesa"), Materials.get("estaciodesamask")]},
{material: [Materials.get("paraisodotuiuti"), Materials.get("paraisodotuiutimask")]},
{material: [Materials.get("portela"), Materials.get("portelamask")]},
{material: [Materials.get("vilaisabel"), Materials.get("vilaisabelmask")]},
//{material: [Materials.get(""), Materials.get("")]}
  ]
};
const picker = NativeUI.picker;
picker.configure(configuration);
picker.visible = true;
//Inicializando com a primeira escola
logo1.material = configuration.mats[0].material[0];

//Fim da inicialização
picker.selectedIndex.monitor().subscribe(function(val) {

 logo1.material = configuration.mats[val.newValue].material[0];
 mask.material = configuration.mats[val.newValue].material[1];    
});