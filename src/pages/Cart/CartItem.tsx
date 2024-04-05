import type OUR_COURSES from '../../assets/data/ourCourses'
import userSquare2 from '../../assets/icons/user-square2.svg'
import ClockImg from '../../assets/icons/clock.svg'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../store/slices/cartSlice'

const CartItem = ({ item }: { item: (typeof OUR_COURSES)[0] }): JSX.Element => {
  const dispatch = useDispatch()
  return (
    <div className="w-full bg-[#0A0A0A] border border-[#2E2E2E] rounded-xl h-[163px] flex items-center">
      <img
        src={item.image}
        alt=""
        className="object-cover object-left h-full rounded-l-xl max-w-[289px]"
      />
      <div className="flex flex-col justify-between h-full w-full p-4">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between text-white/85 text-2xl">
            <span className="truncate font-medium">{item.title}</span>
            <span className="font-semibold">₹{item.discountedPrice}</span>
          </div>
          <div className="flex gap-6 text-white/65">
            <div className="flex gap-2 items-center justify-center">
              <img src={userSquare2} className="w-5 h-5 opacity-65" />
              <span className=" text-base font-medium">
                {item.lecturesCount}
              </span>
              <span className=" text-sm ">Lectures</span>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <img src={ClockImg} className="w-5 h-5 opacity-65" />
              <span className=" text-base font-medium">{item.duration}</span>
              <span className=" text-sm ">Time</span>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            dispatch(removeFromCart(item._id))
          }}
          className="text-primary-30 self-start font-Montserrat text-lg font-medium"
        >
          Remove
        </button>
      </div>
    </div>
  )
}
export default CartItem
