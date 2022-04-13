const picBox = document.querySelector('.picBox')

const loadDog = (img) => {
    picBox.innerHTML = `
        <img src="${img}" alt="dog">
    `;
}

fetch(`https://dog.ceo/api/breeds/image/random`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        loadDog(data.message);
    })

