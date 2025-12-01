import React from 'react'


const Accordion = ({
    faqs = [],
    openIdx,
    onChange
}
) => {
  return (
    <div className='w-full max-w-2xl mx-auto border rounded-lg divide-y mt-5'>
        {faqs.map((item,index)=>{
            const isOpen = openIdx === index;
            return (
                <div key={index}>
                    <button onClick={() => onChange(index)} 
                    className='w-full px-4 py-3 flex justify-between items-center text-left hover:bg-gray-100 transition-colors'>
                        <span className='font-semibold'>{item.question}</span>
                        <span className='text-xl'>{isOpen?  "⬆️":"⬇️" }</span>
                    </button>
                    <div className={`px-4 overflow-hidden transition-all duration-300 ${isOpen? "max-h-40 py-2" : "max-h-0 py-0"}`}>
                       <p>{item.answer}</p> 
                    </div>                    

                
                </div>
            )
        })}
 
    </div>
  )
}

export default Accordion