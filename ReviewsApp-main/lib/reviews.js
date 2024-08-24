import {marked} from 'marked';
import { readdir, readFile } from 'node:fs/promises';
import matter from 'gray-matter';
import { log } from 'node:console';

// function to fetch recently added reviews on the home page
export async function getFeaturedReview(){
  const reviews = await getReviews();
  // console.log(reviews)
  const featuredReview =  reviews.slice(0,2);
  // console.log("featured", featuredReview)
  return featuredReview
}

// read markdown file
export const dataFromMDFile = async (slug)=>{
    const text = await readFile(`./content/reviews/${slug}.md`, 'utf-8')
    const {content, data: {title, date, image1, image2, oneline}} = matter(text)
    const body = marked(content)
    return {slug, title, date, image1, image2, oneline, body}
  
  }

// creating the reviews from the list
export async function getReviews(){
  const slugs = await getSlugs()
  // console.log(slugs)
  const reviewsList = [];
  for (const slug of slugs){
    const review = await dataFromMDFile(slug)
    reviewsList.push(review)
  }

  // featured card on the date basis 
  reviewsList.sort((a, b)=> b.date.localeCompare(a.date));
  return reviewsList;
}

// creating slugs by reading markdown and removing extension
export async function getSlugs(){
  const files = await readdir('./content/reviews');
  return files.filter((file)=> file.endsWith('.md')).map((file)=> file.slice(0, -'.md'.length));
}