// In one of my backend API modules built using Express.js, I implemented a global fallback middleware using router.use() to handle unsupported routes and invalid HTTP methods.

// The requirement was to ensure that the API responds properly when a client hits a non-existing endpoint or sends an unsupported request method like HEAD or OPTIONS.

// I created a middleware that checks the incoming req.method against the list of allowed methods (GET, POST, PUT, PATCH, DELETE).

// If the method is not supported, the middleware returns a 405 Method Not Allowed response. Otherwise, if the route itself does not exist, it returns a 404 Page Not Found response.

// This improved API reliability and helped frontend developers and API consumers debug incorrect requests more easily by providing proper HTTP status codes instead of generic server errors.
