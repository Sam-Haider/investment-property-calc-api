This is the API for investment-property-calc. This RESTful API handles CRUD operations for as follows:

POST /properties
GET /properties
PATCH /property/:id
DELETE /property/:id

The production client application can be found at https://main--investment-property-calc.netlify.app/

For each property, the API performs and returns various calculations based on data provided by the client, including:

-mortgage payments
-total monthly expenses
-monthly cash flow
-cash on cash return
