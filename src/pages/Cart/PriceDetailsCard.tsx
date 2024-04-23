import PrimaryButton from '../../components/buttons/PrimaryButton'
import arrowLeftAlt from '../../assets/icons/arrow_left_alt.svg'
import { useState } from 'react'

interface Props {
  totalPayableAmount: number
  totalBasePrice: number
}

const PriceDetailsCard = (props: Props): JSX.Element => {
  const [coupon, setCoupon] = useState({
    code: '',
    isCouponApplied: false,
    discount: 0,
  })

  const handleApplyCoupon = (discount: number): void => {
    setCoupon((prev) => ({
      ...prev,
      isCouponApplied: true,
      discount,
    }))
  }

  return (
    <div className="w-full xl:w-[436px] border rounded-2xl bg-[#0A0A0A] border-[#2F2F31] p-8 flex flex-col gap-6 h-fit">
      <div className="flex justify-between text-neutral-10 font-Montserrat">
        <span className="body-text-md !font-bold">Total</span>
        <div className="flex flex-col gap-1 items-end">
          <span className="text-3xl !font-bold">
            ₹{props.totalPayableAmount}
          </span>
          <div className="flex gap-4 items-center">
            <span className="text-sm text-white/85">
              (
              {(
                ((props.totalBasePrice - props.totalPayableAmount) /
                  props.totalBasePrice) *
                100
              )
                .toFixed(2)
                .toString()}
              % off)
            </span>
            <span className="line-through text-lg text-white/60">
              ₹{props.totalBasePrice}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 border-b border-dashed border-[#2F2F31] pb-4">
        <label className="relative h-full w-full">
          <input
            onChange={(e) => {
              setCoupon((prev) => ({
                ...prev,
                code: e.target.value,
              }))
            }}
            disabled={coupon.isCouponApplied}
            type="text"
            placeholder="Enter Coupon Code"
            className="p-2 py-4 rounded-lg outline-none px-3 bg-[#0A0A0A] border border-[#2E2E2E] text-neutral-10 w-full h-full"
          />
          <button
            disabled={coupon.isCouponApplied || !coupon.code}
            onClick={() => {
              if (!coupon.code) return
              handleApplyCoupon(100) // todo add discount value
            }}
            className="text-primary-30 absolute top-1/2 right-4 font-bold -translate-y-1/2 cursor-pointer disabled:cursor-default disabled:opacity-70"
          >
            {coupon.isCouponApplied ? `Applied` : `Apply`}
          </button>
        </label>
        <div className="flex justify-between items-center font-Montserrat text-neutral-65 text-base">
          <span>Discount</span>
          <span>₹{coupon.isCouponApplied ? coupon.discount : 0}</span>
        </div>
      </div>
      <div className="flex flex-col gap-3 font-bold text-neutral-10">
        <span className="text-lg">Price to pay:</span>
        <span className="text-3xl">
          ₹{Math.max(1, props.totalPayableAmount - coupon.discount)}
        </span>
      </div>
      <PrimaryButton className="flex gap-4 items-center justify-center font-semibold text-neutral-100">
        <span>Checkout</span>
        <img src={arrowLeftAlt} alt="arrow-left" />
      </PrimaryButton>
    </div>
  )
}
export default PriceDetailsCard
