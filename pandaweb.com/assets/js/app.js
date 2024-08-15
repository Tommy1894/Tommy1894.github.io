let formulario=document.getElementById("formulario")
formulario.innerHTML=`<h2>Ejercicio 1</h2>
                        <form>
                            <label for="muneca">Cantidad de muñecas: </label>
                            <input type="number" id="muneca" name='muneca'>
                            <br><br>
                            <label for="payaso">Cantidad de payasos: </label>
                            <input type="number" id="payaso" name='payaso'>
                            <br><br>
                            <button type="button" onclick=calcular()>Calcular</button>
                        </form>
                        <br>
                        <div id="resultado"></div> 
                        <br>
                        <h2>Ejercicio 2</h2>
                        <form>
                            <label for="hora">Cantidad de horas trabajadas: </label>
                            <input type="number" id="hora" name='hora'>
                            <br><br>
                            <label for="costo">Costo por hora: </label>
                            <input type="number" id="costo" name='costo'>
                            <br><br>
                            <button type="button" onclick=sueldo()>Calcular</button>
                        </form>
                        <br>
                        <div id="sueldo"></div> `
function calcular(){
    let muneca=document.getElementById('muneca').value
    let payaso=document.getElementById('payaso').value

    let peso=muneca*75+payaso*112
    let resultado=document.getElementById('resultado')
    resultado.innerHTML="El peso total es: "+peso+"gr"
    console.log(peso)
}

function sueldo(){
    let hora=document.getElementById('hora').value
    let costo=document.getElementById('costo').value
    let sueldo=hora*costo
    let resultadosueldo=document.getElementById('sueldo')
    resultadosueldo.innerHTML="El sueldo total es: "+sueldo
    console.log(peso)
}