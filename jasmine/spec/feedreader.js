/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('allFeeds have defined URL', function() {
           for (var allFeed of allFeeds) {
             expect(allFeed.url).toBeDefined();
             expect(allFeed.url.length).not.toBe(0);
           }
         });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('allFeeds have defined name', function() {
           for (var allFeed of allFeeds) {
             expect(allFeed.name).toBeDefined();
             expect(allFeed.name.length).not.toBe(0);
           }
         });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {

      /* TODO: Write a test that ensures the menu element is
       * hidden by default. You'll have to analyze the HTML and
       * the CSS to determine how we're performing the
       * hiding/showing of the menu element.
       */
       it('menu hidden by default', function() {
         expect($('body').hasClass('menu-hidden')).toBe(true);
       });

       /* TODO: Write a test that ensures the menu changes
        * visibility when the menu icon is clicked. This test
        * should have two expectations: does the menu display when
        * clicked and does it hide when clicked again.
        */
        it('menu visibility based on menu icon clicked', function() {

          //Show menu display when menu icon clicked
          $('.menu-icon-link').trigger('click');
          expect($('.menu-hidden').is(':visible')).toBe(false);

          //Hide menu display when menu icon clicked again
          $('.menu-icon-link').trigger('click');
          expect($('.menu-hidden').is(':visible')).toBe(true);
        });

    });


    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {

      /* TODO: Write a test that ensures when the loadFeed
       * function is called and completes its work.
       * Remember, loadFeed() is asynchronous so this test will require
       * the use of Jasmine's beforeEach and asynchronous done() function.
       */
       beforeEach(function(done) {
         loadFeed(0, function(){
           done();
         });
       });

       /* TODO: Write a test that ensures when the loadFeed
        * function is called and completes its work.
        * Write a test that there is at least
        * a single .entry element within the .feed container.
        */
        it('is at least single entry within feed container', function() {
          expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });


    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
      let intialFeed;
      let updatedFeed;

      /* TODO: Write a test that ensures when a new feed is loaded
       * by the loadFeed function that the content actually changes.
       * Remember, loadFeed() is asynchronous.
       */
      beforeEach(function() {

        //Load intial feed
        loadFeed(0, function(){
          initialFeed = $('.feed').HTML();

          //load changing feed
          loadfeed(1, function() {
             updatedFeed = $('.feed').HTML();
            done();
          });
        });
      });

      it('Feed content changes', function() {
        expect(updatedFeed).not.toMatch('initialFeed');
      });
    });
}());
