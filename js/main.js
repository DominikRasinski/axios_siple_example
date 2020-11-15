const btn = document.querySelector('.take-namedays');
const image = document.querySelector('img');
const url = 'https://dog.ceo/api/breeds/image/random';

function getPhoto() {
    axios.get(url)
        .then(res => {
            image.setAttribute('src', res.data.message)
            image.style.width = '500px';
            image.style.height = '500px';
            image.style.border = "5px solid white";
        })
}
getPhoto();
btn.addEventListener('click', getPhoto);

window.addEventListener('keydown', (event) => {
    if(event.key === 'Enter'){
        getPhoto();
    }
    else{
        console.log(`Meybe try click 'Enter' :P`);
    }
})