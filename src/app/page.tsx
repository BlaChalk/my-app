import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 bg-pink-100">

      <div className='flex justify-between fixed w-screen top-0 p-8'>
        <div className='w-40 h-40'>
          <svg viewBox="0 0 127 23" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="logo">
            <path d="M4.0402 11.6641H7.5682C11.5282 11.6641 14.0002 9.76807 14.0002 6.21607C14.0002 2.64007 11.5282 0.768066 7.5682 0.768066H0.512207V18.0001H4.0402V11.6641ZM4.0402 8.66407V3.76807H7.3762C9.4402 3.76807 10.4962 4.65607 10.4962 6.21607C10.4962 7.75207 9.4402 8.66407 7.3762 8.66407H4.0402Z" fill="#111111"></path>
            <path d="M18.8238 18.216C20.4798 18.216 21.7518 17.712 22.5678 16.824C23.1198 17.88 24.4158 18.312 26.5518 18V15.48C25.8078 15.576 25.5198 15.36 25.5198 14.688V9.52799C25.5198 6.59999 23.5998 5.13599 20.4078 5.13599C17.4078 5.13599 15.4878 6.86399 14.9118 8.99999L18.1038 9.59999C18.3918 8.47199 19.0398 7.91999 20.2878 7.91999C21.6798 7.91999 22.2318 8.59199 22.2318 9.67199V9.86399L19.0878 10.464C16.5438 10.92 14.5278 11.976 14.5278 14.496C14.5278 16.728 16.3518 18.216 18.8238 18.216ZM22.2318 13.512C22.2318 14.928 20.9118 15.672 19.4958 15.672C18.4878 15.672 17.8398 15.168 17.8398 14.304C17.8398 13.296 18.6558 12.936 19.7598 12.72L22.2318 12.216V13.512Z" fill="#111111"></path>
            <path d="M35.2801 18.264C38.7601 18.264 40.7761 15.288 40.7761 11.688C40.7761 8.11199 38.7601 5.13599 35.2801 5.13599C33.6961 5.13599 32.4961 5.75999 31.7521 6.67199V5.37599H28.3921V22.272H31.7521V16.704C32.4961 17.64 33.6961 18.264 35.2801 18.264ZM31.6801 11.352C31.6801 9.19199 32.8801 8.01599 34.4881 8.01599C36.3841 8.01599 37.3921 9.52799 37.3921 11.688C37.3921 13.872 36.3841 15.384 34.4881 15.384C32.8801 15.384 31.6801 14.184 31.6801 12.048V11.352Z" fill="#111111"></path>
            <path d="M48.912 18.264C51.4319 18.264 53.568 16.968 54.48 14.664L51.648 13.656C51.264 14.88 50.232 15.504 48.936 15.504C47.28 15.504 46.1039 14.352 45.8639 12.432H54.5519V11.448C54.5519 7.91999 52.5359 5.13599 48.792 5.13599C45.2159 5.13599 42.6479 7.96799 42.6479 11.688C42.6479 15.6 45.1919 18.264 48.912 18.264ZM48.7679 7.82399C50.3999 7.82399 51.192 8.90399 51.216 10.152H45.9839C46.3919 8.61599 47.4239 7.82399 48.7679 7.82399Z" fill="#111111"></path>
            <path d="M63.9281 5.35195C63.6881 5.32795 63.4481 5.30396 63.1121 5.30396C61.5521 5.30396 60.3041 6.04796 59.7521 7.15196V5.37596H56.3921V17.9999H59.7521V11.5919C59.7521 9.64796 61.0961 8.56796 62.8481 8.56796C63.2561 8.56796 63.5441 8.59196 63.9281 8.63996V5.35195Z" fill="#111111"></path>
            <path d="M79.7119 3.81607V0.768066H65.3599V3.81607H70.7839V18.0001H74.3119V3.81607H79.7119Z" fill="#111111"></path>
            <path d="M81.3442 3.88807H84.7762V0.768066H81.3442V3.88807ZM84.7522 5.37607H81.3922V18.0001H84.7522V5.37607Z" fill="#111111"></path>
            <path d="M99.0318 16.608V5.37599H95.6718V6.67199C95.0238 5.80799 93.7278 5.13599 92.1678 5.13599C88.7118 5.13599 86.6958 7.94399 86.6958 11.376C86.6958 14.832 88.7118 17.64 92.1678 17.64C93.7518 17.64 95.0238 16.968 95.6718 16.104V16.968C95.6718 19.056 94.4478 19.92 92.6958 19.92C91.2558 19.92 90.2718 19.152 89.9118 17.904L86.7678 18.816C87.4878 21.288 89.5998 22.536 92.6478 22.536C96.3918 22.536 99.0318 20.424 99.0318 16.608ZM95.6958 11.232V11.568C95.6958 13.632 94.5678 14.808 92.9598 14.808C91.1358 14.808 90.1038 13.488 90.1038 11.376C90.1038 9.26399 91.1358 7.96799 92.9598 7.96799C94.5678 7.96799 95.6958 9.14399 95.6958 11.232Z" fill="#111111"></path>
            <path d="M106.912 18.264C109.432 18.264 111.568 16.968 112.48 14.664L109.648 13.656C109.264 14.88 108.232 15.504 106.936 15.504C105.28 15.504 104.104 14.352 103.864 12.432H112.552V11.448C112.552 7.91999 110.536 5.13599 106.792 5.13599C103.216 5.13599 100.648 7.96799 100.648 11.688C100.648 15.6 103.192 18.264 106.912 18.264ZM106.768 7.82399C108.4 7.82399 109.192 8.90399 109.216 10.152H103.984C104.392 8.61599 105.424 7.82399 106.768 7.82399Z" fill="#111111"></path>
            <path d="M121.928 5.35195C121.688 5.32795 121.448 5.30396 121.112 5.30396C119.552 5.30396 118.304 6.04796 117.752 7.15196V5.37596H114.392V17.9999H117.752V11.5919C117.752 9.64796 119.096 8.56796 120.848 8.56796C121.256 8.56796 121.544 8.59196 121.928 8.63996V5.35195Z" fill="#111111"></path>
            <path d="M124.994 6C125.269 6 125.521 5.95429 125.774 5.85143C126.014 5.76 126.221 5.62286 126.404 5.44C126.587 5.26857 126.725 5.06286 126.84 4.81143C126.943 4.57143 127 4.30857 127 4.01143C127 3.72571 126.943 3.46286 126.84 3.21143C126.725 2.96 126.587 2.75429 126.404 2.57143C126.221 2.38857 126.014 2.25143 125.774 2.14857C125.521 2.05714 125.269 2 124.994 2C124.719 2 124.456 2.05714 124.215 2.14857C123.974 2.25143 123.768 2.38857 123.585 2.57143C123.401 2.75429 123.264 2.96 123.16 3.21143C123.046 3.46286 123 3.72571 123 4.01143C123 4.30857 123.046 4.57143 123.16 4.81143C123.264 5.06286 123.401 5.26857 123.585 5.44C123.768 5.62286 123.974 5.76 124.215 5.85143C124.456 5.95429 124.719 6 124.994 6ZM124.994 2.34286C125.223 2.34286 125.43 2.38857 125.625 2.46857C125.819 2.56 125.991 2.67429 126.14 2.82286C126.289 2.97143 126.404 3.14286 126.496 3.34857C126.576 3.55429 126.622 3.77143 126.622 4.01143C126.622 4.25143 126.576 4.46857 126.496 4.67429C126.404 4.88 126.289 5.05143 126.14 5.2C125.991 5.34857 125.819 5.46286 125.625 5.54286C125.43 5.62286 125.223 5.65714 124.994 5.65714C124.765 5.65714 124.547 5.62286 124.352 5.54286C124.158 5.46286 123.986 5.34857 123.837 5.2C123.688 5.05143 123.573 4.88 123.493 4.67429C123.401 4.46857 123.367 4.25143 123.367 4.01143C123.367 3.77143 123.401 3.55429 123.493 3.34857C123.573 3.14286 123.688 2.97143 123.837 2.82286C123.986 2.67429 124.158 2.56 124.352 2.46857C124.547 2.38857 124.765 2.34286 124.994 2.34286ZM125.865 4.94857L125.854 4.54857C125.854 4.38857 125.819 4.28571 125.762 4.21714C125.705 4.16 125.636 4.10286 125.567 4.04571C125.625 4.01143 125.693 3.95429 125.785 3.88571C125.865 3.81714 125.911 3.71429 125.911 3.55429C125.911 3.31429 125.808 3.13143 125.625 3.00571C125.533 2.96 125.441 2.92571 125.361 2.90286C125.269 2.89143 125.178 2.88 125.086 2.88H124.077V5.13143H124.547V4.25143H124.983C125.155 4.25143 125.269 4.28571 125.315 4.33143C125.361 4.38857 125.395 4.46857 125.395 4.58286V4.94857C125.395 5.00571 125.407 5.05143 125.43 5.08571C125.43 5.10857 125.441 5.13143 125.464 5.13143H125.923C125.911 5.13143 125.9 5.10857 125.9 5.08571C125.877 5.05143 125.865 5.00571 125.865 4.94857ZM125.109 3.85143H124.547V3.28H125.097C125.189 3.28 125.269 3.30286 125.338 3.33714C125.407 3.38286 125.441 3.45143 125.441 3.55429C125.441 3.66857 125.407 3.73714 125.338 3.78286C125.269 3.82857 125.201 3.85143 125.109 3.85143Z" fill="#111111"></path>
          </svg>
        </div>
        <div className='flex'>
          <div className='m-2'>
            Portfolio
          </div>
          <div className='m-2'>
            About
          </div>
          <div className='m-2'>
            Services
          </div>
          <div className='m-2'>
            Insigts
          </div>
        </div>

        <div>
          Contact Us
        </div>
      </div>

      <div className='flex flex-col justify-center items-center'>
        <div className=' text-9xl'>
          DIGITAL
        </div>
        <div className='text-9xl'>
          DESIGN
        </div>
        <div className='text-3xl'>
        WE’RE ON A MISSION TO MAKE THE WORLD LOOK BETTER.
        </div>
      </div>

      <div className='flex flex-col mt-80'>
        <div className='relative'>
          <Image 
            src="https://assets.website-files.com/60e4912ee7c15fb303f4c588/63fcc99b76ed7aef6b6bdae1_about-better.webp"
            className='rounded-2xl'
            width={500}
            height={500}
            alt="" 
          />
          <div className='absolute top-1/2 -translate-y-24 -right-44'>
            <svg width="235" height="277" viewBox="0 0 235 277" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M63.2357 32.4978C92.7292 46.8703 122.826 70.1375 131.386 103.472C136.856 124.775 127.49 150.722 108.862 162.539C91.2693 173.699 68.7682 177.599 52.1883 163.003C43.5462 155.395 39.3438 144.96 45.5264 134.326C54.9721 118.078 81.4419 115.263 97.8733 118.527C149.153 128.716 197.946 171.453 212.659 221.871" stroke="#111111" stroke-width="4" stroke-linecap="round"></path>
              <path d="M219.888 183.294C219.185 192.445 216.936 213.283 213.558 223.42" stroke="#111111" stroke-width="4" stroke-linecap="round"></path>
              <path d="M213.558 223.42C205.814 218.493 187.791 207.796 177.654 204.419" stroke="#111111" stroke-width="4" stroke-linecap="round"></path>
            </svg>
          </div>
        </div>
        <div className='text-9xl'>
          BREAK
        </div>
      </div>

      <div className='h-40'></div>

      <div className='flex pb-12 border-b-2 border-black'>
        <div className='flex flex-1 flex-col text-sm'>
          <div>Starting</div>
          <div>From Scratch</div>
        </div>
        <div className='flex flex-1 flex-col text-3xl'>
          <p>
            <span className='ml-96'>In</span>
            <span> 2008, Marc and Jason Debiak had a realization — “everything around us is ugly.” Designs were thrown together haphazardly, brands were barely scratching the surface of what was possible, and, at the end of the day, the world just needed to look better.</span>
          </p>
          <br />
          <br />
          <p>
            <span className='ml-96'>As</span>
            <span> luck would have it, they were the pair positioned to fix it. As punk rock music professionals, they’d spent careers building bands with rockstar promise but shoestring budgets, leading to a DIY, nothing-is-impossible mentality that focused on bringing out what made bands different.</span>
          </p>
        </div>
      </div>

      <div className='flex flex-col mt-2'>
        <div className='flex flex-col'>
            <h3 className='text-6xl'>NOT</h3>
            <h3 className='text-6xl'>MUCH</h3>
        </div>
        <div className='flex justify-between'>
          <div className='flex flex-1 flex-col'>
            <div className='relative'>
              <Image 
                src="https://assets.website-files.com/60e4912ee7c15fb303f4c588/63f8f8749480ed5f4b9c5e46_notmuch-haschanged.webp"
                className='rounded-2xl'
                width={500}
                height={500}
                alt="" 
              />
            </div>
          </div>
          <div className='flex flex-1 flex-col items-end'>
            <h3 className='text-6xl'>HAS</h3>
            <h3 className='text-6xl'>CHANGED</h3>
            <div>
              <span className='ml-96 text-3xl'>Our</span>
              <p className='text-3xl'> processes might be stronger, our team of visionary talent may be bigger, but one thing remains the same. Our mission is to discover and create new. Whether it’s a vision for design that’s never been seen, a new way of telling stories that have never been told, or embracing the latest tech to blow the limits of what’s possible sky-high, we’re always taking the road less traveled to help brands break through the noise.</p>
              <br />
              <br />
              <span className='ml-96 text-3xl'>So</span>
              <p className='text-3xl'> you can find us at the intersection of invention and design, on the edge of what we know and what we still have to learn, exploring the places no one else has thought to look.</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the Next.js 13 playground.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
    </main>
  )
}
