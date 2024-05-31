import fastify from 'fastify';
import { createPoll } from './routes/create-polls';
import { getPoll } from './routes/get-polls';
import cookie from '@fastify/cookie';
import websocket from '@fastify/websocket';
import { voteOnPoll } from './routes/vote-on-polls';

const app = fastify();
app.register(cookie, {
	secret: "polls-app-nlw",
	hook: 'onRequest',
})
app.register(websocket);

app.register(createPoll);
app.register(getPoll);
app.register(voteOnPoll);

app.listen({ port: 3333 }).then(() => {
	console.log('Server running on port 3333')
})
