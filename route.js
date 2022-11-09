function route(handle, pathname) {
  console.log("A punto de rutear una peticion para " + handle[pathname]);
  console.log(handle[pathname]);
}

exports.route = route;