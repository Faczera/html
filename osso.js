//estrutura return




//metodo get do objeto date

var data=new Date();
alert(data.getDay());//retorna o dia atual, começando de um vetor 0

//gmtstring - para definir o fuso horário internacional e toLocaleSTRING para fuso horario local

var data=new Date();
alert(data.toGMTString());


//inserindo os valores
var data=new Date(2014,2);
alert(data);

//inserindo completo
var data=new Date(2011,2,22,4,65,30,1234);
alert(data);

//função gethours -para recuperar a hora entre 0 e 23
alert(data.getHours());

//função getUTCHours - para recuperar a hora universal

alert(data.getUTCHours());


var data=new Date();
var dias=["domingo", "segunda", "terça"];
alert(dias[data.getDay()]);
