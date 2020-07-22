import React from 'react';
import Rainbow from '../hoc/Rainbow';

const Contact = (props) => {
    // setTimeout(() => {
    //     props.history.push('/about')
    // }, 2000)

    return(
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, architecto molestiae autem explicabo, quod quam atque laboriosam doloremque, consectetur placeat aperiam ea? Mollitia consequuntur voluptatum error aliquid quaerat, velit dolore!</p>
        </div>
    )
}

export default Rainbow(Contact)