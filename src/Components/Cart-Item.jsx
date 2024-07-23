import { useState } from "react";

export const CartItem = ({item}) => {

    const [itemQuantity, setItemQuantity] = useState(item.quantity)
	return (
		<tr>
			<td>
				<div className="product">
					<img
						src={item.image}
						className="product-img"
						alt={item.title}
					/>
				</div>
			</td>
			<td>
				<p>{item.title}</p>
			</td>
			<td>$ {item.price}</td>
			<td>
				<div className="qty_input">
					<button
						className="qty-count qty-count--minus"
						data-action="minus"
						type="button"
						
					>
						<figure>
							-
						</figure>
					</button>
					<input
						className="product-qty"
						type="number"
						name="product-qty"
						value={itemQuantity}
						
						min="1"
					/>
					<button
						className="qty-count qty-count--add"
						data-action="add"
						type="button"
						
					>
						<figure>
							+
						</figure>
					</button>
				</div>
			</td>
			<td>${item.price * item.quantity}</td>
			<td>
				X
			</td>
		</tr>
	);
}