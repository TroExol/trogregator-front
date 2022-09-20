import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import Main from '../pages/Main/Main';

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Main">
                <Main/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;