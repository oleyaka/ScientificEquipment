"use strict";

document.getElementById('slider_left').onclick = sliderLeft;
document.getElementById('slider_right').onclick = sliderRight;
let offset = 0;

function sliderRight () {
	let polosa = document.getElementById('polosa');
	offset = offset - 376;
	if (offset < -752) {
		offset = 0;
	}
	polosa.style.left = offset + 'px';
}


function sliderLeft () {
	let polosa = document.getElementById('polosa');
	offset = offset + 376;
	if (offset > 0) {
		offset = -752;
	}
	polosa.style.left = offset + 'px';
}






















// // инициализация слайдера
// let slides = document.querySelectorAll('.slide-single'); 		// коллекция элементов изображения (имя класса изображения)
// console.log(slides); 		// посмотреть в консоли 
// let slider = []; 		// вспомогательный массив получает src изображения 
// for (let i = 0; i < slides.length; i++){ 		// цикл от 0 до длины slides
// 	slider[i] = slides[i].src; 			// путь на изображение 
// 	slides[i].remove(); 		// изображение удаляется со страницы
// }
// console.log(slider); 		// посмотреть в консоли 

// let step = 0; 		// переменная шаг (какую картинку показывать в основном блоке) для контроля состояния слайдера
// let offset = -1; 		// переменная смещение изображения 
 

// function draw(right = false){ 		// функция отрисовки, которая создаёт 2 необходимых изображения 
// 	if (!right) {
// 		let img = document.createElement('img'); 		// создаёт картинку
// 		img.src = slider[step];	 		// src картинки, чтобы она была видна (ссылка на картинку менятся взависимости от step)
// 		img.classList.add('slide-single');	 	// класс картинки
// 		img.style.left = offset*256 + 'px'; 		// смещение картинки
// 		document.querySelector('#slide').appendChild(img); 			// получить картинку и интегрировать внутрь блока 
// 		if (step + 1 >= slider.length){ 		// проверка можно ли наращивать step
// 			step = 0; 		// обнулить, если равен длине масива 
// 		}
// 		else { // 
// 			step ++; 		// если не равен длине масива, наращиваем 
// 		}

// 		if (offset < slider.length && offset > 0) {
// 	        offset ++;
// 	    } 
// 	    if (offset > 1) {
// 	        offset = 1;
// 	    }
	    
// 	    if (offset <= 0) {
// 	    	offset ++;
// 	    }
// 	} else {

// 		if (step - 1 <=0){ 		// проверка можно ли наращивать step
// 			step = slider.length - 1; 		// обнулить, если равен длине масива 
// 		}
// 		else { 
// 			step --;		// если не равен длине масива, наращиваем 
// 		}

	
// 		let img = document.createElement('img'); 	
// 		var theFirstChild = img.firstChild;	
// 		img.src = slider[step];	 		// src картинки, чтобы она была видна (ссылка на картинку менятся взависимости от step)
// 		img.classList.add('slide-single');	 	// класс картинки
// 		img.style.left = -256 + 'px'; 		// смещение картинки
// 		document.querySelector('#slide').insertBefore(img, theFirstChild);

// 	}
	
// }
 
// function left(){ 		// смещает основную и правую картинку в левую сторону (удаляет ненужные элементы и создаёт новые)
// 	// document.onclick = null // запретить выполнение функции пока не сработает Timeout
// 	let slides2 = document.querySelectorAll('.slide-single'); 		// вспомогательная переменная с коллекцией видимых изображений
// 	let offset2 = -2;		 // смещение картинок в движении 
// 	for (let i = 0; i < slides2.length; i++){ 		// цикл перебора коллекции 
// 		slides2[i].style.left = offset2*256 + 'px'; 		// смещение изображения влево 
// 		offset2++; 		// увеличение сдвижения 
// 	}
// 	setTimeout(function(){ 		// отложенная операция для удаления нулевого элемента
// 		slides2[0].remove(); 		// удаление самого левого изображения (нулевой элемент)
// 		draw();  		// добавить изображение справа
// 	}, 1000); 		// время удаления
	
// }

// let tmp = 1;

// function right(){ 		// смещает основную и правую картинку в левую сторону (удаляет ненужные элементы и создаёт новые)
// 	// document.onclick = null // запретить выполнение функции пока не сработает Timeout
// 	let slides3 = document.querySelectorAll('.slide-single'); 		// вспомогательная переменная с коллекцией видимых изображений
// 	let offset3 = 2;		 // смещение картинок в движении 
// 	for (let i = slides3.length - 1; i >= 0; i--){ 		// цикл перебора коллекции 
// 		slides3[i].style.left = offset3*256 + 'px'; 		// смещение изображения влево 
// 		offset3--; 		// увеличение сдвижения 
// 	}
// 	offset3 ++;
// 	setTimeout(function(){ 		// отложенная операция для удаления нулевого элемента
// 		slides3[tmp].remove(); 		// удаление самого левого изображения (нулевой элемент)
// 		draw(true);  		// добавить изображение справа
// 	}, 1000);
// 	if (tmp == 2) {
// 		tmp = 0;
// 	} else if (tmp < 2) {
// 		tmp++;
// 	}

// }


// draw();draw();draw();













