import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { CartItem } from "../Components/Cart-Item";

export const Cart = () => {

	const {cart, dispatch} = useContext(ShopContext);

    return (
        <div>
			<div className="account-setting__content">
				<div className="account-setting__content__title">
					<h4>Product list in your cart</h4>
				</div>
				<div className="product-table-container">
					<table>
						<thead>
							<tr>
								<th>Image</th>
								<th>PRODUCT Title</th>
								<th>Price</th>
								<th>Quantity</th>
								<th>Subtotal</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{cart.map((item) => (
								<CartItem key={item.id} item={item} />
							))}
						</tbody>
					</table>
				</div>
				<h2 className="total-price">
					You Total Price Will be 
				</h2>
				<div className="mt-50">
					<button
						type="button"
						className="btn-big"
					>
						Clear Cart
					</button>
				</div>
			</div>           
        </div>
    )
}