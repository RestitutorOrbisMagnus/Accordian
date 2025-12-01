import React from 'react'
import { useState } from 'react'
import Accordion from './Accordion'

const ParentContainer = () => {

const [openIndex,setOpenIndex] = useState(null)

const faqs = [
  {
    "question": "What is your return policy?",
    "answer": "You can return most items within 30 days of purchase, provided they are in their original condition with proof of purchase. Some exclusions apply; please refer to our full return policy for details."
  },
  {
    "question": "How do I track my order?",
    "answer": "Once your order has shipped, you will receive an email with a tracking number and a link to the carrier's website. You can use this information to monitor the status of your delivery."
  },
  {
    "question": "Do you offer international shipping?",
    "answer": "Yes, we offer international shipping to many countries. Shipping costs and delivery times vary depending on the destination. You can find more information during the checkout process."
  },
  {
    "question": "How can I contact customer support?",
    "answer": "You can reach our customer support team via email at support@example.com or by calling us at [Phone Number] during business hours. We aim to respond to all inquiries within 24-48 hours."
  }
]


  return (
    <div>
        <Accordion 
            faqs ={faqs}
            openIdx = {openIndex}
            onChange = {(i) => setOpenIndex(i===openIndex? null :i)}

             />
    </div>
  )
}

export default ParentContainer