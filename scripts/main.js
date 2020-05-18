let commercial_number = document.querySelector('.commercial-number');
let commercial_date = document.querySelector('.commercial-date');
let commercial_name = document.querySelector('.commercial-name');
let bk_count = document.querySelector('.bk-count');
let bk_lenght = document.querySelector('.bk-lenght');
let bk_width = document.querySelector('.bk-width');
let bk_height = document.querySelector('.bk-height');

let button = document.querySelector('button');

button.onclick = function(){
	console.clear()
	var commercialNumber = commercial_number.value; 
	var commercialDate = commercial_date.value; 
	var commercialName = commercial_name.value;

	// Основные параметры
	var bkCount = bk_count.value;
	var bkLenght = bk_lenght.value;
	var bkWidth = bk_width.value;
	var bkHeight = bk_height.value;
	var bkThicknessWall = 0.125;
	var bkThicknessFloor = 0.1;
	var bkThicknessCeiling = 0.1;

	// Конструктив
	var Windows = true;
	var Doors = true;
	var Electric = false;
	var Santechnic = false;

	// Расчет значений
	var squareFloorSingle = (bkLenght - 2 * bkThicknessWall) * (bkWidth - 2 * bkThicknessWall);
	var squareCeilingSingle = (bkLenght - 2 * bkThicknessWall) * (bkWidth - 2 * bkThicknessWall);
	var squareWallSingle = ((2 * bkLenght - (2 * bkThicknessWall)) + (2 * bkWidth - (2 * bkThicknessWall)) * bkHeight - (bkThicknessCeiling + bkThicknessFloor));
	var squareFloorAll = bkCount * squareFloorSingle;
	var squareCeilingAll = bkCount * squareCeilingSingle;
	var squareWallAll = bkCount * squareWallSingle;

	document.getElementById("square-floor").innerHTML = squareFloorSingle;

	console.log("Номер коммерческого предложения >> " + commercialNumber);
	console.log("Дата коммерческого предложения >> " + commercialDate);
	console.log("Название коммерческого предложения >> " + commercialName);

	console.log("Площадь пола одного блок-контейнера >> " + squareFloorSingle.toFixed(2) + " м2");
	console.log("Площадь потолка одного блок-контейнера >> " + squareCeilingSingle.toFixed(2) + " м2");
	console.log("Площадь стен одного блок-контейнера >> " + squareWallSingle.toFixed(2) + " м2");

	console.log("Площадь пола всех блок-контейнеров >> " + squareFloorAll.toFixed(2) + " м2");
	console.log("Площадь потолка всех блок-контейнеров >> " + squareCeilingAll.toFixed(2) + " м2");
	console.log("Площадь стен всех блок-контейнеров >> " + squareWallAll.toFixed(2) + " м2");

	if(Windows == true){
		console.log("В проекте есть окна")
	}
	else{
		console.log("В проекте нет окон")
	}

	if(Doors == true){
		console.log("В проекте есть двери")
	}
	else{
		console.log("В проекте нет дверей")
	}


}

		
// 	var docDefinition = {
//     info: {
//         title: "Счет-Фактура",
//         author: "Мебель-Сервис",
//         subject: "Счет-Фактура",
//         keywords: ""
//     },
    
// pageSize:'A4',
// pageOrientation:'landscape',
// pageMargins:[50,50,30,60],
 
// header:function(curentPage,pageCount) {
//     return {
//     text:curentPage.toString() + 'из' + pageCount,
//     alignment:'right',
//     margin:[0,30,10,50]
//     }
// },
 
// footer:[
// {
//     text:'www.mebel-service.com.ua',
//     alignment:'center' //left or right
// }
// ],
// content: [
// {
//         image: 'img/logo.jpg',
//         fit: [100, 100],
//         pageBreak: 'after'
//     },
// {
//     text:'СЧЕТ-ФАКТУРА',
//     fontsize:20,
//     alignment:'center'
// },
// {
//     columns:[
//     {
//         width:'auto',
//         text:'Наименование товара'
//     },
//     {
//         width:'auto',
//         text:'Наименование товара 2'
//     },
//     ],
//     ColumnGap: 50
// },
// {table:{
//     widths:['*','auto',150,'*'],
    
//     body:[
//     ['Первая','Вторая','Третья','Четвертая'],
//     ['Первая','Вторая','Третья','Четвертая'],
//     [{text:'текстовое содержимое',bold:true},'Вторая','Третья','Четвертая']
//     ],
//     headerRows:1
// }}
// ]
// }
// pdfMake.createPdf(docDefinition).download(name.pdf);
	

// for(var i = 0; i < 10; i++){
// 	console.log(i)
// }


//var myNull = null; значение переменной ПУСТОЕ
//var myUndefined = undefined; значение переменной ОТСУТСТВУЕТ
//alert(); Вывод сообщения