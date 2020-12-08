import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer'
import Button from '../components/Shared/Button'

function success() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-gray-900">
    <Header />
    <main className="flex-grow">
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="max-w-3xl mx-auto text-center pb-6 md:pb-20">
              <h2 className="h2 mb-3 text-gray-100">Thank you, &nbsp;your message has been sent</h2>
              <p className="text-xl text-gray-400 mt-8 mb-8">We we get back to you as soon as we can.</p>
            </div>
            <div className="max-w-md mx-auto">
              <div className="flex w-full px-3 justify-center ml-2">
                <Link href="/">
                  <Button inverse style="px-6 py-3 transform transition duration-200 ease-in-out hover:scale-105">
                    Return to homepage
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer className="fixed bottom-0" />
  </div>
  )
}

export default success
