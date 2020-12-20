import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer'
import Button from '../components/Shared/Button'

function contact() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-gray-900">
    <Header />
    <main className="flex-grow">
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-40 pb-16 md:pt-40 md:pb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="h2 mb-3 text-gray-100">Do you have a question?</h2>
            <h2 className="h2 text-gray-100">We're here to help.</h2>
          </div>
          <div className="max-w-md mx-auto">
            <form name="contact" method="POST" action="/success" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-500 text-sm font-medium mb-1" htmlFor="name">Name <span className="text-red-600">*</span></label>
                  <input id="name" type="text" name="name" className="form-input mt-1 block w-full bg-gray-800 text-gray-400 rounded-md border-none p-3" placeholder="Enter your name" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-500 text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
                  <input id="email" type="email" name="email" className="form-input mt-1 block w-full bg-gray-800 text-gray-400 rounded-md border-none p-3" placeholder="Enter your email address" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-500 text-sm font-medium mb-1" htmlFor="password">Message <span className="text-red-600">*</span></label>
                  <textarea type="textarea"  name="message" className="form-input mt-1 block w-full bg-gray-800 text-gray-400 rounded-md border-none p-3" placeholder="Enter your message" rows="3" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="flex w-full px-3 justify-center ml-4">
                  <Button default style="px-6 py-3 transform transition duration-200 ease-in-out hover:scale-105">
                    Submit
                  </Button>
                </div>
              </div>
            </form>
            <div className="flex justify-center items-center my-6">
              <div className="border-t border-gray-300 flex-grow mr-3" aria-hidden="true"></div>
              <div className="text-gray-500 italic">Or</div>
              <div className="border-t border-gray-300 flex-grow ml-3" aria-hidden="true"></div>
            </div>
            <div className="flex w-full px-3 justify-center ml-2">
              <Link href="/">
                <Button inverse style="px-6 py-3 transform transition duration-200 ease-in-out hover:scale-105">
                  Return to homepage
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer className="fixed bottom-0" />
  </div>
  )
}

export default contact
