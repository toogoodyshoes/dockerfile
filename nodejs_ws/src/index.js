import { createServer } from 'http';

const port = 3030;
const requestHandler = (request, response) => {
    console.log(request.url);
    response.end('Hello Node.js Server!');
};
const server = createServer(requestHandler);
server.listen(port, (err) => {
    if (err) { return console.log('something bad happened', err); }
    console.log(`server is listening on ${port}`);
});