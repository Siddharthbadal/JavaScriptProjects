// constatns

export const BASE_API_URL='https://bytegrad.com/course-assets/js/2/api';
export const DEFAULT_DISPLAY_TIME = 3000;
export const RESULT_PER_PAGE = 7;

export const state ={
    searchJobItems: [],
    currentPage: 1,
};



// selectors
export const bookmarksBtnEl = document.querySelector('.bookmarks-btn');
export const errorEl = document.querySelector('.error');
export const errorTextEl = document.querySelector('.error__text');
export const jobDetailsEl = document.querySelector('.job-details');
export const jobDetailsContentEl = document.querySelector(".job-details__content");
export const jobListBookmarksEl = document.querySelector('.job-list--bookmarks');
export const jobListSearchEl = document.querySelector(".job-list--search");
export const numberEl = document.querySelector(".count__number");
export const paginationEl = document.querySelector(".pagination");
export const paginationBtnNextEl = document.querySelector(".pagination__button--next");
export const paginationBtnBackEl = document.querySelector(".pagination__button--back");
export const paginationNumberNextEl = document.querySelector(".pagination__number--next");
export const paginationNumberBackEl = document.querySelector(".pagination__number--back");
export const searchFormEl = document.querySelector(".search");
export const searchInputEl = document.querySelector(".search__input");
export const sortingEl = document.querySelector(".sorting");
export const sortingBtnRelevantEl = document.querySelector(".sorting__button--relevant");
export const sortingBtnRecentEl = document.querySelector(".sorting__button--recent");
export const spinnerSearchEl = document.querySelector(".spinner--search");
export const spinnerJobDetailsEl = document.querySelector(".spinner--job-details");
export const jobsAvilableEL= document.querySelector('.jobs-available');


// Helper or Utilities Functions
export const getData = async (completeURL) =>{
    const response = await fetch(completeURL)
    const data = await response.json()
    
    if(!response.ok){  
        throw new Error(data.description); 
    }

    return data;
};