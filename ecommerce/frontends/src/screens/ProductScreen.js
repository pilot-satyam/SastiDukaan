import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Row,Col,Image,ListGroup,Button,Card,Form, ListGroupItem } from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Rating from '../components/Rating'
import Loader from '../components/Loader'
import Message from '../components/Message'
import products from '../products'
import{listProductDetails} from '../actions/productActions'

function ProductScreen({match,history}) {
  const[qty,setQty] = useState(1) //min state is 1

  const dispatch = useDispatch()

  // const [product, setProduct] = useState([])

  //to get data from our redux store 
  const productDetails = useSelector(state=>state.productDetails)
  const {loading,error,product} = productDetails //to destructure it and get data from it

  useEffect(()=>{
      // async function fetchProduct()
      // {
      //   const {data} = await axios.get(`/api/products/${match.params.id}`)
      //   setProduct(data) //to get data from api call
      // }
      // fetchProduct()

    dispatch(listProductDetails(match.params.id))

  },[dispatch,match])

  const addToCartHandler=()=>{
    console.log('Add to cart',match.params.id)
    history.push(`/cart/${match.params.id} ? qty=${qty}`)
  }

  return (
    <div>
      <a href="/" className='btn btn-light my-3'>Go Back</a>
        
        {
        loading ? 
        <Loader />
        :error
        ?<Message variant='danger'>{error}</Message>
        :( <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
            <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
          
              <ListGroup.Item>
                <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
                </ListGroup.Item>
                 
               <ListGroup.Item>
                Price: Rs.{product.price}
               </ListGroup.Item>
  
               <ListGroup.Item>
                Description: {product.description}
               </ListGroup.Item>
  
            </ListGroup>
            </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
               <Row>
                <Col> Price:</Col>
                <Col>Rs.{product.price}</Col>
               </Row>
               </ListGroup.Item>
               
               <ListGroup.Item>
               <Row>
                <Col> Status:</Col>
                <Col>{product.countInStock >0 ? 'In Stock' : 'Out Of Stock'}</Col>
               </Row>
               </ListGroup.Item>

               {product.countInStock > 0 &&(

                 <ListGroup.Item>
                   <Row>
                    <Col>Qty</Col>
                    <Col xs='auto' className='my-1'>
                    <Form.Control as="select" value={qty} onChange={(e)=>setQty(e.target.value)}>
                    {/* ...Array(product.countInStock).keys() this crates an array eg 3 is countInStock so array will be [0,1.2]
                     and then after this after each iteration a new option in dropdown should be created and hence
                      we are adding x+1 and we map it to the value */}
                      {
                        [...Array(product.countInStock).keys()].map((x)=>(
                          <option key={x+1} value = {x+1}>
                            {x+1}
                          </option>
                        ))
                      }

                    </Form.Control>
                    </Col>
                   </Row>
                 </ListGroup.Item>
               )}
  
               <ListGroup.Item>
                <Button
                 onClick={addToCartHandler}
                 className='btn-block' 
                 disabled={product.countInStock == 0}
                  type='button'>
                    Add To Cart
                  </Button>
               </ListGroup.Item>
  
              </ListGroup>
            </Card>
          </Col>
        </Row>)
        } 
    </div>
  )
}

export default ProductScreen
