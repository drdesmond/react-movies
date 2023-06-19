# Design system
This app uses Tailwind CSS for its design system. Tailwind provides a large set of utility classes that can be combined and customized to create unique designs.

# Main Components
The  code consists of two main components, `App` and `ListOptions`, as well as a separate `Loader` component. 

#### App Component:
- Imports the necessary dependencies: `useState` from 'react' and `useSWR` from 'swr'.
- Defines a constant `ENDPOINT_BASE` that holds the base URL for the API.
- Defines the `App` component as the default export.
- Within the `App` component, it initializes the state using the `useState` hook. The state variable `page` is an object with three properties: `moviesPage`, `charactersPage`, and `quotesPages`, each initially set to 1.
- Defines a constant `fetchOptions` object that holds the options for the `useSWR` hook.
- Uses the `useSWR` hook three times to fetch data from different endpoints of the API: movies, characters, and quotes. It stores the resulting data, error, and loading states in separate variables.
- Defines two pagination event handler functions: `handleNext` and `handlePreviousPage`, which update the `page` state accordingly.
- Renders the component's UI, which includes a title, and three instances of the `ListOptions` component, each with different props based on the fetched data and related functions.

#### ListOptions Component:
- Imports `React`, `FC` (Functional Component), and the `Loader` component.
- Defines two interfaces: `DataProps` and `ListOptionProps`, which describe the structure of the data and props used in the component.
- Defines the `ListOptions` component as a Functional Component, receiving the `ListOptionProps` as its props.
- Conditionally renders the `Loader` component if `loading` is true.
- Conditionally renders an error message if `error` is truthy, indicating an error occurred during the API request.
- Renders the component's UI, which includes a title, a list of data items, and two buttons for pagination.

#### Loader Component:
- Imports `React` and `FC` (Functional Component).
- Defines the `Loader` component as a Functional Component, receiving the `LoaderProps` as its props.
- Conditionally renders a loading spinner element based on the `loading` prop.

# Unit Tests

Each component contains a test file matching the component file name with the `.test.tsx` extension to ensure that each component has good test coverage and behaves as expected.
