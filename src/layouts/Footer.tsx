import { Image } from '@/components/common/Image'
import { InternalLink } from '@/components/common/InternalLink'

export function Footer() {
  return (
    <footer className="bg-white rounded-lg dark:bg-gray-900 m-4 md:px-0">
      <div className="container w-full _max-w-screen-xl mx-auto py-4 md:py-8 md:px-0">
        <div className="sm:flex sm:items-center sm:justify-between">
          <InternalLink
            href="https://www.ducxinh.com/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image
              alt="Nix"
              className="rounded"
              src="/assets/images/logo.png"
              height={35}
              width={35}
            />

            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Nix
            </span>
          </InternalLink>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <InternalLink href="#" className="hover:underline mr-4 md:mr-6">
                About
              </InternalLink>
            </li>
            <li>
              <InternalLink href="#" className="hover:underline mr-4 md:mr-6">
                Privacy Policy
              </InternalLink>
            </li>
            <li>
              <InternalLink href="#" className="hover:underline mr-4 md:mr-6">
                Licensing
              </InternalLink>
            </li>
            <li>
              <InternalLink href="#" className="hover:underline">
                Contact
              </InternalLink>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 text-center">
          © 2023{' '}
          <InternalLink href="https://www.ducxinh.com/" className="hover:underline">
            Nix
          </InternalLink>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}
