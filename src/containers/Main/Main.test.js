import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './Main';
import React from 'react';
import DisplayMovies from '../../components/DisplayMovies/DisplayMovies';

configure({ adapter: new Adapter() });

const moviesData = [{ Title: 'title1', imdbID: 1, Poster: '/', Year: 1987 }];

describe('<Main />', () => {
	let wrapper = shallow(<Main />);
	beforeEach(() => {});
	it('should not render <DisplayMovies /> if there are no movies found', () => {
		wrapper.setProps({ foundMovies: [] });
		expect(wrapper.containsMatchingElement(<DisplayMovies />)).toEqual(false);
	});
	it('should not render <DisplayMovies /> if the loading is true', () => {
		wrapper.setProps({ loading: true });
		expect(wrapper.containsMatchingElement(<DisplayMovies />)).toEqual(false);
	});
});
