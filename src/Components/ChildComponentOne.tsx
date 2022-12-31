import React from 'react'

function ChildComponentOne(props: { PropOne: string, Number: number }) {

    return (
        <div>
            Child Component One
            <div style={{ marginLeft: 15 }}>
                {props.PropOne}
            </div>
            <div style={{ marginLeft: 15 }}>
                {props.Number}
            </div>
            
        </div>
    );
}

export default ChildComponentOne;
