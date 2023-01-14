const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../app');

require('dotenv').config();

/* Connecting to the database before each test. */
beforeEach(async () => {
  const { DB_HOST, DB_PORT, DB_NAME } = process.env;
  await mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`);
});

/* Closing database connection after each test. */
afterEach(async () => {
  await mongoose.connection.close();
});

describe('GET /tasks', () => {
  it('should return all tasks', async () => {
    const res = await request(app).get('/tasks');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});

describe('GET /tasks/:id', () => {
  it('should return a task', async () => {
    const res = await request(app).get('/tasks/63c1ed0d50bcabc0dc81048d');
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe('Learn NestJS and TypeScript');
  });
});

describe('POST /tasks', () => {
  it('should create a task', async () => {
    const res = await request(app).post('/tasks').send({
      name: 'Learn MongoDB',
      status: 'done',
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe('Learn MongoDB');
  });
});

describe('PUT /tasks/:id', () => {
  it('should update a task', async () => {
    const res = await request(app).put('/tasks/63c1ed0d50bcabc0dc81048d').send({
      name: 'Learn NestJS and TypeScript',
      status: 'done',
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('done');
    expect(res.body.name).toBe('Learn NestJS and TypeScript');
  });
});

describe('DELETE /tasks/:id', () => {
  it('should delete a task', async () => {
    const res = await request(app).delete('/tasks/63c1f2cbef050606cda17ce0');
    expect(res.statusCode).toBe(200);
  });
});
