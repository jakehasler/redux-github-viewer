# Redux Github Viewier Example
> See Redux in action with this simple project

### Explanation
It's kind of tricky to grasp, and hard to see it by just receiving a bunch of random code. I hope that with the usage instructions I provide, things to look out for, and specific code examples, you might gain a more solid understanding of redux and how it works.

One other thing to note: There's a lot of things about this project aren't ideal, namely the file structure, module imports, error handling, lots of the css, and some other things that you wouldn't typically do in a real project. But for the sake of demo-ing redux, I skipped over a lot of those details.

### Getting Started
Pull the repo, run `npm install && npm start`, and open up the browser to http://localhost:3000 to see the app.

In the input box, enter any Github username, and it will make a call to the Github public API, and display all of the information that gets returned in the boxes on the left side of the screen.
The user entered will also appear on the right side of the screen in a gray box. As you enter more users, you have the ability to click through the other users to re-view their profiles.

### How Redux Comes Into Play
With vanilla react, you could technically store all the profiles in the local state, and then cycle through previous ones that way, but as soon as you change views to another component, that state is lost and then reinitialized when the component mounts again.
With redux, you're able to update the profiles in the *store*, and they persist there across views allowing access to that data at any point in the application.

### Seeing Redux In Action
If you open up the dev tools while using the application, you will see that when you retrieve different users, there is a 'SAVE' action that is getting fired. If you expand this in the console, then you will see that it displays the `prevState`, the `action`, and the `nextState`.
Viewing the console output from the logger can be confusing at times, so the actions are much clearer to see when you watch them through the redux dev tools, as found in the the following link:
[Redux DevTools - Chrome Web Store.](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

### What is Happening
* Before the component is mounted, in the `AppContainer.js`, the `save` function,  are passed to the component through the `mapDispatchToProps` function (:11, :16).
* The `profiles` array from the state is passed into the component through the `mapStateToProps` function (:6, :15).
* The `connect` method is a redux function that gives the ability for the app to be connected to the store.
* From the `App` (./components/App.jsx) component, those two attributes are now available in `this.props`, as seen on lines :25 and :33.
* When a profile is retrieved, that data is passed into `this.props.save` on line :25, which references the action on line :20 in ./redux/reducer.js.
* `save` returns a function with `dispatch` as a parameter, which then enters into the reducer above on line :9.
* The case statement matches on the `SAVE` action, and because the state in the redux store is immutable, we create a new profiles array from the current state, push the new profile onto the array, and then return a new state complete with the new profile.
* Now, back in the App.jsx, because we called `mapStateToProps` in the AppContainer, that now gives `App` access to `profiles` as it updates from this.props.
* On :26 of App.jsx, we call `setState()` after the action is fired, and that makes it so the DOM re-renders with the new profiles array available in the component, as seen on :33.
* This process is repeated every time a new profile is searched.

### Other Aspects Explained
* `makeStore`
   * This is where the redux store gets created. I'm not super familiar with all the details of how it works, but the `createStore` method is necessary, and that takes as parameters any reducers that your application has, the app's initial state, and any middleware that you might want to configure.
  * Also noted, is that on line:24, I assign `window.store` just for the simplicity of being able to access it from the console if needed. Its helpful to be able to see it's attributes and call the methods right from the console if necessary.
* `index.js`
  * The initial state is, well, initialized and passed into `makeStore` where the store is created. From here, the Root component is passed newly created the `store`, into the `render` function, where it is then rendered to the DOM in the div with the ID of `root`.
* `Root.jsx`
   * This is where we configure react router. You notice that before the component is initialized (in its purely functional form), the store is passed through the props, and into the `Provider` making that available to the app as a whole.

If you have questions, feel free to reach out to me.
If you have suggestions to how this could be more accurate or better improved, feel free to make a pull request or submit an issue.

#### Credits
This project was scaffolded with `create-react-app`.


*Once again, there are many aspects of this repo that aren't the best practice, but its' purpose is to simply display how redux works.*
