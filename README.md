# Homepage

To run the application:

1. Clone the repo
2. Cd into the directory and run `rails s` in the terminal
3. Go to http://localhost:3000/home

## Demo

![homepage](https://cloud.githubusercontent.com/assets/17169813/20288815/19c42c82-aaa4-11e6-939b-352f4a6ee4c0.gif)

## Details

I used a mobile-first strategy and built out from there. Below are the breakpoints used which are a combination of the recommendations I read in snippets of Ethan Marcotte's _Responsive Web Design_ and based off the context of the site itself.

1. Mobile in portrait mode: 320px - 480px
2. Mobile in landscape mode: 480px - 600px
3. Smaller tablets: 600px - 770px
4. Larger tablets and laptops: 770px - 1200px

The context didn't look great at much larger than that so that was the max limit I set.

### Styling
___
The styling files can be found in `app/assets/stylesheets`. I broke it up into a file for each breakpoint as well as a general styling for everything. There was some repeat css between them (such as both mobile modes or tablets and laptops) but I found this to be a more effective way and could easily locate where adjustments were needed.

The html is in `app/views/homes/index.html.erb`

For the font choice, I used a Chrome extension I had previously built which allows you to more dynamically see how different fonts look. Info on the github [here](https://github.com/khernon1/Fontificate).

### Easily update the content
___
I used jQuery to load things such as the services offered, the footer details, address, etc. The files are in `app/assets/javascript` and could be changed by quickly updating the data in the lists.

### Fun stuff
___
I used the Faker gem to get Chuck Norris quotes, Robot pictures, and some other things because developer-related Chuck Norris quotes are the best and the other stuff is pretty ok too. It makes an ajax call to the database so refresh and see a new sampling of Chuck quotes.

Also, the nav bar and some other links are links to a random Wikipedia page. Happy procrastinating!
