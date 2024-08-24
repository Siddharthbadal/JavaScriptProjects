import Heading from '@/components/Heading'
import ShareLinkBtn from '@/components/ShareLinkBtn';
import { dataFromMDFile, getSlugs } from '@/lib/reviews'


export async function generateStaticParams(){
  const slugs = await getSlugs()
  return slugs.map((slug)=>({ slug  }));
}


export async function generateMetaData({params: {slug}}){
  // console.log('generateMetaData', props)
  const review = await dataFromMDFile(slug);
  return {
    title: review.title,
  };

}

const ReviewPage = async ({params: {slug}}) => {
  // console.log(props)
  // const review = await dataFromMDFile(props.params.slug);
  const review = await dataFromMDFile(slug);
  // console.log('rendering', slug);
  return (
    <>
    
      <Heading>
          {review.title}
      </Heading>
      <div className='flex gap-5 justify-around items-baseline mx-12 my-1 '>
      <p className='italic pb-2 text-center'>{review.date} 
       </p>
       
       <span className=' hover:bg-slate-200 '><ShareLinkBtn/></span>
      
      </div>

      <img src={review.image1} alt="jbl" 
        width={650} height={400}
        className='mb-2 rounded m-auto ' />
        <article dangerouslySetInnerHTML={{__html:review.body}} 
        className='font-monospace mt-5 prose m-auto max-w-screen-sm'/>
        <img src={review.image2} alt="jbl" 
        width={650} height={400}
        className='mt-3 mb-2 rounded m-auto' />




        
            
    </>
  )
}

export default ReviewPage