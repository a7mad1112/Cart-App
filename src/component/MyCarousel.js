import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
export default function MyCarousel() {
    return (
        <Carousel style={{ width: '100%' }}>
            <Carousel.Item>
                <img
                style={{ maxHeight: '100vh' }}
                className="d-block w-100"
                src="https://lsgsoftwaresolutions.com/wp-content/uploads/2020/12/785054-ecommerce-istock-020119-1.jpg"
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                style={{ maxHeight: '100vh' }}
                className="d-block w-100"
                src="https://dashtechinc.com/wp-content/uploads/2020/02/E-Commerce-in-our-daily-life.jpg"
                alt="Second slide"
                />
            </Carousel.Item>
    </Carousel>
    )
}
