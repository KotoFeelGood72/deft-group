import './bootstrap';
import '../../node_modules/bootstrap/scss/bootstrap.scss';

import './app.scss';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
//redux
import { store } from './store';
import { Provider } from 'react-redux';


const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Deft-group';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <Provider store={store}>
                <App {...props} />
            </Provider>
        );
    },
    progress: {
        color: '#4B5563',
    },
});

