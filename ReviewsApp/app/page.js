
import Link from 'next/link'
import "./globals.css"
import Heading from '@/components/Heading'
import { getFeaturedReview } from '@/lib/reviews'

//  home page
const HomePage = async () => {
  const reviews = await getFeaturedReview()
  return (
    <>
    <img className="m-auto rounded-t-lg object-cover h-16 w-16" src="icon.png" alt= ""/>
      <Heading>Reviews App</Heading>
      

    <main className="m-auto flex flex-row flex-wrap">
      {reviews.map((review)=>(

    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-auto mb-5">
      <Link href={`/reviews/${review.slug}`}>
      
          <img className="rounded-t-lg object-cover h-48 w-96" src={review.image1} alt={review.title} />

      </Link>

    <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{review.title}</h5>
            <p  className='text-white font-monospace prose m-auto max-w-screen-sm mb-2'>
              {review.oneline}
          </p>

          <Link href={`/reviews/${review.slug}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </Link>
    </div>
    </div>

))}
    </main>

    </>
  )
}

export default HomePage

