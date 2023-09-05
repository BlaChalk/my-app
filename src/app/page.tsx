import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 bg-pink-100 font-PtypeText">

      <div className='flex justify-between fixed w-screen top-0 px-8 py-4 bg-pink-100 z-10'>
        <div className='w-40 h-4'>
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
        <div className='flex flex-col font-PtypeDisplay'>
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
            <div className='flex flex-1 flex-col items-end font-PtypeDisplay'>
              <h3 className='text-6xl'>HAS</h3>
              <h3 className='text-6xl'>CHANGED</h3>
            </div>
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
