import "@testing-library/jest-dom/extend-expect"; /* eslint-disable-line import/no-extraneous-dependencies */
import "whatwg-fetch";
import { toHaveNoViolations } from "jest-axe"; /* eslint-disable-line import/no-extraneous-dependencies */

// Below expect method will be available after environment initialization.
expect.extend(toHaveNoViolations); /* eslint-disable-line no-undef */
