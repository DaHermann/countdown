let countDown = document.querySelector('#countDown');
let hourDiv = document.createElement('div');
let minitDiv  =  document.createElement('div');
let secondDiv =  document.createElement('div');
let hourSelect = document.createElement('select');
let minitSelect  =  document.createElement('select');
let secondSelect  =  document.createElement('select');
let btnStaStop = document.createElement('button');
btnStaStop.className  = 'btn';
hourSelect.className  = 'hour';
minitSelect.className  = 'minit';
secondSelect.className  = 'second';
hourDiv.className  = 'hourDiv';
minitDiv.className  = 'minitDiv';
secondDiv.className  = 'secondDiv';
btnStaStop.textContent  = "Start";
hourDiv.appendChild(hourSelect)
minitDiv.appendChild(minitSelect)
secondDiv.appendChild(secondSelect)
countDown.appendChild(hourDiv)
countDown.appendChild(minitDiv)
countDown.appendChild(secondDiv)
countDown.appendChild(btnStaStop)

/**
 * Set select value
 */

function createOption(val,select){
    for(var i=0;i<val; i++){
        let option = document.createElement('option');
        if(i<10){
            option.value  = i;
            option.textContent  = "0"+i;
            select.appendChild(option);
            
        }else{
            option.value  = i;
            option.textContent  = i;
            select.appendChild(option);
        }
    }
}

createOption(24,hourSelect);
createOption(60,minitSelect);
createOption(60,secondSelect)