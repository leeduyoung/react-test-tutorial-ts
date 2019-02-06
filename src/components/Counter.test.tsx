import * as React from 'react';
import renderer from 'react-test-renderer';
import Counter from './Counter';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Counter', () =>
{
    let component = null;

    it('renders correctly', () => 
    {
        component = renderer.create(<Counter />);
    });

    it('matches snapshot', () =>
    {
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('rendered title', () =>
    {
        const wrapper = shallow(<Counter />);
        expect(wrapper.find("#title").length).toEqual(1);
    });

    // decrease가 잘 되는지 화인
    it('decrease correctly', () =>
    {
        component.getInstance().onDecrease();
        expect(component.getInstance().state.value).toBe(1);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    // increase가 잘 되는지 확인
    it('increase correctly', () =>
    {
        component.getInstance().onIncrease();
        expect(component.getInstance().state.value).toBe(2);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});