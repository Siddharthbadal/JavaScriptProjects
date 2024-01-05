const textAreaEl = document.querySelector('.textarea');
const charactersNumberEl = document.querySelector('.stat__number--characters');
const twitterNumberEl = document.querySelector('.stat__number--twitter');
const facebookNumberEl = document.querySelector('.stat__number--facebook');
const wordsNumberEl = document.querySelector('.stat__number--words');


countCharacters  = function(){
    // count characters 
    // console.log(textAreaEl.value.length);
    const totalCharacters = textAreaEl.value.length;
    charactersNumberEl.textContent = totalCharacters;

    const twitterCharacters = 280 - totalCharacters;
    twitterNumberEl.textContent = twitterCharacters;

    const facebookCharacters = 500 - totalCharacters;
    facebookNumberEl.textContent = facebookCharacters;


    if (twitterCharacters < 0){
        twitterNumberEl.style.color = 'red';
        // twitterNumberEl.classList.add('stat__number--limit')
    } else{
        twitterNumberEl.classList.remove('stat__number--limit')
    }

    if (facebookCharacters < 0){
        // twitterNumberEl.style.color = 'red';
        twitterNumberEl.classList.add('stat__number--limit')
    } else{
        twitterNumberEl.classList.remove('stat__number--limit')
    }

    let wordsCount = textAreaEl.value.split(' ').length;
    if (textAreaEl.value.length ===0){
        wordsCount = 0;
    }
    wordsNumberEl.textContent=wordsCount



}




textAreaEl.addEventListener('input', countCharacters)