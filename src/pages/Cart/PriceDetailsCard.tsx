import { useSelector } from 'react-redux'
import { type RootState } from '../../store'
import PrimaryButton from '../../components/buttons/PrimaryButton'
import arrowLeftAlt from '../../assets/icons/arrow_left_alt.svg'

const PriceDetailsCard = (): JSX.Element => {
  const { cartItems } = useSelector((state: RootState) => state.cartItems)
  return (
    <div className="w-[436px] border rounded-2xl bg-[#0A0A0A] border-[#2F2F31] p-8 flex flex-col gap-6">
      <div className="flex justify-between text-neutral-10 font-Montserrat">
        <span className="body-text-md !font-bold">Total</span>
        <div className="flex flex-col gap-1 items-end">
          <span className="text-3xl !font-bold">
            ₹{cartItems.reduce((acc, item) => acc + item.price, 0) * 0.9}
          </span>
          <div className="flex gap-4 items-center">
            <span className="text-sm text-white/85">(10% off)</span>
            <span className="line-through text-lg text-white/60">
              ₹{cartItems.reduce((acc, item) => acc + item.price, 0)}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 border-b border-dashed border-[#2F2F31] pb-4">
        <label className="relative h-full w-full">
          <input
            type="text"
            placeholder="Enter Coupon Code"
            className="p-2 py-4 rounded-lg outline-none px-3 bg-[#0A0A0A] border border-[#2E2E2E] text-neutral-10 w-full h-full"
          />
          <button className="text-primary-30 absolute top-1/2 right-4 font-bold -translate-y-1/2 cursor-pointer">
            Apply
          </button>
        </label>
        <div className="flex justify-between items-center font-Montserrat text-neutral-65 text-base">
          <span>Discount</span>
          <span>
            ₹{cartItems.reduce((acc, item) => acc + item.price, 0) * 0.1}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-3 font-bold text-neutral-10">
        <span className="text-lg">Price to pay:</span>
        <span className="text-3xl">
          ₹
          {cartItems.reduce((acc, item) => acc + item.price, 0) * 0.9 -
            cartItems.reduce((acc, item) => acc + item.price, 0) * 0.1}
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
