// html selector
const textAreaEl = document.querySelector('.form__textarea');
const counterEl = document.querySelector('.counter');
const formEl = document.querySelector('.form');
const feedbackListEl= document.querySelector('.feedbacks');
const submitBtnEl = document.querySelector('.submit-btn');
const spinnerEl = document.querySelector('.spinner')
const hashtagListEl= document.querySelector('.hashtags');

// const BASE_URL = 'https://bytegrad.com/course-assets/js/1/api'  
const BASE_URL = 'https://techsidh1.github.io/feedback-data-api/data.json'

// global Variables
const MAX_LIMIT = 150;

const renderFeedbackItem= (feedbackItem)=>{
     const  feedbackItemHTML =  `  
            <li class="feedback">
                <button class="upvote">
                    <i class="fa-solid fa-caret-up upvote__icon"></i>
                    <span class="upvote__count">${feedbackItem.upvoteCount}</span>
                </button>
                <section class="feedback__badge">
                    <p class="feedback__letter">${feedbackItem.badgeLetter}</p>
                </section>
                <div class="feedback__content">
                    <p class="feedback__company">${feedbackItem.company}</p>
                    <p class="feedback__text">${feedbackItem.text}</p>
                    
                </div>
                <p class="feedback__date">
                ${feedbackItem.daysAgo === 0? 'JUST NOW': `${feedbackItem.daysAgo}d`}
                </p>
            </li>`;
        feedbackListEl.insertAdjacentHTML('beforeend', feedbackItemHTML)
}


//  Counter Component 
// handling count of characters when text entered
const inputHandler =()=>{
    
    const numCharTyped = textAreaEl.value.length;
    
    const charsLeft = MAX_LIMIT - numCharTyped;

    counterEl.innerText = charsLeft;
};

textAreaEl.addEventListener('input', inputHandler);


// Form and Feedback publish

// settime out with correct class 
const showVisualIndicator =(check)=>{
    const className = check === 'valid' ? 'form--valid' : 'form--invalid';
    formEl.classList.add(className)
    setTimeout(()=>{
        formEl.classList.remove(className)
    } , 1500)
}

const formSubmitHandler = (e) => {
        // prevent from's default submit behaviour
        e.preventDefault();
        //  get text from textarea
        const text = textAreaEl.value;
        

        //  text validations 
        if (text.includes('#') && text.length >= 5){
            showVisualIndicator('valid')
        } else{
            showVisualIndicator('invalid');
            return;
        }

      

    const hashtag =  text.split(' ').find(word => word.includes('#'))
    const company = hashtag.substring(1)
    const badgeLetter = company.substring(0, 1).toUpperCase();
    // console.log(hashtag, companyName, badgeLetter)

    const upvoteCount = 0;
    const daysAgo= 0;
    //  render feedback object to list
    const feedbackObjItem = {
        company: company,
        badgeLetter: badgeLetter,
        upvoteCount: upvoteCount,
        daysAgo : daysAgo,
        text:text,
        
    };

    renderFeedbackItem(feedbackObjItem)


    // send data to server post request
    fetch(`${BASE_URL}`, {
        method:'POST',
        body: JSON.stringify(feedbackObjItem),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(response =>{
            if (!response.ok){
                console.log("something went wrong!")
                return;
            }
            
            console.log('Successfully submitted')
        }).catch(error=>{
            console.log(error)
        })
    

    //  clear textarea
    textAreaEl.value = '';    
    //  unfoucs submit button 
    submitBtnEl.blur();
    //  reset counter
    counterEl.textContent= MAX_LIMIT;

}

formEl.addEventListener('submit', formSubmitHandler)


// feedback list component
const clickHandler = (event)=>{
    // get clicked right html element
    const clickedEl = event.target;

    // # determine if user clicked for upvote or expand
    const upvoteIntention = clickedEl.className.includes('upvote')

    // check either for upvote or expand feedback Item
    if (upvoteIntention){
        //  get the closet upvote button 
        const upvoteBtnEl = clickedEl.closest('.upvote')


        // disabl upvoteBtnEl to prevent double click
        upvoteBtnEl.disabled = true;

        // select upvote_count element by within upvote button 
        const upvoteCountEl = upvoteBtnEl.querySelector('.upvote__count')
        
        // get the current upvote count as a number by adding +
        let upvoteCount = +upvoteCountEl.textContent;
        console.log(upvoteCount)

        //  increment | ++upvoteCount means first increment and then assign
        
        upvoteCountEl.textContent = ++upvoteCount;

    } else{
        // expand the clicked feedback item by finding cloest element
        clickedEl.closest('.feedback').classList.toggle('feedback--expand')
    }


}


feedbackListEl.addEventListener('click', clickHandler)




// fetching feedback list from server get request

fetch(`${BASE_URL}`)
    .then(response => {
        return response.json();
        
    })
    .then(data =>{
        spinnerEl.remove()
        console.log(data.feedbacks)
        // iterate over feedbacks from data and render the list element
        data.feedbacks.slice(0,10).forEach((feedbackObjItem=>{
            renderFeedbackItem(feedbackObjItem)
        
        }));
    })
    .catch(error =>{
        feedbackListEl.textContent = `Failed to fetch feedbacks! Come back again, Simon!😎`;
    })



    const hashTagClickHandler = (event) =>{
            // get the clicked element 
            const clickedEl = event.target;

            if (clickedEl.className === 'hashtags'){
                return;
            }
            //  extract company name
            const companyNameFromHashTag = clickedEl.textContent.substring(1).toLowerCase().trim();
            console.log(companyNameFromHashTag)
            // iterate over each feedback item 
            feedbackListEl.childNodes.forEach(childNode =>{

                //  stop funtion if clicked outside button
                if (childNode.nodeType === 3) return;

                // extract company name
                const companyNameFromFeedbackItem = childNode.querySelector('.feedback__company').textContent.toLowerCase().trim();
                console.log(companyNameFromFeedbackItem)

                // remove all feedback if companyname are not equal
                if (companyNameFromHashTag !== companyNameFromFeedbackItem){
                    childNode.remove();
                }
            });
            
    }

    hashtagListEl.addEventListener('click', hashTagClickHandler)