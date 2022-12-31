import React, { Suspense } from 'react'

//standard import, will be bundled on compilation. Can increase initial page load
import ChildComponentOne from './ChildComponentOne';

// lazy load import, will load lazily when needed. Can reduce intial page load
// I have added an extra 1000ms delay to emphasize the load
const ChildComponentTwo = React.lazy(async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return import('./ChildComponentTwo');
});

function ParentComponent() {

    return (
        <div>
            <ChildComponentOne />
            <Suspense fallback={<div>Loading....</div>}>
                <ChildComponentTwo />
            </Suspense>
        </div>
    )
}

export default ParentComponent;
