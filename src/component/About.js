import React from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
export default function About() {
    return (
        <section className='mt-5 py-5'>
            <Container>
                <div className='row mt-3 align-items-center'>
                    <div className='col-md-6'>
                        <h2 className='fw-bold' style={{ color: '#0d6efd' }}>About Us</h2>
                        <p className='text-black-50'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, nam rem quod laborum quasi quibusdam ab tempora quaerat laboriosam voluptatem sit similique sapiente cumque? Ad corrupti atque ab dolorem quos cumque libero nihil. Iure hic facilis magni. Neque itaque assumenda praesentium omnis at optio, sapiente sed eaque adipisci officiis fugiat officia ullam sit repellat excepturi! Rerum ipsum error magnam, fugit dolores maiores nesciunt officiis mollitia sunt. Ab non quo illo libero, tempore odit ut illum nemo pariatur delectus, eveniet vitae, sed officia praesentium. </p>
                        <Link to='/contact' ><Button className='mt-3' variant="outline-primary">Contact Us</Button></Link>
                        
                    </div>
                    <div className='col-md-6'>
                        <img className='img-fluid' src='https://cdn.searchenginejournal.com/wp-content/uploads/2022/01/about-us-page-examples-1-61fd8f9784626-sej-760x400.jpg' alt='about' />
                    </div>
                </div>
            </Container>
        </section>
    )
};