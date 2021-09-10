const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResults (value){
    const results = document.getElementById('div1');
    const newElement = document.createElement('p');
    newElement.innerHTML = value;
    results.appendChild(newElement);
}

function kata1(n) {
    // implemente o código do kata 1 aqui
    let k1 = []
    for(let i = 1; i <= n; i++){
        k1.push(i)
    }
    showResults('Katas 1: ' + k1)
    return k1
}
kata1(25)
function kata2(n) {
    // implemente o código do kata 2 aqui
    //2.  Exibir os números de 25 a 1: _(25, 24, 23, …, 2, 1)_
    let k2 = []
    for(let i = 25; i >= n; i--){
        k2.push(i)
    }
    showResults('Katas 2: ' +k2)
    return k2
}
kata2(1)
function kata3(n) {
    // implemente o código do kata 3 aqui
    //3.  Exibir os números de -1 a -25: _(-1, -2, -3, …, -24, -25)_
    let k3 = []
    for(let i = -1; i >= n; i--){
        k3.push(i)
    }
    showResults('Katas 3: ' +k3)
    return k3
}
kata3(-25)
function kata4(n) {
    // implemente o código do kata 4 aqui
    //4.  Exibir os números de -25 a -1: _(-25, -24, -23, …, -2, -1)_
    let k4 = []
    for(let i = -25; i <= n; i++){
        k4.push(i)
    }
    showResults('Katas 4: ' +k4)
    return k4
}
kata4(-1)
function kata5(n) {
    // implemente o código do kata 5 aqui
    //5.  Exibir os números ímpares de 25 a -25: _(25, 23, 21, …, -23, -25)_
    let k5 = []
    for(let i = 25; i >= n; i--){
        if((i % 2 === 1) || (i % -2 === -1)){
            k5.push(i)
        }
    }
    showResults('Katas 5: ' +k5)
    return k5
}
kata5(-25)
function kata6(n) {
    // implemente o código do kata 6 aqui
    //6.  Exibir os números divisíveis por 3 até o 100: _(3, 6, 9, …, 96, 99)_
    let k6=[]
    for(let i = 3; i <= n; i++){
        if(i % 3 === 0){
            k6.push(i)
        }
    }
    showResults('Katas 6: ' + k6)
    return k6
}
kata6(100)
function kata7(n) {
    // implemente o código do kata 7 aqui
    //7.  Exibir os números divisíveis por 7 até o 100: _(7, 14, 21, …, 91, 98)_
    let k7 = []
    for(let i = 7; i <= n; i++){
        if(i % 7 ===0){
            k7.push(i)
        }
    }
    showResults ('Katas 7: ' + k7)
    return k7
}
kata7(100)
function kata8(n) {
    // implemente o código do kata 8 aqui
    //8.  Exibir os números divisíveis por 3 e os números divisíveis por 7 regressivamente a partir do 100: _(99, 98, 96, 93, 91, …, 14, 12, 9, 7, 6, 3)_
    let k8 = []
    for(let i = 100; i >= n; i--){
        if((i % 3 === 0) || (i % 7 === 0)){
            k8.push(i)
        }
    }
    showResults('Katas 8: ' + k8)
    return k8
}
kata8(3)
function kata9(n) {
    // implemente o código do kata 9 aqui
    //9.  Exibir os números ímpares divisíveis por 5 até o 100: _(5, 15, 25, …, 85, 95)_
    let k9 = []
    for(let i = 5; i <= n; i++){
        if((i % 2 === 1) && (i % 5 === 0)){
            k9.push(i)
        }
    }
    showResults('Katas9: ' + k9)
    return k9
}
kata9(100)
function kata10(n) {
    // implemente o código do kata 10 aqui
    //10. Exibir os 20 elementos de sampleArray. _(469, 755, 244, …, 940, 472)_
    const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
    let k10 = []
    for(let i = 0; i< n; i++){
        let result = sampleArray[i]
        k10.push(result)
    }
    showResults('Katas 10: ' + k10)
    return k10
}
kata10(20)
function kata11(n) {
    const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
    // implemente o código do kata 11 aqui
    //11. Exibir todos os números pares contidos em sampleArray. _(244, 758, 450, …, 940, 472)_
    let k11 = []
    for(let i = 0; i < n; i++){
        let result = sampleArray[i]
        if(result % 2 === 0){
            k11.push(result)
        }
    }
    showResults('Katas 11: ' + k11)
    return k11
}
kata11(20)
function kata12(n) {
    const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
    // implemente o código do kata 12 aqui
    //12. Exibir todos os números ímpares contidos em sampleArray. _(469, 755, 245, …, 179, 535)_
    let k12 = []
    for(let i = 0; i < n; i++){
        let result = sampleArray[i]
        if(result % 2 === 1){
            k12.push(result)
        }
    }
    showResults('Katas 12: ' + k12)
    return k12
}
kata12(20)
function kata13(n) {
    const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
    // implemente o código do kata 13 aqui
    //13. Exibir os números divisíveis por 8 em sampleArray: _(712, 456, …, 472)_
    k13 = []
    for(let i = 0; i < n; i++){
        let result = sampleArray[i]
        if(result % 8 === 0){
            k13.push(result)
        }
    }
    showResults('Katas 13: ' + k13)
    return k13
}
kata13(20)
function kata14(n) {
    const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
    // implemente o código do kata 14 aqui
    //14. Exibir o quadrado de cada elemento de sampleArray. _(219961, 570025, …, 222784)_
    let k14 = []
    for(let i = 0; i < n; i++){
        let result = sampleArray[i]
        let resultFinal = result * result
        k14.push(resultFinal)
    }
    showResults('Katas 14: ' + k14)
    return k14
}
kata14(20)
function kata15(n) {
    // implemente o código do kata 15 aqui
    //15. Exibir a soma de todos os números de 1 a 20.
    let k15 = []
    let soma = 0
    for(let i = 0; i <= n; i++){
        soma = soma + i
    }
    k15.push(soma)
    showResults("Katas 15: " + k15)
    return k15
}
kata15(20)
function kata16(n) {
    const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
    // implemente o código do kata 16 aqui
    //16. Exibir a soma de todos os elementos de sampleArray.
    let k16 = []
    let soma = 0
    for(let i = 0; i < n.length; i++){
        soma = soma + n[i]
        k16.push(soma)
    }
    showResults('Katas 16: ' + k16[k16.length-1])
    return k16
}
kata16(sampleArray)
function kata17() {
    const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
    // implemente o código do kata 17 aqui
    //17. Exibir o menor elemento de sampleArray.
    Array.min = function(array) {
        return Math.min.apply(Math, array)
    };
    let k17 = Array.min(sampleArray)
    showResults('Katas 17: ' + k17)
    return k17
}
kata17()
function kata18() {
    const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
    // implemente o código do kata 18 aqui
    //18. Exibir o maior elemento de sampleArray. */
    Array.max = function(array) {
        return Math.max.apply(Math, array)
    };
    let k18 = Array.max(sampleArray)
    showResults('Katas 18: ' + k18)
    return k18
}
kata18()


