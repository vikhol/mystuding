function fun(echo) { 
    console.log(echo);
};
//Ф-я fun принимает аргумент "hello" и использует его для вывода в консоль.
fun("hello");

function boo(aFunction) {
    aFunction("boo");
}
//Ф-я boo принимает ф-ю fun, как арг-т и выполняет ее с аргументом "boo"
boo(fun);

console.log(fun);
fun(boo);

//Ф-я fun присваивается другой переменной ("moreFun")
var moreFun = fun;
//и теперь moreFun работает так же, как fun
moreFun("hello again");


function echoMaker() {
    return fun;
}

var bigFun = echoMaker();
bigFun("Is there an echo?");