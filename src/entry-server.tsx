import React from 'react';
import {renderToString} from 'react-dom/server';
import App from './App';
export {getSeo,INDEXABLE_ROUTES,STATIC_ROUTES,SITE_URL} from './data/seo';
import {PROJECTS} from './data/projects';
export const projectPaths=PROJECTS.map(p=>'/projek/'+p.slug);
export const render=(path:string)=>renderToString(<App initialPath={path}/>);
