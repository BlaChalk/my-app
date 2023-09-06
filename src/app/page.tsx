'use client'
import Image from 'next/image'
import Header from '@/app/components/Header'
import CharacterIntro from '@/app/components/CharacterIntro'

export default function Home() {
  const handleOnScroll = () => {

    // 計算 section3-img 是否變為浮動圖 
    const scrollY = window.scrollY
    const section3OffsetTop = document.getElementById('section3')?.offsetTop || 4000
    const section4OffsetTop = document.getElementById('section4')?.offsetTop || 5400
    const el = document.getElementById('section3-img')
    if (scrollY > section4OffsetTop - 700) {
      el?.setAttribute('style', 'position: relative; transform: translateY(25rem)')
    } else if (scrollY > section3OffsetTop + 350) {
      el?.setAttribute('style', 'position: fixed; top: 4rem; width: 45vw')
    } else if (scrollY < section3OffsetTop + 350) {
      el?.setAttribute('style', '')
    }
  }

  return (
    <main 
      className="flex min-h-screen flex-col items-center justify-between p-12 bg-pink-100 font-PtypeText"
      onWheel={handleOnScroll}
    >

      <Header />

      <div className='flex flex-col justify-center items-center mt-20'>
        <div className='text-9xl font-PtypeDisplay'>
          DIGITAL
        </div>
        <div className='text-9xl font-PtypeDisplay'>
          DESIGN AGENCY
        </div>
        <div className='text-xl'>
        WE’RE ON A MISSION TO MAKE THE WORLD LOOK BETTER.
        </div>
      </div>

      <div className='flex flex-col items-center mt-80'>
        <div className='flex relative w-screen -ml-10 pl-20'>
          <Image 
            src="https://assets.website-files.com/60e4912ee7c15fb303f4c588/63fcc99b76ed7aef6b6bdae1_about-better.webp"
            className='rounded-2xl w-1/2'
            width={500}
            height={500}
            alt="" 
          />
          <div className='absolute top-1/2 -translate-y-6 left-1/2 -translate-x-6'>
            <svg width="235" height="277" viewBox="0 0 235 277" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M63.2357 32.4978C92.7292 46.8703 122.826 70.1375 131.386 103.472C136.856 124.775 127.49 150.722 108.862 162.539C91.2693 173.699 68.7682 177.599 52.1883 163.003C43.5462 155.395 39.3438 144.96 45.5264 134.326C54.9721 118.078 81.4419 115.263 97.8733 118.527C149.153 128.716 197.946 171.453 212.659 221.871" stroke="#111111" stroke-width="4" stroke-linecap="round"></path>
              <path d="M219.888 183.294C219.185 192.445 216.936 213.283 213.558 223.42" stroke="#111111" stroke-width="4" stroke-linecap="round"></path>
              <path d="M213.558 223.42C205.814 218.493 187.791 207.796 177.654 204.419" stroke="#111111" stroke-width="4" stroke-linecap="round"></path>
            </svg>
          </div>
        </div>
        <div className='text-12xl font-PtypeDisplay'>
          BREAK
        </div>
        <div className='text-6xl font-Quakerhack'>
          THROuGH
        </div>
        <div>
        <svg width="545" height="72" viewBox="0 0 545 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.7" d="M101.868 40.6863C88.3181 40.2403 8.24439 49.6536 3.7364 49.6974C-1.22591 49.6686 3.25317 39.1124 7.22339 37.1677C8.5468 36.5195 10.5627 36.2207 14.8369 35.9963C19.1155 35.8681 66.4636 30.7775 108.002 26.8601C108.002 26.8601 171.772 20.9072 268.012 14.8893C275.206 14.415 269.613 15.3839 278.148 14.6464C296.343 13.1122 336.417 11.6832 350.122 10.5777C371.467 8.87818 353.276 10.5086 413.601 8.11266C417.654 7.99627 446.013 6.79658 449.824 6.30709C451.394 6.12817 452.748 6.15353 452.757 6.34598C453.207 6.32236 493.541 5.65134 493.554 5.94002C493.788 6.12066 495.146 6.24224 496.267 6.08695C498.507 5.77637 541.969 4.45885 542.449 5.10881C544.112 6.95067 536.585 14.9661 531.49 16.9698C525.95 19.0935 499.701 17.0957 475.872 18.7328C475.872 18.7328 474.293 18.7192 471.369 18.8728C367.76 21.5159 369.365 22.1068 348.466 23.6865C345.96 23.1429 335.907 25.2141 330.001 24.2702C327.505 23.919 309.729 24.756 305.697 25.3535C304.801 25.497 298.502 25.8277 289.279 26.312C279.831 26.8082 210.534 30.2539 201.606 32.2661C181.091 32.3787 121.171 38.7081 101.868 40.6863Z" fill="#111111"></path>
          <path opacity="0.7" d="M444.343 9.13803C454.078 9.97752 529.626 4.94426 537.306 5.21616C541.836 5.65365 534.182 15.9011 529.972 17.5702C528.419 18.1344 526.849 18.3135 522.786 18.2375C517.139 18.0518 469.442 20.5592 436.387 22.683C435.249 22.4533 432.147 23.6781 431.679 23.3166C431.221 23.1476 422.667 23.5008 410.068 24.1631C365.308 26.8057 332.054 29.5191 289.138 33.0299C282.397 33.5773 287.542 32.6313 279.684 33.4304C263.079 35.2685 226.208 37.786 213.652 39.4112C191.011 42.4353 205.089 39.5718 155.714 44.87C140.455 46.5409 125.87 48.1763 122.971 48.9078C121.634 49.2677 120.509 49.3268 120.271 49.0497C120.046 49.0616 82.7728 52.6619 82.7684 52.5656C82.3097 52.3967 81.1804 52.3595 80.2935 52.6957C78.5067 53.0792 39.2737 58.2303 38.3476 57.6999C35.7942 56.0968 38.3524 47.8546 42.3018 45.427C44.2743 44.165 51.9064 43.3777 61.7883 42.4722C97.9457 39.1236 76.1395 40.656 108.913 37.2922C199.828 27.9764 170.239 31.9449 212.396 26.64C214.898 27.0877 223.81 24.6888 229.703 25.3442C232.195 25.5992 248.822 24.2425 252.396 23.4755C253.067 23.3438 259.133 22.8318 267.673 22.1898C312.398 18.7769 344.328 16.7123 349.914 15.55C360.064 15.5955 389.053 13.2994 444.343 9.13803Z" fill="#111111"></path>
          <path opacity="0.7" d="M110.613 53.9474C106.533 53.4863 89.6594 54.373 85.1642 54.7057C70.3201 55.5822 75.4946 55.3103 60.6549 56.2831C55.7098 56.6395 39.9789 57.8521 37.9453 57.7659C34.3195 57.3775 38.814 47.1056 42.1186 45.388C43.2173 44.7513 44.5627 44.5841 47.7255 44.7073C50.434 44.758 81.6883 42.7297 84.1586 42.5034C100.798 41.436 116.992 40.4886 116.992 40.4886C117.905 40.7301 120.336 39.6374 120.804 39.9988C121.5 40.4447 148.048 39.0497 175.279 37.8117C185.632 37.3642 233.124 35.3511 235.149 35.2447C240.552 35.0572 236.3 35.7632 242.595 35.3359C256.085 34.434 285.388 34.1487 295.729 33.4123C304.044 32.7824 305.619 32.6996 313.524 32.9597C320.295 33.0864 363.997 32.0444 369.145 31.1949C370.266 31.0395 371.17 31.0885 371.179 31.281C371.629 31.2574 401.166 31.1527 401.175 31.3452C401.409 31.5259 402.318 31.6712 403.213 31.5276C404.779 31.2524 436.752 30.1512 437.233 30.8015C438.445 32.6677 432.491 40.6038 428.52 42.5495C424.329 44.6032 404.387 42.4667 387.31 43.8465C302.345 45.0303 311.816 45.0151 293.381 46.2733C291.547 45.5977 284.188 47.4319 279.857 46.405C278.03 45.922 264.964 46.2226 261.832 46.7732C261.162 46.9049 256.433 47.0569 249.675 47.219C242.917 47.3811 233.904 47.5652 224.897 47.8456C219.943 48.0094 189.311 48.847 184.851 49.9499C169.716 49.3942 115.112 53.711 110.613 53.9474Z" fill="#111111"></path>
          <path opacity="0.7" d="M418.017 30.1213C420.107 31.4627 436.743 30.0036 438.812 30.8622C439.518 31.5025 432.318 42.239 431.668 42.8541C431.239 43.3607 430.793 43.481 430.325 43.1185C429.166 42.4055 418.137 43.0846 415.665 43.3119C415.427 43.0341 415.019 44.0235 414.777 43.6491C414.53 43.1782 408.226 43.5111 407.1 43.5705C397.197 44.1902 391.373 45.1752 389.125 45.3907C388.004 45.5467 388.65 44.8351 387.311 45.1961C384.41 45.93 377.651 46.1901 375.658 47.0696C374.108 47.7322 373.658 47.756 371.848 47.658C369.813 47.5719 360.87 49.4958 360.454 50.2921C360.463 50.4853 360.237 50.4971 360.004 50.3159C360.004 50.3159 353.725 51.2282 353.495 51.1435C353.262 50.9622 353.032 50.8776 352.816 51.0826C352.82 51.1792 352.374 51.2995 351.932 51.5164C351.048 51.9502 347.497 53.2992 346.805 52.9486C344.026 51.3531 336.077 45.0945 334.632 43.0414C333.192 41.0849 341.34 41.6225 344.416 39.718C350.231 38.5398 358.736 36.9293 364.794 36.1255L368.8 34.8493C369.727 35.3811 370.776 33.5835 372.624 34.5506C373.321 34.9977 376.915 34.6144 377.34 34.0112C377.56 33.9028 378.682 33.7468 380.479 33.5551C382.276 33.3634 384.753 33.2327 387.225 33.0053C392.175 32.6472 397.12 32.1925 397.765 31.4809C400.51 32.3039 407.91 31.2356 418.017 30.1213Z" fill="#111111"></path>
        </svg>
        </div>
      </div>

      <div className='h-40'></div>

      <div className='flex pb-12 border-b-2 border-black'>
        <div className='flex flex-1 flex-col text-sm'>
          <div>Starting</div>
          <div>From Scratch</div>
        </div>
        <div className='flex flex-1 flex-col ml-20 text-xl'>
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

      <div id="section3" className='flex flex-col mt-2'>
        <div className='flex flex-col font-PtypeDisplay'>
            <div className='text-6xl'>NOT</div>
            <div className='text-6xl'>MUCH</div>
        </div>
        <div className='flex justify-between'>
          <div className='flex flex-1 flex-col'>
            <div id="section3-img" className='relative'>
              <Image 
                src="https://assets.website-files.com/60e4912ee7c15fb303f4c588/63f8f8749480ed5f4b9c5e46_notmuch-haschanged.webp"
                className='rounded-2xl w-full'
                width={500}
                height={500}
                alt="" 
              />
            </div>
          </div>
          <div className='flex flex-1 flex-col items-end ml-10'>
            <div className='flex flex-1 flex-col items-end font-PtypeDisplay'>
              <div className='text-6xl'>HAS</div>
              <div className='text-6xl'>CHANGED</div>
            </div>
            <div>
              <span className='ml-96 text-xl'>Our</span>
              <span className='text-xl'> processes might be stronger, our team of visionary talent may be bigger, but one thing remains the same. Our mission is to discover and create new. Whether it’s a vision for design that’s never been seen, a new way of telling stories that have never been told, or embracing the latest tech to blow the limits of what’s possible sky-high, we’re always taking the road less traveled to help brands break through the noise.</span>
              <br />
              <br />
              <span className='ml-96 text-xl'>So</span>
              <span className='text-xl'> you can find us at the intersection of invention and design, on the edge of what we know and what we still have to learn, exploring the places no one else has thought to look.</span>
            </div>
          </div>
        </div>
      </div>
      
      <div id='section4' className='relative flex flex-col items-center my-40'>
        <div className='text-6xl font-PtypeDisplay'>THATS</div>
        <div className='text-6xl font-PtypeDisplay'>WHERE ALL</div>
        <div className='text-6xl font-PtypeDisplay'>THE BAD</div>
        <div className='flex'>
          <div className='text-6xl font-PtypeDisplay'>SH</div>
          <div className='ml-20 text-6xl font-PtypeDisplay'>T</div>
        </div>
        <div className='text-6xl font-PtypeDisplay'>HAPPENS,</div>
        <div className='text-6xl font-PtypeDisplay'>ANYWAY</div>
        <div className='absolute top-1/2 -translate-y-40 right-14'>
          <svg width="227" height="127" viewBox="0 0 227 127" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 18.125C46.9413 15.5787 89.3324 12.3999 131.587 9.00198C157.392 6.92675 189.534 3 218.59 3C229.063 3 188.541 10.319 184.365 11.1027C161.525 15.3882 142.087 19.3042 126.469 24.6071C97.5855 34.4141 57.6038 42.9567 27.3099 52.5764C18.0053 55.531 82.2907 52.4418 88.7243 52.2163C113.5 51.3478 194.367 44.4241 217.951 47.8948C257.639 53.7358 89.5875 70.8837 75.2899 72.3829C42.6409 75.8064 110.272 76.4513 123.59 77.6047C171.453 81.7498 151.412 98.7307 139.903 105.874C134.888 108.987 117.787 114.635 129.667 117.878C141.065 120.989 175.47 122.482 193.001 124" stroke="#FF3C31" stroke-width="6" stroke-linecap="round"></path>
          </svg>
        </div>
        <div className='absolute top-1/2 -translate-y-36 -right-56 -rotate-20 text-3xl text-accent font-Quakerhack'>GOOD</div>
        <div className='absolute top-1/2 translate-y-20 translate-x-12'>
          <svg width="101" height="110" viewBox="0 0 101 110" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5544 26.4114C26.8533 37.1127 52.5605 54.2047 68.5028 65.5458C73.3486 68.993 78.1342 72.5146 82.7578 76.2325C83.7253 77.0105 84.6697 77.8011 85.6023 78.6081C86.0123 78.9629 92.521 82.9723 92.122 82.7496C84.704 78.61 70.7595 69.511 63.4814 64.9626C52.8321 58.3073 42.4082 48.8425 33.0725 41.3232C28.9496 38.9383 24.6281 29.4373 20.5958 26.7887" stroke="#FF3C31" stroke-width="6" stroke-linecap="round"></path>
            <path d="M97.0449 39.4939C78.7376 46.2032 49.6912 56.6579 31.0826 62.6995C25.4265 64.5359 19.7464 66.2796 14.0053 67.7762C12.8039 68.0894 11.6062 68.3766 10.4024 68.6444C9.87313 68.7622 2.77439 71.5987 3.19095 71.411C10.9363 67.9219 26.5537 62.1481 34.5438 59.0151C46.235 54.4308 57.7669 49.6115 69.2034 44.6703C73.5757 42.7813 77.9363 40.8532 82.4664 39.194C83.215 38.9198 85.4485 38.0858 84.6852 38.3242C80.7739 39.5459 76.8941 40.9935 73.011 42.2919" stroke="#FF3C31" stroke-width="6" stroke-linecap="round"></path>
            <path d="M35.9999 106.606C39.6742 87.4575 46.3566 54.5914 50.7583 35.5283C52.0962 29.734 53.5259 23.9668 55.1988 18.2746C55.5489 17.0835 55.9194 15.9088 56.3096 14.7389C56.4811 14.2246 59.0535 2.65175 58.9999 3.10547C58.0032 11.5417 53.5628 31.9297 52.1348 40.3924C50.0453 52.7753 48.2393 65.1425 46.5868 77.4907C45.9551 82.2116 45.3628 86.9424 44.4528 91.6802" stroke="#FF3C31" stroke-width="6" stroke-linecap="round"></path>
          </svg>
        </div>
      </div>

      <div className='flex flex-col mb-96 border-t-2 border-black'>
        <div className='text-3xl font-PtypeDisplay'>FOUNDERS</div>
        <div className='flex mb-96'>
          <CharacterIntro
            videoSource={'https://player.vimeo.com/progressive_redirect/playback/809160269/rendition/720p/file.mp4?loc=external&signature=fad5e286750ff67b0f674659c18f9a4f7b4b6d544882fa92e837a5e95a79bdef'}
            title='PRESIDENT'
            mark='F / 1'
            firstName='MARC'
            lastName='DEBIAK'
            contentHtml={`
              MARC CO-FOUNDED PAPER TIGER AND OVERSEES OPERATIONS AND ALL NEW BUSINESS DEVELOPMENT.
              <br />
              <br />
              <br />
              IF YOU’RE INTERESTED IN HIRING US, EMAIL MARC.
            `}
          />
          <CharacterIntro
            videoSource={'https://player.vimeo.com/progressive_redirect/playback/809160440/rendition/720p/file.mp4?loc=external&signature=13dfbe762fad757d67195c66b0e567b96c1bf6638663c0bada8dd023e2e13bf4'}
            title='CHIEF CREATIVE OFFICER'
            mark='F / 2'
            firstName='JASON'
            lastName='DEBIAK'
            contentHtml={`
              ASON DEBIAK IS THE CHIEF CREATIVE OFFICER AND CO-FOUNDER AT PAPER TIGER.
              <br />
              <br />
              <br />
              IF YOU’RE LOOKING TO NETWORK
              OR JOIN OUR TEAM, HIT UP JASON.
            `}
            containStyle={{top: '50rem'}}
            markStyle={{transform : `translate(15rem, -25rem)` }}
          />
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
