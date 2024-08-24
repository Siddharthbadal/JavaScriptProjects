import React from 'react'
import Link from 'next/link'
import Heading from '@/components/Heading'
import { getReviews } from '@/lib/reviews'
import ShareLinkBtn from '@/components/ShareLinkBtn'


export const metadata = {
  title: "Reviews " 
  }

const Reviews = async () => {
  const reviews = await getReviews();
  // console.log(reviews);
  

  return (
    <>
        <Heading>All Reviews</Heading>
        
        <ul className='flex flex-row gap-4 flex-wrap'>
          {reviews.map((review)=>(

<li>
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-auto">
    <Link href={`/reviews/${review.slug}`}>
    
        <img className="rounded-t-lg object-cover h-48 w-96" src={review.image1} alt={review.title} width={480} height={400}/>
    
    </Link>
    <div className="p-5">
    
            <h5 className="mb-5 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {review.title}</h5>

            

            <p  className='text-white font-monospace prose m-auto max-w-screen-sm mb-2'>
              {review.oneline}
          </p>
                        
      <Link href={`/reviews/${review.slug}`} 
      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </Link>
    </div>
</div>

</li>
          

          ))}
          
        </ul>


        











    </>
  )
}

export default Reviews