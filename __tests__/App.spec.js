import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { App } from '../src/components/App';

configure({ adapter: new Adapter() });

describe('App component', () => {
    it('should render without throwing an error', () => {
        expect(shallow(<App/>).contains(<div className="home"></div>)).toBe(true);     
    });

    it('should be selectable by class "home"', function() {
        expect(shallow(<App />).is('.home')).toBe(true);
    });

    it('should mount in a full DOM', function() {
        expect(mount(<App />).find('.home').length).toBe(1);
    });
})