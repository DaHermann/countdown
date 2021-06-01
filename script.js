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
createOption(60,secondSelect);


let timerStart = false;
let timer;

let timerDown = (hour)=>(min)=>async(second)=>{

    if(hour===0 && min===0 && second===0){
        // console.log("Stop timer");
        showTime(hour, min, second);
        // alert('Time out!!!!!');
        // console.log(hour+' : '+min+' : '+second);
        
    }

    if(second!=0){
        let secondDown = await  setInterval(()=>{
            second--
            if(second==0){
                clearInterval(secondDown);
                return timerDown(hour)(min)(second);
            }
            // console.log(hour+' : '+min+' : '+second);
            showTime(hour, min, second);
        },5);

    }

    if( min!=0 && second==0){
        showTime(hour, min, second);
        return timerDown(hour)(--min)(59);
        // console.log(hour+' : '+min+' : '+second);

    }

    if(hour!=0 && min==0 && second==0){
        showTime(hour, min, second);
        return timerDown(--hour)(59)(59);
        // console.log(hour+' : '+min+' : '+second);

    }
}

// timerDown(2)(2)(3);

function showTime(hr, mn, sd){
    hourDiv.textContent = hr<10?'0'+hr:hr;
    minitDiv.textContent = mn<10?'0'+mn:mn;
    secondDiv.textContent = sd<10?'0'+sd:sd;
}

function btnToggle(staus){
    return;
}



btnStaStop.addEventListener('click',(e)=>{
    e.preventDefault();

    let hour = parseInt(hourSelect.value);
    let minit = parseInt(minitSelect.value);
    let second = parseInt(secondSelect.value);
    showTime(hour, minit, second);

    if(timerStart){
        timerStart = false;
        clearTimeout(timer);
        e.target.textContent = 'Start';
        e.target.style.color = 'rgb(99, 91, 91)';
        e.target.style.backgroundColor = 'rgb(255, 251, 0)';
    }else{
        timerStart = true;
        timer = setTimeout(timerDown(hour)(minit)(second),1);
        console.log('hour : '+hour);
        console.log('minit : '+minit);
        console.log('second : '+second);
        e.target.textContent = 'Stop';
        e.target.style.color = '#fff';
        e.target.style.backgroundColor = 'crimson';
    }
    return;
})