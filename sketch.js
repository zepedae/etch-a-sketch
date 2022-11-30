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

    let length;
    while(!length || length > 100 || length < 0){
        length = prompt('Enter grid length (<100)');
    }
    createGrid(length);
    
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pixel => pixel.addEventListener('mouseover', () => {
        pixel.classList.add('sketched');
    }));
    
});

