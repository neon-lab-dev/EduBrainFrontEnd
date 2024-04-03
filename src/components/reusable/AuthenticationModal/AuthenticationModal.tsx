import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { FaRegUserCircle } from 'react-icons/fa'
import { RxCross1 } from 'react-icons/rx'
import { LuUnlock } from 'react-icons/lu'
import PrimaryButton from '../../buttons/PrimaryButton'

const AuthenticationModal = ({
  handleModal,
  isModalOpen,
  setIsModalOpen
}: {
  handleModal: () => void,
  isModalOpen: boolean,
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}): JSX.Element => {
  const [activeTab, setActiveTab] = useState<string>('login')

  const [showPassword, setShowPassword] = useState(false)
  const [showSecondPassword, setShowSecondPassword] = useState(false)

  const handlePasswordToggle = (): void => {
    setShowPassword((prevShowPassword) => !prevShowPassword)
  }

  const handleSecondPasswordToggle = (): void => {
    setShowSecondPassword((prevShowSecondPassword) => !prevShowSecondPassword)
  }

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent): void => {
      const closestDropdown = (event.target as HTMLElement).closest('#closeModal')
      if (isModalOpen && closestDropdown === null) {
        setIsModalOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [isModalOpen])

  return (
    <>
      {isModalOpen && (
        <div  className="bg-primary-100 bg-opacity-30 backdrop-blur-sm fixed inset-0 flex justify-center items-center z-50 w-full mx-auto ">
          <div id='closeModal' className="bg-primary-100 w-4/5 max-h-screen rounded-3xl relative">
            
            {activeTab === 'login' && (
              <div className="w-4/5 max-w-[475px] mx-auto py-4">
                {/* Icon */}
                <div className="flex flex-col justify-center items-center gap-4">
                  {/* bg-gradient-to-r from-blue-500 to-blue-700 */}
                  <div className="w-24 h-24 rounded-full bg-primary-55 flex justify-center items-center">
                    <FaRegUserCircle className="text-white text-6xl" />
                  </div>

                  <h1 className="text-white text-3xl font-semibold">Login</h1>
                </div>

                {/* Input fields */}
                <div className="mt-12">
                  <div className="relative flex items-center">
                    <input
                      className="bg-neutral-25 border border-neutral-80 px-6 text-white focus:outline-none rounded-xl w-full h-[64px]"
                      placeholder="Email"
                      type="text"
                    />
                    <div className="absolute right-0 px-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="relative flex items-center mt-6">
                    <input
                      className="bg-neutral-25 border border-neutral-80 px-6 text-white focus:outline-none rounded-xl w-full h-[64px]"
                      placeholder="Password"
                      type={showPassword ? 'text' : 'password'}
                    />
                    <div
                      onClick={handlePasswordToggle}
                      className="absolute right-0 px-6 cursor-pointer"
                    >
                      {showPassword ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="26"
                          viewBox="0 0 24 26"
                          fill="none"
                        >
                          <path
                            d="M19 11.9584H5C3.89543 11.9584 3 12.8911 3 14.0417V21.3334C3 22.484 3.89543 23.4167 5 23.4167H19C20.1046 23.4167 21 22.484 21 21.3334V14.0417C21 12.8911 20.1046 11.9584 19 11.9584Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7 11.9584V7.79171C7 6.41037 7.52678 5.08561 8.46447 4.10886C9.40215 3.13211 10.6739 2.58337 12 2.58337C13.3261 2.58337 14.5979 3.13211 15.5355 4.10886C16.4732 5.08561 17 6.41037 17 7.79171V11.9584"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : (
                        <LuUnlock className="text-white text-[24px]" />
                      )}
                    </div>
                  </div>

                  {/* Forgot password navigation */}
                  <p
                    onClick={() => {
                      setActiveTab('forgotPassword')
                    }}
                    className="text-neutral-40 hover:underline text-sm font-light text-end cursor-pointer mt-3"
                  >
                    Forgot password?
                  </p>

                  <div className="flex flex-col gap-7 mt-[62px]">
                    <PrimaryButton className="w-full">Login</PrimaryButton>
                    <p className="text-neutral-40 text-center">
                      Don’t have an account?{' '}
                      <button
                        onClick={() => {
                          setActiveTab('signup')
                        }}
                        className="text-white hover:underline"
                      >
                        Sign up
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'signup' && (
              <div className="w-4/5 max-w-[475px] mx-auto py-4">
                {/* Icon */}
                <div className="flex flex-col justify-center items-center gap-4">
                  <div className="w-24 h-24 rounded-full bg-primary-55 flex justify-center items-center">
                    <FaRegUserCircle className="text-white text-6xl" />
                  </div>

                  <h1 className="text-white text-3xl font-semibold">Signup</h1>
                </div>

                {/* Input fields */}
                <div className="mt-12">
                  <div className="relative flex items-center">
                    <input
                      className="bg-neutral-25 border border-neutral-80 px-6 text-white focus:outline-none rounded-xl w-full h-[64px]"
                      placeholder="Email"
                      type="text"
                    />
                    <div className="absolute right-0 px-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="relative flex items-center mt-6">
                    <input
                      className="bg-neutral-25 border border-neutral-80 px-6 text-white focus:outline-none rounded-xl w-full h-[64px]"
                      placeholder="Enter your phone number"
                      type="text"
                    />
                    <div className="absolute right-0 px-6 cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M16 1H8C6.34 1 5 2.34 5 4V20C5 21.66 6.34 23 8 23H16C17.66 23 19 21.66 19 20V4C19 2.34 17.66 1 16 1ZM14 21H10V20H14V21ZM17.25 18H6.75V4H17.25V18Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="relative flex items-center mt-6">
                    <input
                      className="bg-neutral-25 border border-neutral-80 px-6 text-white focus:outline-none rounded-xl w-full h-[64px]"
                      placeholder="Password"
                      type={showPassword ? 'text' : 'password'}
                    />
                    <div
                      onClick={handlePasswordToggle}
                      className="absolute right-0 px-6 cursor-pointer"
                    >
                      {showPassword ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="26"
                          viewBox="0 0 24 26"
                          fill="none"
                        >
                          <path
                            d="M19 11.9584H5C3.89543 11.9584 3 12.8911 3 14.0417V21.3334C3 22.484 3.89543 23.4167 5 23.4167H19C20.1046 23.4167 21 22.484 21 21.3334V14.0417C21 12.8911 20.1046 11.9584 19 11.9584Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7 11.9584V7.79171C7 6.41037 7.52678 5.08561 8.46447 4.10886C9.40215 3.13211 10.6739 2.58337 12 2.58337C13.3261 2.58337 14.5979 3.13211 15.5355 4.10886C16.4732 5.08561 17 6.41037 17 7.79171V11.9584"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : (
                        <LuUnlock className="text-white text-[24px]" />
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-7 mt-[62px]">
                    <PrimaryButton className="w-full">Sign Up</PrimaryButton>
                    <p className="text-neutral-40 text-center">
                      Already have an account?{' '}
                      <button
                        onClick={() => {
                          setActiveTab('login')
                        }}
                        className="text-white hover:underline"
                      >
                        Login
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'forgotPassword' && (
              <div className="w-4/5 max-w-[600px] mx-auto py-4">
                {/* Icon */}
                <div className="flex flex-col justify-center items-center gap-4">
                  <div className="w-24 h-24 rounded-full bg-primary-55 flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="70"
                      height="70"
                      viewBox="0 0 102 102"
                      fill="none"
                    >
                      <path
                        d="M57.375 38.25H51V31.875C51 27.6481 49.3209 23.5943 46.332 20.6055C43.3432 17.6166 39.2894 15.9375 35.0625 15.9375C30.8356 15.9375 26.7818 17.6166 23.793 20.6055C20.8041 23.5943 19.125 27.6481 19.125 31.875V38.25H12.75C11.9046 38.25 11.0939 38.5858 10.4961 39.1836C9.89832 39.7814 9.5625 40.5921 9.5625 41.4375V51C9.5625 51.8454 9.89832 52.6561 10.4961 53.2539C11.0939 53.8517 11.9046 54.1875 12.75 54.1875C13.5954 54.1875 14.4061 53.8517 15.0039 53.2539C15.6017 52.6561 15.9375 51.8454 15.9375 51V44.625H54.1875V63.75C54.1875 68.8223 52.1726 73.6868 48.5859 77.2734C44.9993 80.8601 40.1348 82.875 35.0625 82.875C29.9902 82.875 25.1257 80.8601 21.5391 77.2734C17.9524 73.6868 15.9375 68.8223 15.9375 63.75C15.9375 62.9046 15.6017 62.0939 15.0039 61.4961C14.4061 60.8983 13.5954 60.5625 12.75 60.5625C11.9046 60.5625 11.0939 60.8983 10.4961 61.4961C9.89832 62.0939 9.5625 62.9046 9.5625 63.75C9.5625 70.513 12.2491 76.999 17.0313 81.7812C21.8135 86.5634 28.2995 89.25 35.0625 89.25C41.8255 89.25 48.3115 86.5634 53.0937 81.7812C57.8759 76.999 60.5625 70.513 60.5625 63.75V41.4375C60.5625 40.5921 60.2267 39.7814 59.6289 39.1836C59.0311 38.5858 58.2204 38.25 57.375 38.25ZM25.5 38.25V31.875C25.5 29.3389 26.5075 26.9066 28.3008 25.1133C30.0941 23.32 32.5264 22.3125 35.0625 22.3125C37.5986 22.3125 40.0309 23.32 41.8242 25.1133C43.6175 26.9066 44.625 29.3389 44.625 31.875V38.25H25.5Z"
                        fill="white"
                      />
                      <path
                        d="M35.0625 51C34.2171 51 33.4064 51.3359 32.8086 51.9336C32.2108 52.5314 31.875 53.3422 31.875 54.1875V57.9488C29.7483 58.7007 27.9558 60.1803 26.8144 62.1259C25.6731 64.0716 25.2563 66.3582 25.6377 68.5814C26.0192 70.8047 27.1743 72.8215 28.899 74.2755C30.6236 75.7295 32.8068 76.5269 35.0625 76.5269C37.3183 76.5269 39.5014 75.7295 41.2261 74.2755C42.9507 72.8215 44.1059 70.8047 44.4873 68.5814C44.8688 66.3582 44.452 64.0716 43.3106 62.1259C42.1692 60.1803 40.3768 58.7007 38.25 57.9488V54.1875C38.25 53.3422 37.9142 52.5314 37.3164 51.9336C36.7187 51.3359 35.9079 51 35.0625 51ZM35.0625 70.125C34.4321 70.125 33.8158 69.9381 33.2916 69.5879C32.7675 69.2376 32.3589 68.7398 32.1177 68.1573C31.8764 67.5749 31.8133 66.934 31.9363 66.3157C32.0593 65.6974 32.3628 65.1294 32.8086 64.6836C33.2544 64.2379 33.8224 63.9343 34.4407 63.8113C35.059 63.6883 35.6999 63.7514 36.2823 63.9927C36.8648 64.2339 37.3626 64.6425 37.7128 65.1667C38.0631 65.6908 38.25 66.3071 38.25 66.9375C38.25 67.7829 37.9142 68.5937 37.3164 69.1914C36.7187 69.7892 35.9079 70.125 35.0625 70.125ZM76.5 9.56254C72.6984 9.57096 69.0549 11.0849 66.3668 13.773C63.6786 16.4612 62.1647 20.1047 62.1563 23.9063C62.1563 24.7517 62.4921 25.5624 63.0899 26.1602C63.6876 26.758 64.4984 27.0938 65.3438 27.0938C66.1892 27.0938 66.9999 26.758 67.5977 26.1602C68.1954 25.5624 68.5313 24.7517 68.5313 23.9063C68.5313 22.3302 68.9986 20.7895 69.8742 19.4791C70.7499 18.1686 71.9944 17.1473 73.4505 16.5441C74.9066 15.941 76.5089 15.7832 78.0547 16.0907C79.6004 16.3981 81.0203 17.1571 82.1348 18.2715C83.2492 19.386 84.0082 20.8059 84.3157 22.3517C84.6231 23.8975 84.4653 25.4997 83.8622 26.9558C83.259 28.4119 82.2377 29.6565 80.9272 30.5321C79.6168 31.4077 78.0761 31.875 76.5 31.875C75.6546 31.875 74.8439 32.2109 74.2461 32.8086C73.6483 33.4064 73.3125 34.2172 73.3125 35.0625V41.4375C73.3125 42.2829 73.6483 43.0937 74.2461 43.6914C74.8439 44.2892 75.6546 44.625 76.5 44.625C77.3454 44.625 78.1562 44.2892 78.7539 43.6914C79.3517 43.0937 79.6875 42.2829 79.6875 41.4375V37.8994C83.1339 37.1231 86.1726 35.1024 88.2212 32.2243C90.2699 29.3463 91.1844 25.8135 90.7895 22.3029C90.3946 18.7923 88.7181 15.551 86.0812 13.2C83.4444 10.849 80.0327 9.55377 76.5 9.56254ZM77.7113 51.255L77.1375 51C76.516 50.8787 75.8723 50.9453 75.2888 51.1913C74.9025 51.3527 74.5467 51.5791 74.2369 51.8607C73.9467 52.1638 73.7192 52.5213 73.5675 52.9125C73.3989 53.2941 73.3118 53.7066 73.3118 54.1238C73.3118 54.5409 73.3989 54.9535 73.5675 55.335C73.7289 55.7213 73.9553 56.0771 74.2369 56.3869C74.5332 56.6857 74.8858 56.9228 75.2742 57.0846C75.6626 57.2465 76.0792 57.3298 76.5 57.3298C76.9208 57.3298 77.3374 57.2465 77.7259 57.0846C78.1143 56.9228 78.4668 56.6857 78.7631 56.3869C79.3444 55.8011 79.6757 55.0127 79.6875 54.1875C79.6758 53.3436 79.3456 52.5353 78.7631 51.9244C78.46 51.6342 78.1025 51.4068 77.7113 51.255Z"
                        fill="white"
                      />
                    </svg>
                  </div>

                  <h1 className="text-white text-3xl font-semibold">
                    Forgot Password
                  </h1>

                  <p className="text-white text-[16px] font-normal font-Roboto text-center">
                    Enter your email and we will send you a link to reset your
                    password.
                  </p>
                </div>

                {/* Input fields */}
                <div className="mt-[42px] w-[475px] mx-auto">
                  <div className="relative flex items-center">
                    <input
                      className="bg-neutral-25 border border-neutral-80 px-6 text-white focus:outline-none rounded-xl w-full h-[64px]"
                      placeholder="Email"
                      type="text"
                    />
                    <div className="absolute right-0 px-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="flex flex-col gap-7 mt-[42px]">
                    <PrimaryButton
                      onClick={() => {
                        setActiveTab('emailSent')
                      }}
                      className="w-full"
                    >
                      Submit
                    </PrimaryButton>

                    <p className="text-neutral-40 text-[16px] font-normal font-Roboto text-center">
                      Back to{' '}
                      <span
                        onClick={() => {
                          setActiveTab('login')
                        }}
                        className="text-white font-medium cursor-pointer"
                      >
                        Login
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'emailSent' && (
              <div className="w-4/5 max-w-[475px] mx-auto py-4">
                {/* Icon */}
                <div className="flex flex-col justify-center items-center gap-4">
                  <div className="w-24 h-24 rounded-full bg-primary-55 flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="156"
                      height="156"
                      viewBox="0 0 156 156"
                      fill="none"
                    >
                      <circle
                        cx="78"
                        cy="78"
                        r="78"
                        fill="url(#paint0_linear_0_169)"
                      />
                      <mask
                        id="mask0_0_169"
                        maskUnits="userSpaceOnUse"
                        x="27"
                        y="27"
                        width="102"
                        height="102"
                      >
                        <rect
                          x="27"
                          y="27"
                          width="102"
                          height="102"
                          fill="#D9D9D9"
                        />
                      </mask>
                      <g mask="url(#mask0_0_169)">
                        <path
                          d="M44 112C41.6625 112 39.6615 111.168 37.9969 109.503C36.3323 107.839 35.5 105.838 35.5 103.5V52.5C35.5 50.1625 36.3323 48.1615 37.9969 46.4969C39.6615 44.8323 41.6625 44 44 44H112C114.338 44 116.339 44.8323 118.003 46.4969C119.668 48.1615 120.5 50.1625 120.5 52.5V103.5C120.5 105.838 119.668 107.839 118.003 109.503C116.339 111.168 114.338 112 112 112H44ZM78 82.25L44 61V103.5H112V61L78 82.25ZM78 73.75L112 52.5H44L78 73.75ZM44 61V52.5V103.5V61Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_0_169"
                          x1="198.5"
                          y1="25"
                          x2="1.43056e-06"
                          y2="107.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#58A9FA" />
                          <stop offset="1" stopColor="#356493" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  <h1 className="text-white text-3xl font-semibold">
                    Email Sent
                  </h1>

                  {/* <p className='text-white text-[16px] font-normal font-Roboto text-center'>We have sent you an email at my-emailid@gmail.com.</p> */}

                  <p className="text-white text-[16px] font-normal font-Roboto text-center leading-6">
                    We have sent you an email at my-emailid@gmail.com. Check
                    your inbox and follow the instructions to reset your account
                    password.
                  </p>
                </div>

                {/* Input fields */}
                <div className="mt-[42px] flex flex-col gap-3">
                  <p className="text-neutral-40 text-[16px] font-normal font-Roboto text-center">
                    Did not receive the email?{' '}
                    <span
                      onClick={() => {
                        setActiveTab('createNewPassword')
                      }}
                      className="text-white font-medium cursor-pointer"
                    >
                      Resend Email
                    </span>
                  </p>

                  <p className="text-neutral-40 text-[16px] font-normal font-Roboto text-center">
                    Back to{' '}
                    <span
                      onClick={() => {
                        setActiveTab('login')
                      }}
                      className="text-white font-medium cursor-pointer"
                    >
                      Login
                    </span>
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'createNewPassword' && (
              <div className="w-4/5 max-w-[475px] mx-auto py-4">
                {/* Icon */}
                <div className="flex flex-col justify-center items-center gap-4">
                  <div className="w-24 h-24 rounded-full bg-primary-55 flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="70"
                      viewBox="0 0 68 86"
                      fill="none"
                    >
                      <path
                        d="M27.625 55.75H40.375L37.9313 42.0438C39.3479 41.3354 40.4635 40.3083 41.2781 38.9625C42.0927 37.6167 42.5 36.1292 42.5 34.5C42.5 32.1625 41.6677 30.1615 40.0031 28.4969C38.3385 26.8323 36.3375 26 34 26C31.6625 26 29.6615 26.8323 27.9969 28.4969C26.3323 30.1615 25.5 32.1625 25.5 34.5C25.5 36.1292 25.9073 37.6167 26.7219 38.9625C27.5365 40.3083 28.6521 41.3354 30.0688 42.0438L27.625 55.75ZM34 85.5C24.1542 83.0208 16.026 77.3719 9.61563 68.5531C3.20521 59.7344 0 49.9417 0 39.175V13.25L34 0.5L68 13.25V39.175C68 49.9417 64.7948 59.7344 58.3844 68.5531C51.974 77.3719 43.8458 83.0208 34 85.5ZM34 76.575C41.3667 74.2375 47.4583 69.5625 52.275 62.55C57.0917 55.5375 59.5 47.7458 59.5 39.175V19.0938L34 9.53125L8.5 19.0938V39.175C8.5 47.7458 10.9083 55.5375 15.725 62.55C20.5417 69.5625 26.6333 74.2375 34 76.575Z"
                        fill="white"
                      />
                    </svg>
                  </div>

                  <h1 className="text-white text-3xl font-semibold">
                    Create New Password
                  </h1>
                </div>

                {/* Input fields */}
                <div className="mt-[42px]">
                  <div className="relative flex items-center mt-6">
                    <input
                      className="bg-neutral-25 border border-neutral-80 px-6 text-white focus:outline-none rounded-xl w-full h-[64px]"
                      placeholder="Enter New Password"
                      type={showPassword ? 'text' : 'password'}
                    />
                    <div
                      onClick={handlePasswordToggle}
                      className="absolute right-0 px-6 cursor-pointer"
                    >
                      {showPassword ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="26"
                          viewBox="0 0 24 26"
                          fill="none"
                        >
                          <path
                            d="M19 11.9584H5C3.89543 11.9584 3 12.8911 3 14.0417V21.3334C3 22.484 3.89543 23.4167 5 23.4167H19C20.1046 23.4167 21 22.484 21 21.3334V14.0417C21 12.8911 20.1046 11.9584 19 11.9584Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7 11.9584V7.79171C7 6.41037 7.52678 5.08561 8.46447 4.10886C9.40215 3.13211 10.6739 2.58337 12 2.58337C13.3261 2.58337 14.5979 3.13211 15.5355 4.10886C16.4732 5.08561 17 6.41037 17 7.79171V11.9584"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : (
                        <LuUnlock className="text-white text-[24px]" />
                      )}
                    </div>
                  </div>

                  <div className="relative flex items-center mt-6">
                    <input
                      className="bg-neutral-25 border border-neutral-80 px-6 text-white focus:outline-none rounded-xl w-full h-[64px]"
                      placeholder="Confirm Password"
                      type={showSecondPassword ? 'text' : 'password'}
                    />
                    <div
                      onClick={handleSecondPasswordToggle}
                      className="absolute right-0 px-6 cursor-pointer"
                    >
                      {showSecondPassword ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="26"
                          viewBox="0 0 24 26"
                          fill="none"
                        >
                          <path
                            d="M19 11.9584H5C3.89543 11.9584 3 12.8911 3 14.0417V21.3334C3 22.484 3.89543 23.4167 5 23.4167H19C20.1046 23.4167 21 22.484 21 21.3334V14.0417C21 12.8911 20.1046 11.9584 19 11.9584Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7 11.9584V7.79171C7 6.41037 7.52678 5.08561 8.46447 4.10886C9.40215 3.13211 10.6739 2.58337 12 2.58337C13.3261 2.58337 14.5979 3.13211 15.5355 4.10886C16.4732 5.08561 17 6.41037 17 7.79171V11.9584"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : (
                        <LuUnlock className="text-white text-[24px]" />
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-7 mt-[42px]">
                    <PrimaryButton
                      onClick={() => {
                        setActiveTab('completedPasswordSetup')
                      }}
                      className="w-full"
                    >
                      Reset Password
                    </PrimaryButton>

                    <p className="text-neutral-40 text-[16px] font-normal font-Roboto text-center">
                      Back to{' '}
                      <span
                        onClick={() => {
                          setActiveTab('login')
                        }}
                        className="text-white font-medium cursor-pointer"
                      >
                        Login
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'completedPasswordSetup' && (
              <div className="w-4/5 max-w-[600px] mx-auto py-4">
                {/* Icon */}
                <div className="flex flex-col justify-center items-center gap-16">
                  <div className="w-24 h-24 rounded-full bg-white flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="102"
                      height="102"
                      viewBox="0 0 102 102"
                      fill="none"
                    >
                      <path
                        d="M47.8493 83.8184C46.9789 83.8184 46.2734 83.1129 46.2734 82.2425C46.2734 81.3721 46.9789 80.6666 47.8493 80.6666C66.1328 80.6666 80.9551 65.8443 80.9551 47.5608C80.9551 29.2773 66.1328 14.4533 47.8493 14.4533C46.9789 14.4533 46.2734 13.7478 46.2734 12.8774C46.2734 12.007 46.9789 11.3015 47.8493 11.3015C67.8753 11.3015 84.1086 27.5348 84.1086 47.5608C84.1086 67.5868 67.8753 83.8184 47.8493 83.8184Z"
                        fill="url(#paint0_linear_0_204)"
                      />
                      <path
                        d="M13.3105 52.015C12.4877 52.0184 11.8009 51.386 11.7346 50.5666C11.6683 49.6707 11.5918 48.6252 11.5918 47.561C11.5918 46.4968 11.6683 45.4513 11.7414 44.5554C11.8128 43.6867 12.5727 43.0407 13.4414 43.1121C14.3101 43.1835 14.9561 43.9434 14.8847 44.8121C14.8167 45.6468 14.7436 46.6158 14.7436 47.561C14.7436 48.5062 14.8167 49.4786 14.8847 50.3116C14.9561 51.1786 14.3101 51.9402 13.4414 52.0116C13.3989 52.0133 13.353 52.015 13.3105 52.015ZM29.6968 19.6266C28.8264 19.6266 28.1209 18.9211 28.1226 18.049C28.1226 17.5033 28.4048 16.9967 28.8689 16.7111C30.5757 15.6503 32.3692 14.7323 34.229 13.969C35.0365 13.6409 35.9562 14.0302 36.2843 14.836C36.6124 15.6435 36.2231 16.5632 35.4156 16.8913C33.719 17.5866 32.0853 18.423 30.5281 19.392C30.2782 19.545 29.9892 19.6283 29.6968 19.6266ZM16.9145 33.5122C16.6663 33.5122 16.4232 33.4544 16.2039 33.3405C15.4287 32.9461 15.1176 31.9992 15.5103 31.224C16.4181 29.4339 17.4738 27.7203 18.6638 26.1036C19.1789 25.3998 20.1683 25.2485 20.8704 25.767C21.5742 26.2821 21.7255 27.2715 21.207 27.9736C20.1173 29.4509 19.1534 31.0149 18.3221 32.6503C18.0535 33.179 17.5078 33.5139 16.9145 33.5122ZM19.8742 69.5777C19.3693 69.5777 18.8967 69.338 18.5992 68.9317C17.4126 67.3065 16.3603 65.5861 15.4559 63.7892C15.0632 63.0123 15.3777 62.0637 16.1546 61.671C16.9315 61.2783 17.8801 61.5928 18.2728 62.3714C19.099 64.0136 20.0612 65.5861 21.1475 67.0685C21.6609 67.7723 21.5079 68.7583 20.8058 69.27C20.5355 69.4672 20.2091 69.5743 19.8759 69.5743V69.5777H19.8742ZM34.7747 81.2499C34.569 81.2499 34.3684 81.2108 34.178 81.1326C32.3131 80.3625 30.5162 79.4411 28.806 78.3735C28.058 77.9281 27.8132 76.9608 28.2586 76.2128C28.704 75.4648 29.6713 75.22 30.4193 75.6654C30.4346 75.6756 30.4516 75.6841 30.4652 75.6943C32.0275 76.6701 33.6663 77.5133 35.3697 78.2171C36.1755 78.5469 36.5631 79.4649 36.2333 80.2724C35.9902 80.8674 35.4139 81.255 34.773 81.2533V81.2499H34.7747Z"
                        fill="#A3D5AF"
                      />
                      <path
                        d="M40.4298 63.5153L27.1647 50.2502C26.5493 49.6348 26.5493 48.6352 27.1647 48.0215L29.3934 45.7928C30.0105 45.1774 31.0067 45.1774 31.6221 45.7928L41.5433 55.714L64.0768 33.1805C64.6922 32.5651 65.6918 32.5651 66.3055 33.1805L68.5342 35.4092C69.1496 36.0246 69.1496 37.0242 68.5342 37.6379L42.6585 63.5153C42.0448 64.1307 41.0452 64.1307 40.4298 63.5153Z"
                        fill="url(#paint1_linear_0_204)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_0_204"
                          x1="65.1909"
                          y1="11.3003"
                          x2="65.1909"
                          y2="83.8188"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#74C482" />
                          <stop offset="1" stopColor="#3DB34B" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_0_204"
                          x1="47.8504"
                          y1="32.7192"
                          x2="47.8504"
                          y2="63.9762"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#74C482" />
                          <stop offset="1" stopColor="#3DB34B" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  <h1 className="text-white text-3xl font-semibold text-center">
                    New Password created Successfully
                  </h1>
                </div>

                {/* Input fields */}
                <div className="mt-[42px]">
                  <div className="flex flex-col gap-6 mt-[42px]">
                    <p className="text-white text-center font-medium cursor-pointer">
                      Your password reset process is complete.
                    </p>

                    <PrimaryButton
                      onClick={() => {
                        setActiveTab('login')
                      }}
                      className="w-[475px] mx-auto"
                    >
                      Continue
                    </PrimaryButton>
                  </div>
                </div>
              </div>
            )}

            <button
              className="absolute top-4 right-4 text-neutral-40 text-2xl"
              onClick={handleModal}
            >
              <RxCross1 />
            </button>

            <div className="hidden lg:block w-[304px] h-[304px] rounded-full bg-primary-55 bg-opacity-30 blur-[100px] absolute top-[100px] right-4"></div>
          </div>
        </div>
      )}
    </>
  )
}

AuthenticationModal.propTypes = {
  handleModal: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  setIsModalOpen: PropTypes.func.isRequired
}

export default AuthenticationModal
