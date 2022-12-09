import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'

function footer() {
  return (
    <footer>
      <Container>
        <Row>
            {/* Adding the class so that Copyright text can be aligned in center and can be pushed to bottom */}
            <Col className='text-center py-3'> 
            Copyright &copy; SastiDukaan 
            </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default footer
