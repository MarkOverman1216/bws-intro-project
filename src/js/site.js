import { LazySizes } from 'lazysizes';
import Highway from '@dogstudio/highway';
import DefaultRenderer from './DefaultRenderer';
import DefaultTransition from './DefaultTransition';
import MainController from './MainController';

$(() => {
    const H = new Highway.Core({
        renderers: {
            common: DefaultRenderer
        },
        transitions: {
            common: DefaultTransition,
            default: DefaultTransition
        }
    })
});