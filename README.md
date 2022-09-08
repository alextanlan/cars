# Car registration portal

## Business requirements
The idea is to have a small example of a car registration portal.

### Planned features:
 - Authorization (only a logged-in user can access Dashboard page)
 - Dashboard page (with filters and lazy loaded cards)
 - Add car page
 - Dynamic price calculation for a car.

### As a first step there was implemented following:
 - created basic layouts for Home page, Dashboard page, Cards list, Car card
 - added routes for the root and the dashboard
 - dashboard page is made as a lazy-loading module
 - created a service with cars mock data which returns a cars list
 - added login/logout functionality by Auth0 (Dashboard ia available for signed-in users only)

### Next goals
1. Add communication with a server (use some free API) as to get real data
2. Tweak lazy loading cards by scroll loading (using `ngx-infinite-scroll` library)
3. Take care about responsive design, align/tweak the app view for tablets/mobiles 
4. Add a possibility to view/toggle the cars in a list view (*OPTIONAL*)
5. Add car property (brand/model/color etc.) filters as to see a specific cars in the list
6. Create "Add car" page/form 
7. Create User profile page 
8. Get rid of secret keys (API keys) in the code (move them to a config file stored secretly)
9. Increase unit-tests coverage  
10. Think about SSR/SSG in order to improve the app performance (*OPTIONAL*)

-----------

## Development stuff
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

### Run the app locally
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build the app

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

