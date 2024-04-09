import { useSelector } from 'react-redux'
import LayoutWithHeader from '../../components/layouts/LayoutWithHeader'
import { type RootState } from '../../store'
import PriceDetailsCard from './PriceDetailsCard'
import CartItem from './CartItem'
import OUR_COURSES from '../../assets/data/ourCourses'

const CartPage = (): JSX.Element => {
  const { cartItems } = useSelector((state: RootState) => state.cartItems)
  const cartItemsFullDetails = cartItems.map((item) => {
    return OUR_COURSES.find((course) => course._id === item.id)
  })

  return (
    <LayoutWithHeader>
      <div className="padding-x m-auto flex flex-col gap-12 pb-12 max-w-[1800px]">
        <div className="mt-12 flex flex-col gap-6 ">
          <h3 className="h3 text-neutral-10">Course Cart Summary</h3>
          <span className="body-text-md text-neutral-10">
            {cartItems.length} courses in cart
          </span>
        </div>
        <div className="flex gap-10 flex-col xl:flex-row">
          <div className="flex-grow flex flex-col gap-10">
            {cartItemsFullDetails.map((item) => (
              <CartItem key={item?._id} item={item as any} />
            ))}
          </div>
          <PriceDetailsCard />
        </div>
      </div>
    </LayoutWithHeader>
  )
}
export default CartPage
