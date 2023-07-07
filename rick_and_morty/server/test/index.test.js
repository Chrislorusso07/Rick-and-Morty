const app = require('../src/app');
const request = require('supertest');
const agent = request(app);

describe("test de RUTAS", () => {
    describe("GET /rickandmorty/character/:id", () => {
        it("Responde con status: 200", async () => {
            const response = await request.agent('/rickandmorty/character/1');
            expect(response.statusCode).toBe(200);
        });

        it("Responde un objeto con las propiedades: 'id', 'name', 'species', 'gender', 'status', 'origin' e 'image'", async () => {
            const response = await request.agent('/rickandmorty/character/1');
            const props = ['id', 'name', 'species', 'gender', 'status', 'origin', 'image']
            props.forEach(prop => {
                expect(response.body).toHaveProperty(prop)
            })
        });

        it("Si hay un error responde con status: 500", async () => {
            const response = await request.agent('/rickandmorty/character/3209j');
            expect(response.statusCode).toBe(500);
        });
    });

    describe("GET /rickandmorty/login", () => {
        it("Responde con un objeto con la propiedad access en true si la informacion del usuario válida", async () => {
            const response = await request.agent('/rickandmorty/login?email=richards@gmail.com&password=contra83');
            const access = { access: true };
            expect(response.body).toEqual(access);
        })
    })
})