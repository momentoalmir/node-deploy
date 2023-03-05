import { PrismaClient } from "@prisma/client";
import fastify from "fastify";
import { z } from "zod";

const app = fastify();
const prisma = new PrismaClient();

app.get('/users', async () => {
  const users = await prisma.user.findMany();
  return { users };
});

app.post('/users', async (request, reply) => {
  const createUserSchema = z.object({
    name: z.string(),
    email: z.string().email(),
  });

  const { name, email } = createUserSchema.parse(request.body);

  const user = await prisma.user.create({
    data: { name, email },
  });

  return reply.status(201).send({ user });
});


app.listen({
  host: '0.0.0.0',
  port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
}).then(() => {
  console.log('Server started');
})
