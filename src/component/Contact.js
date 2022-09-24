import React from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export default function Contact() {
    return (
        <section className='mt-5 py-5'>
            <Container className='mt-3'>
                <h2 className='text-center'>Have Some Questions ?</h2>
                <hr/>
                <div className='row mt-2 justify-content-between align-items-center'>
                    <div className='col-md-4 p-5'>
                        <img className='img-fluid' src='https://upload.wikimedia.org/wikipedia/commons/0/05/Google_Messages_logo.svg' alt='contact' />
                    </div>
                    <div className=' col-md-8 col-lg-6'>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter yout name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Msg</Form.Label>
                                <Form.Control type="text" placeholder="your msg" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </Container>
        </section>
    )
}
