var canvas  = document.querySelector("canvas")
canvas.width = window.innerWidth
canvas.height = window.innerHeight
var a = canvas.getContext('2d')              // Quadrado
var b = canvas.getContext('2d')              // Linhas
var c = canvas.getContext('2d')              // Círculo
var y = 0
var z = 1

//Quadrado
for (var y=0; y<10; y++) {
a.fillStyle= 'rgba( 13,87,206,1 )'           // Cor e Estilo
a.fillRect(z,300,60,60)                       // Dimensões 
z = z+80                                     // Distância
}


//Linhas
for (var y=0; y<10; y++) {
b.beginPath()                               // Início comando
b.moveTo(z,500)                             // Início da linha
b.lineTo(400,100)                           // Final da linha
b.strokeStyle= 'rgba( 114,32,197,1)'                      // Cor e estilo
b.stroke()                                  // Executa e desenha
z = z+80
}

//Círculos
for (var y=0; y<30; y++) {
c.beginPath()                               // Início comando
c.arc(500,500,60,0, Math.PI*2, false)       // Dimensões 
c.strokeStyle= '#14B8EA'                    // Cor e estilo
c.stroke()                                  // Executa e desenha
}
