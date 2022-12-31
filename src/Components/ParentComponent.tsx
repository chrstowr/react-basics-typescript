import React, { Suspense } from 'react'

//standard import, will be bundled on compilation. Can increase initial page load
import ChildComponentOne from './ChildComponentOne';

// lazy load import, will load lazily when needed. Can reduce intial page load
// I have added an extra 1000ms delay to emphasize the load
const ChildComponentTwo = React.lazy(async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return import('./ChildComponentTwo');
});

/*
    This is a React function component (https://reactjs.org/docs/components-and-props.html)
*/
function ParentComponent() {



    // return statement is required
    return (

        <div>
            {/*
                Props (properties) are inputs passed to components. You can name them whatever you want.
            */}
            <ChildComponentOne PropOne={"PropOne"} Number={1000} />
            {/* 
                You can wrap lazy loaded react component in the Suspense component
                to handle what is displayed while the component is loading
             */}
            <Suspense fallback={<div>Loading....</div>}>
                <ChildComponentTwo />
            </Suspense>
        </div>
    )
}

export default ParentComponent;
