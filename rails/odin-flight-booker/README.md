Project: Advanced Forms
Project: Flight Booker

In this project, you'll get a chance to tackle some more advanced forms. This is the kind of thing you'll have to work with when handling user orders for anything more complicated than an e-book. In this case, we'll build the first three steps of a typical checkout process for booking a one-way flight:

A typical airline booking flow:

1. Enter desired dates / airports and click "Search"
2. Choose from among a list of eligible flights
3. Enter passenger information for all passengers
4. Enter billing information
Step 4 would be done via integration of something like Paypal, via a gem or an SDK or Stripe.

Your Task
We'll be creating a one-way flight booker. You'll get lots of practice populating and building dropdown menus, radio buttons, and nested submissions. Let the fun begin!

This project will require you to seed your database, so use your db/seeds.rb file to write the code necessary to populate Airports and Flights. One trick for toy apps like this (don't do it for production!) is to make your seeds file ::delete_all items from each table in your database and then completely repopulate them. That way, when you create a new model or change how you want your sample data set up, you can just update the seeds.rb file and rerun $ rake db:seed.


***Notes***
The purpose of this project was to get familiar with nested forms.
Using the accepts_nested_attributes_for method and white listing the associated
attributes in the strong parameters to have the ability to create from to
create multiple model objects.
