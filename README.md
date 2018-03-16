# Lounge search

https://lounge-search.herokuapp.com/

Lounge Search is a free lodging website inspired by CouchSurfing. 
The site was created for travelers who want to explore the various spots of San Francisco, 
and stay with locals who know the area.
 
It utilizes React/Redux frameworks on frontend and Rails/PostgresSQL on backend.
The whole project was designed and developed within two weeks.
There are still plenty of new features to be implemented, so I'm planning to continue making improvements in the future.

### Features
* Secure user authentication in both the frontend and the backend using BCrypt.
* Users can view and available locations within San Francisco, CA and identify hosts related to a specific location.
* Users can search for locations typing in the search field.
* The application dynamically adapts the page view to display all information in a beautiful way.
* Users can create bookings by requesting hosts for accommodation while hosts have an ability to confirm or deny the request.
* Users can create reviews for other users and view reviews associated with other users.

### User authentication
The user authentication is based on BCrypt hashing technology which remains resistant to brute-force search attacks even with increasing computation power. Therefore, there is a assurance to protect users' credentials information even when the log-in session is stored on the browser.

![](app/assets/images/lounge-search-authentication.gif)

### Search

The search bar in the header section enables users to traverse the application with ease as the tool uses input characters to find any relevant location.  
The results of a search are sorted alphabetically, and separated by area.
The placement of the feature makes it available throughout the user experience; thus, making it a valuable asset to any LoungeSearcher. 

![](app/assets/images/lounge-search-1.gif)

This feature builds on its functionality in the show page for a particular neighborhood.  
As there may be hundreds of hosts in a particular area, it it can be difficult to find someone who meets your distinct needs.  

This was accomplished by building a search function in the backend of the location models.  
This function was built using the PostgresSQL.

```ruby
    def self.search(term)
       Location.where("area ILIKE :term", term: "%#{term}%")
    end 
```    
### Dashboard

The dashboard feature is dynamic and it offers the user the different functionality available to Users
 throughout the application. It enables the user to see bio information, view their planned trips, see most attractive spots in San Francisco and have access to different menu options available in the top menu.

![](app/assets/images/lounge-search-dashboard.png)

This is related to various requests to the backend. The dashboard style is optimized and minimalist in a way to not overwhelm the user.  

## Project Design

LoungeSearch has a clean design with minimalism and functionality as its primary intentions. 
The site also let the user explore the city of San Francisco.  Keeping code functional is prioritized as the timeframe for production was limited to two weeks.  Smooth, bug-free navigation is imperative to this site's success.  

There are several pages (i.e. the locations index page) that rely on the beauty of the city for the elegance of the site, while the show location page for the specific spot encourages the user to view different hosts pages 
to check their bio and other information.

## Technologies

Rails is used for this site due to its support for relational databases and RESTful architecture.  The offered the functionality needed for an application built with such haste.  This project is meant as a portfolio piece; thus, the technologies were chosen to be adequate for the work load.

Frontend Redux states are set up in a way such that there are separate reducers and actions for locations, bookings, dashboard, search, users, headers, and footers, and errors. This normalizes the state, easing the task of keeping things up-to-date with changes in the database.

## Possible Future Features/Updates

* User to edit/delete reviews
* User to create/update/ bookings
* Styling improvements and optimization across all pages
* CSS code optimization to follow "DRY" style
* Add search functionality to search for users
