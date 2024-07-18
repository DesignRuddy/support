// Highlighting for code blocks
import 'prismjs/themes/prism.css';

import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';

const onRedirectCallback = (appsState:any) => {
    window.history.replaceState(
        {},
        document.title,
        appsState?.returnTo || window.location.pathname
    );
};

// export const wrapRootElement = ({ element }) => {
//     <Auth0Provider>
//         { element }
//         </Auth0Provider>
// }
