## BackEnd Assignment


Build a simplified version of a blind auction site. In a blind
auction, bidders do not see how much other bidders have bid.

You don't need to build the FrontEnd just the relevant routes and database functionality

Here's a basic overview.

#### All Users

- Browse available items

#### Unregistered Users

- Register a new account

#### Registered Users

- Sign in
- Sign out
- List new items
- Place bids on items
- Have a profile showing their listing and bidding activity

### Completing the App

Complete as much of this app as possible in the time allowed.  If time is
running out and it looks like the app will not be completed, continue to work in order and complete as much as possible. Be sure to ask questions, if you find yourself stuck.


### User Registration

Users will need to register for a new account. Create a route that will take email,
username, and password. The username must be unique.


If both constraints are met, the user should be considered logged in and
redirected to the home page where all references to "Register" are removed.


If either constraint is not met, the user should see the registration form and
the associated error messages.

Registered users should be able to login via the '/login' route and logout via the '/logout' route


### CRUD'ing Resources

The user's profile page is where users are able to manage their listed items.
We'll start off by giving them the ability to add an item and then work through
the remaining CRUD actions.

Only if a user is logged in, the user should be able to Create, read, edit and delete the items.

Create all the relevant routes for the same along with the relevant database operations in those routes.

Items have the following properties: 
    - Name
    - Image
    - Description
    - Added By
    - Status : Active/Deactive
    - Bid Time : Set by theUser while creating 
    - Bids : All bids submitted by users for the item

Each item uploaded by a user needs to be associated to the user.

### Bidding

Users can bid for items. Only logged in users can bid for the items. Users cannot bid for items that are submitted by them. 

A user cannot bid for an item once the bid time is over. 

At the end of the bid time, the user with the highest bids is said to have won the auction.

Each item will have a '/bid' route that will accept bids for those items. Bids need to be associated with a user



