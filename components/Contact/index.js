import Link from 'next/link';
import Button from '../Shared/Button'

function index() {
  return (
    <section className="relative">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 className="h2 mb-4 text-gray-100">Contact Us</h2>
          <p className="text-xl text-gray-400 mb-12">Have a question you would like to ask? Drop us a message.</p>
          <Link href="/contact">
            <Button default style="px-6 py-3 transform transition duration-200 ease-in-out hover:scale-105">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default index
