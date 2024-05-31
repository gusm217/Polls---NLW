import fastify from 'fastify';
import { createPoll } from './routes/create-polls';
import { getPoll } from './routes/get-polls';

const app = fastify();

app.register(createPoll);
app.register(getPoll)

app.listen({ port: 3333 }).then(() => {
	console.log('Server running on port 3333')
})
