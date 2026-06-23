# IOSBSafes
THe IOSBafes project allows building a general BSafes app and many feature product(standalone) apps. Each app has its own bundle Id.
# Building the general BSafes App for IOS
The general BSafes app allows access to all contents in the personal space
## Building the static web asset (html, js, css)
In the BSafes_FrontEnd_Next project, run the buildForIOSBSafes script 
. $ ./buildForIOSBSafes 

After a successful build, copy the contents in out folder to the IOS BSafes project's out folder, replace the existed contents
. $ cp -r out/* <IOSBSafes folder>/BSafes/out/.
## Building the IOS app
. Open the BSafes project in XCode;
. Select the BSafesIOSAppTemplate scheme on the middle top of the XCode UI;
. Select a simulator destination, e.g. iPhone 13 Pro Max;
. Click the run button on top left of the XCode UI;

The app should be launched in the simulator.

# Building a feature product (standalone) App
The standalone app allows quick access to a specifc item (Notebook, or Diary). Upon a successful login with the standalone app, the item is automatically created in the personal space, which can be accessed with the BSafes web app or the general BSafes mobile app.

To build the standalone app, you need to build the static web asset for a feature product 
## Building the static web asset (html, js, css)
In the BSafes_FrontEnd_Next project, run the buildAnIOSFeaureProduct script with a product Id
. $ ./buildAnIOSFeaureProduct <product Id> , 
  e.g. $ ./buildAnIOSFeaureProduct AS06

  where 
  . the <product Id> is defined in lib/productID.js,
  . the style for feature products is defined in bsafesProducts.module.css

After a successful build, copy the contents in out folder to the IOS BSafes project's out folder, replace the existed contents
. $ cp -r out/* <IOSBSafes folder>/BSafes/out/.
## Building the IOS app
. Open the BSafes project in XCode;
. Select the <product id, e.g. AS06> scheme on the middle top of the XCode UI;
. Select a simulator destination, e.g. iPhone 13 Pro Max;
. Click the run button on top left of the XCode UI;

The app should be launched in the simulator.
