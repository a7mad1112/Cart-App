import { Button, Container, Image } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from "react-redux";
import { clear, deleteFromCart } from "../rtk/slices/cart-slice";

function Cart () {
    const cart = useSelector(state => state.cart);
    // console.log(cart);
    const dispatch = useDispatch();
    // const totalPrice = cart.reduce((acc, prod) => {
    //     acc += prod.proce;
    //     return acc;
    // }, 0);
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++)
        totalPrice += cart[i].price * cart[i].quantity;
    return (
        <Container>
            <h1 className="py-5 mt-5"> Welcome to Cart </h1>
            <Button className="mb-3" variant="primary" onClick={() => dispatch(clear())} >Clear Cart</Button>
            <h5> Total Price: { totalPrice.toFixed(2) }$</h5>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#Id</th>
                        <th>Title</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map(prod => (
                            <tr key={prod.id}>
                                <td>{ prod.id }</td>
                                <td>{ prod.title }</td>
                                <td> <Image alt={prod.title} src={prod.image} style={{width: '100px'}}/> </td>
                                <td>${ prod.price }</td>
                                <td>* { prod.quantity }</td>
                                <td><Button variant="danger" onClick={() => dispatch(deleteFromCart(prod))} >Delete From Cart</Button></td>
                            </tr>
                        ))
                    }
                    

                </tbody>
            </Table>
        </Container>
    )
};
export default Cart;