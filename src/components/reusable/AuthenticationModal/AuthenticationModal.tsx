import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FaRegUserCircle } from 'react-icons/fa'
import { RxCross1 } from 'react-icons/rx'
import { LuUnlock } from 'react-icons/lu'
import PrimaryButton from '../../buttons/PrimaryButton'

const AuthenticationModal = ({
  handleModal,
  isModalOpen,
}: {
  handleModal: () => void
  isModalOpen: boolean
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

  return (
    <>
      {isModalOpen && (
        <div className="bg-primary-100 bg-opacity-30 backdrop-blur-sm fixed inset-0 flex justify-center items-center z-50 w-full mx-auto">
          <div className="bg-primary-100 w-4/5 max-h-screen rounded-3xl relative">
            {activeTab === 'login' && (
              <div className="w-4/5 max-w-[475px] mx-auto py-4">
                {/* Icon */}
                <div className="flex flex-col justify-center items-center gap-4">
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
                    <PrimaryButton className="w-full">Login</PrimaryButton>
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
              <div className="w-4/5 max-w-[475px] mx-auto py-4">
                {/* Icon */}
                <div className="flex flex-col justify-center items-center gap-4">
                  <div className="w-24 h-24 rounded-full bg-primary-55 flex justify-center items-center">
                    <FaRegUserCircle className="text-white text-6xl" />
                  </div>

                  <h1 className="text-white text-3xl font-semibold">
                    Reset Password
                  </h1>
                </div>

                {/* Input fields */}
                <div className="mt-12">
                  <div className="relative flex items-center mt-6">
                    <input
                      className="bg-neutral-25 border border-neutral-80 px-6 text-white focus:outline-none rounded-xl w-full h-[64px]"
                      placeholder="Enter Password"
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
                      placeholder="Re-Enter Password"
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

                  <div className="flex flex-col gap-7 mt-[62px]">
                    <PrimaryButton
                      onClick={() => {
                        setActiveTab('login')
                      }}
                      className="w-full"
                    >
                      Reset Password
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
}

export default AuthenticationModal
