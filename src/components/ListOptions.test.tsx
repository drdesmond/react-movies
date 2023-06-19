import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ListOptions, { ListOptionProps, DataProps } from './ListOptions';

describe('ListOptions', () => {
  const data: DataProps[] = [
    { _id: '1', name: 'Option 1' },
    { _id: '2', name: 'Option 2' },
    { _id: '3', name: 'Option 3' },
  ];

  const defaultProps: ListOptionProps = {
    title: 'Options',
    data,
    loading: false,
    error: '',
    handleNext: jest.fn(),
    handlePrev: jest.fn(),
  };

  it('renders the title correctly', () => {
    const { getByText } = render(<ListOptions {...defaultProps} />);
    const titleElement = getByText('Options');

    expect(titleElement).toBeInTheDocument();
  });

  it('renders the list of options correctly', () => {
    const { getAllByRole } = render(<ListOptions {...defaultProps} />);
    const optionElements = getAllByRole('listitem');

    expect(optionElements).toHaveLength(3);
    expect(optionElements[0]).toHaveTextContent('Option 1');
    expect(optionElements[1]).toHaveTextContent('Option 2');
    expect(optionElements[2]).toHaveTextContent('Option 3');
  });

  it('renders "No Record Found" when no data is provided', () => {
    const { getByText } = render(<ListOptions {...defaultProps} data={[]} />);
    const noRecordElement = getByText('No Record Found');

    expect(noRecordElement).toBeInTheDocument();
  });

  it('renders the loader when loading is true', () => {
    const { getByTestId } = render(<ListOptions {...defaultProps} loading />);
    const loaderElement = getByTestId('loader');

    expect(loaderElement).toBeInTheDocument();
  });

  it('renders the error message correctly', () => {
    const { getByTestId } = render(<ListOptions {...defaultProps} error="API limit reached" />);
    const errorElement = getByTestId('error');

    expect(errorElement).toBeInTheDocument();
  });

  it('calls handleNext when "Next" button is clicked', () => {
    const handleNext = jest.fn();
    const { getByText } = render(<ListOptions {...defaultProps} handleNext={handleNext} />);
    const nextButton = getByText('Next');

    fireEvent.click(nextButton);

    expect(handleNext).toHaveBeenCalledTimes(1);
  });

  it('calls handlePrev when "Previous" button is clicked', () => {
    const handlePrev = jest.fn();
    const { getByText } = render(<ListOptions {...defaultProps} handlePrev={handlePrev} />);
    const prevButton = getByText('Previous');

    fireEvent.click(prevButton);

    expect(handlePrev).toHaveBeenCalledTimes(1);
  });
});
