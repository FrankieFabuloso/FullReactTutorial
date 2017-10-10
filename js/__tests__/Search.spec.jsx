import React from 'react';
import { shallow } from 'enzyme';
import Search from '../Search';
import ShowCard from '../ShowCard';
import preload from '../../data.json';
// console.log(process.env.NODE_ENV);
test('Search renders correctly', () => {
  const component = shallow(<Search />);

  expect(component).toMatchSnapshot();
});

test('Search should render correct amount fo shows', () => {
  const component = shallow(<Search />);

  expect(component.find(ShowCard).length).toEqual(preload.shows.length);
});

test('Search should render correct amount of shows based on search term', () => {
  const searchTerm = 'black';
  const component = shallow(<Search />);
  const showCount = preload.shows.filter(
    show => `${show.title} ${show.description}`.toUpperCase().indexOf(searchTerm.toUpperCase()) >= 0
  ).length;

  component.find('input').simulate('change', { target: { value: searchTerm } });
  expect(component.find(ShowCard).length).toEqual(showCount);
});
