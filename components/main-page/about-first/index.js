import React from 'react'
import MobileCard from '../mibile-card';

const AboutFirst = () => {
  return (
<section className="grid grid-cols-2">
<MobileCard/>
<div>
    <h3>about me</h3>
    <div className="white p-4 rounded-2xl">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque nunc erat, nec sodales leo cursus eu. Aliquam tellus nunc, ultricies at turpis et, commodo cursus massa. Curabitur sodales nisi nisl, nec fermentum nulla rhoncus id. Maecenas ipsum justo, suscipit in nisi in, interdum convallis eros. Aliquam fringilla non tellus sit amet consequat. Quisque porta, tortor nec sagittis bibendum, lacus lectus faucibus orci, ac finibus eros libero eu mi. Aenean quis nibh imperdiet, accumsan odio sit amet, lobortis sem. Phasellus id augue risus.</p>
</div>
</div>


    </section>
  )
}

export default AboutFirst;