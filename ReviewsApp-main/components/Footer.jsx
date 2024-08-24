import Link from 'next/link'

const Footer = () => {
  return (
    <>
        <footer className=" font-monospace border-t py-3 text-center text-xs text-blue-600">
          <p>Product Reviews by 
            <Link href="https://www.linkedin.com/in/siddharthbadal/" 
            target="_blank"  
            className='text-blue-600 hover:text-blue-900'>
              Siddharth
            </Link>
          </p>
          
        </footer>
    </>
  )
}

export default Footer