import Fastify from 'fastify'
import cors from '@fastify/cors'

//Acesso ao BD
import { PrismaClient } from '@prisma/client'


const app = Fastify()
const prisma = new PrismaClient()

app.register(cors, {
    //Permitiria que somente o endereço localhost3000 poderia acessar os dados do backend, sem configuração, qualquer aplicação poderia requisitar os dados.
    // origin: ['https://localhost:3000']
})

/**
 * Metodo HTTP: Get, Post, Put, Patch, Delete
 */

app.get( '/hello', async() =>{
    //await é para agurdar a chamada do BD ser finalizada antes de retornar os dados pro front, tem que ficar dentro de uma função async
    const habits = await prisma.habit.findMany({
        where: {
            title: {
                startsWith: 'Beber'
            }
        }
    })
    return habits
}) 

app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP Server Running!')
})