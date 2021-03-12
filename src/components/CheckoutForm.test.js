import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// test("sanity check", () => {
//   expect(2+2).toEqual(4);
//   expect(true && false).toBe(false);
// });

// Write up the two tests here and make sure they are testing what the title shows

const setup = () => {
  render(<CheckoutForm />);
  const header = screen.getByText(/checkout form/i);
  const firstName = screen.getByLabelText(/first name/i);
  const lastName = screen.getByLabelText(/last name/i);
  const address = screen.getByLabelText(/address/i);
  const city = screen.getByLabelText(/city/i);
  const state = screen.getByLabelText(/state/i);
  const zip = screen.getByLabelText(/zip/i);
  const submit = screen.getByRole('button');
  return {
    header,
    firstName,
    lastName,
    address,
    city,
    state,
    zip,
    submit
  };
}

test("form header renders", () => {
  const { header } = setup();
  expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
  const { firstName, lastName, address, city, state, zip, submit } = setup();
  fireEvent.change( firstName, 'Jonathan' );
  fireEvent.change( lastName, 'Fox' );
  fireEvent.change( address, '1234 Fake St' );
  fireEvent.change( city, 'San Francisco' );
  fireEvent.change( state, 'California' );
  fireEvent.change( zip, '91234' );
  fireEvent.click( submit );
  expect(screen.getByTestId('successMessage')).toBeInTheDocument();
});
