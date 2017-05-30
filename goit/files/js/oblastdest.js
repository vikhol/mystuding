//Пример №1. Область действия ф-й ==============================================
var migrating = true;
/* функция fly определяется только после того, 
как это функциональное выражение будет обработано. */
var fly = function(num) { 
   var sound = "Flying";
/*  wingFlapper определяется объявлением в функции fly. 
Ее областью действия является ВСЯ функция fly, 
и она определена В ЛЮБОЙ точке ТЕЛА Ф-И fly. */   
   function wingFlapper() {
      console.log(sound);
   }
   for (var i = 0; i < num; i++) {
      wingFlapper();
   }
};

function quack(num) { 
   var sound = "Quack";
/* Функция quacker определяется функциональным выражением в функции quack. 
Ее областью действия является вся функция quack, 
но определена она ТОЛЬКО на участке от функционального выражения 
до конца тела функции. */   
   var quacker = function() {
      console.log(sound);
   };
//Функция quacker определена только здесь.   
   for (var i = 0; i < num; i++) {
      quacker();
   }
}