const bonusDiv = document.getElementById('div2');

function kataBonus1() {
    //Exibir 20 retângulos cinza sólido, cada um com 20px de altura e 100px de largura.
    const showRectangle1 = document.createElement('div');
    showRectangle1.id = 'divBonus1';
    bonusDiv.appendChild(showRectangle1);
    for(let i = 0; i < 20; i++){
        const rectangle1 = document.createElement('div');
        rectangle1.className ='bonus1';
        
        showRectangle1.appendChild(rectangle1);
    }
}
kataBonus1()

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
    //Exibir 20 retângulos cinza sólido, cada um com 20px de altura e larguras variando 
    //uniformemente de 105px a 200px, com o intervalo de 5px entre cada retangulo.
    const showRectangle2 = document.createElement('div');
    showRectangle2.id = 'divBonus2';
    bonusDiv.appendChild(showRectangle2);

    let base = 105;

    for(let i = 0; i < 20; i++){
        const rectangle2 = document.createElement('div');
        
        rectangle2.className = 'bonus2';
        rectangle2.style.height = "20px";
        
        if(i === 0){
            rectangle2.style.width = base + "px";
        } else{
            base += 5
            rectangle2.style.width = base + "px";
        }
        
        showRectangle2.appendChild(rectangle2);
    }
}
kataBonus2()

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
    //Exibir 20 retângulos cinza sólido, 
    //cada um com 20px de altura e com larguras em pixels
    //determinadas pelos 20 elementos do sampleArray.

    const showRectangle3 = document.createElement('div');
    showRectangle3.id = 'divBonus3';
    bonusDiv.appendChild(showRectangle3);

    const sampleArray = [469, 755, 244, 245, 758, 450, 302, 
    20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

    for(let i = 0; i < 20; i++){
        const rectangle3 = document.createElement('div');
        
        rectangle3.className = 'bonus3';
        rectangle3.style.height = "20px";
        rectangle3.style.width = sampleArray[i] + "px";
        
        showRectangle3.appendChild(rectangle3);
    }

}
kataBonus3()

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
    // Como no Item #3, 
    //mas alternando cores para que retângulo sim, retângulo não seja vermelho.

    const showRectangle4 = document.createElement('div');
    showRectangle4.id = 'divBonus4';
    bonusDiv.appendChild(showRectangle4);

    const sampleArray = [469, 755, 244, 245, 758, 450, 302, 
    20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

    for(let i = 0; i < 20; i++){
        const rectangle4 = document.createElement('div');
        
        rectangle4.className = 'bonus4';
        rectangle4.style.height = "20px";
        rectangle4.style.width = sampleArray[i] + "px";
        rectangle4.style.margin = "2px";

        let even = i % 2 === 0;

        if(i === 0 || even){
            rectangle4.style.backgroundColor = "red";
        }else{
            rectangle4.style.backgroundColor = "gray"
        }
        
        showRectangle4.appendChild(rectangle4);
    }
}
kataBonus4()

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
    //Como no Item #3, mas pinte os retângulos de largura par de vermelho.

    const showRectangle5 = document.createElement('div');
    showRectangle5.id = 'divBonus5';
    bonusDiv.appendChild(showRectangle5);

    const sampleArray = [469, 755, 244, 245, 758, 450, 302, 
    20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

    for(let i = 0; i < 20; i++){
        const rectangle5 = document.createElement('div');
        
        rectangle5.className = 'bonus5';
        rectangle5.style.height = "20px";
        rectangle5.style.width = sampleArray[i] + "px";
        rectangle5.style.margin = "2px";
    
        if(sampleArray[i] % 2 === 0){
            rectangle5.style.backgroundColor = "red";
        }else{
            rectangle5.style.backgroundColor = "gray"
        }
        
        showRectangle5.appendChild(rectangle5);
    }
}
kataBonus5()
