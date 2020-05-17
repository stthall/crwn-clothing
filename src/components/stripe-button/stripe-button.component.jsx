import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price})=>{
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_uzrOes3Se5qlhNFiXaln77Wd005jQ5HLe8'

  const onToken = token =>{
    console.log(token)
    alert('Payment Succesful')
  }

  return(
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image = 'http://svgshare.com/i/CUz.svg'
      description = {`Your total is $${price}`}
      amount = {priceForStripe}
      panelLabel = 'Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton