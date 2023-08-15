import React from 'react';
import { Row, Col } from 'react-bootstrap';

// CheckoutSteps function component
export default function CheckoutSteps(props) {
  // Rendering the checkout steps
  return (
    <Row className="checkout-steps">
      {/* Step 1: Sign-In */}
      <Col className={props.step1 ? 'active' : ''}>Sign-In</Col>
      {/* Step 2: Shipping */}
      <Col className={props.step2 ? 'active' : ''}>Shipping</Col>
      {/* Step 3: Payment */}
      <Col className={props.step3 ? 'active' : ''}>Payment</Col>
      {/* Step 4: Place Order */}
      <Col className={props.step4 ? 'active' : ''}>Place Order</Col>
    </Row>
  );
}
