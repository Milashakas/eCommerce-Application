import mainPage from "./pages/Main";

const routes = {
    404: {
        title: "404",
        description: "Page not found",
        data: `<div>no Page</div>`,
    },
    "/": {
        title: "Home",
        description: "This is the home page",
        data: mainPage(),
    },
    "/about": {
        title: "About Us",
        description: "This is the about page",
        data : `<div>About us</div>`,
    },
    "/contact": {
        title: "Contact Us",
        description: "This is the contact page",
        data : `<div>About us</div>`,
    },
};


const route = (event:Event) => {
    const {target} = event;
  //  event = event || window.event; // get window.event if event argument not provided
    event.preventDefault();
    // window.history.pushState(state, unused, target link);
    window.history.pushState({}, "", target.href);
    locationHandler();

    }
};