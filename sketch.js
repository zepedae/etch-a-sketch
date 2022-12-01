function createGrid(n){
    const box = document.createElement('div');
    box.classList.add('pixel');

    const row = document.createElement('div');
    row.classList.add('row');

    for(let i = 0; i < n; i++){
        row.setAttribute('id', `row${i}`);
        document.getElementById('container').appendChild(row.cloneNode(true));

        for(let j = 0; j < n; j++){
            document.getElementById(`row${i}`).appendChild(box.cloneNode(true));
        }
    }
}



document.querySelector('#create').addEventListener('click', () => {
    
    document.querySelectorAll('.row').forEach(e => e.remove());

    let length = 10;
    // while(!length || length > 100 || length < 0){
    //     length = prompt('Enter grid length (<100)');
    // }
    createGrid(length);
    
    const pixels = document.querySelectorAll('.pixel');

    pixels.forEach(pixel => pixel.addEventListener('mouseover', () => {
        if(!pixel.style.backgroundColor){
            pixel.style.backgroundColor = 'rgb(230,230,250)';
        } else {
            let colorValues = pixel.style.backgroundColor.split(',');
            colorValues[0] = Number(colorValues[0].substr(4)) - 20;
            colorValues[1] = Number(colorValues[1]) - 20;
            colorValues[2] = Number(colorValues[2].slice(0, -1)) - 20;

            pixel.style.backgroundColor = `rgb(${colorValues})`;

            console.log(`rgb(${colorValues})`);
        }
    }));
});

