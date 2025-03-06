import React, { useState } from 'react'
import { data } from './data'
import Card from './Card'


const Section = () => {
    const [details, setDetails] = useState(data)

    return (
        <div className='section-top'>
            {
                details.map((card) =>
                    <Card
                        key={card.id}
                        image={card.image}
                        title={card.title}
                        description={card.description}
                    />
                )
            }
        </div>
    )
}

export default Section


// const Section = () => {
//     const [user, setUser] = useState(data)
//     console.log(user)
//     return (
//         <div >
//             {
//                 user.map((d) => {
//                     return (

//                         <ul>
//                             <li>
//                                 <img src={d.image} alt="alt" />
//                                 {/* {d.description} */}
//                             </li>
//                         </ul>


//                     )
//                 })
//             }
//         </div>
//     )
// }

// export default Section
