import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'
import { minutesToHours, hoursToMinutes } from './utils/convertHours'

const PORT = 3000;
const app = express();

app.use(express.json())

app.use(cors())

const prisma = new PrismaClient(/*{
   for dev log: ['query']
}*/);

app.get('/games', async (req, res) => {

    const games = await prisma.game.findMany({
        include: {
            _count:{
                select: {
                    ads: true
                }
            }
        }
    })

    return res.status(201).json(games)
})

app.post('/games/:id/ads', async (req, res) => {

    const gameId = req.params.id;

    const body = req.body;
    
    const ad = await prisma.ad.create({
        data:{
            gameId: gameId,           
            name: body.name,
            discordUser: body.discordUser,
            weekDays: body.weekDays.join(','),
            yearsPlaying: body.yearsPlaying,
            hourStart: hoursToMinutes(body.hourStart),
            hourEnd: hoursToMinutes(body.hourEnd),
            useVoice: body.useVoice
        }
    })

    return res.status(201).json(ad)

})

app.get('/games/:id/ads', async (req, res) => {

    const gameId = req.params.id
    
    const ads = await prisma.ad.findMany({
        select: {
            id: true,
            name: true,
            weekDays: true,
            useVoice: true,
            yearsPlaying: true,
            createdAt: true,
            hourStart: true,
            hourEnd: true
        },
        where: {
            gameId: gameId
        }
    })

    const adsFormated = ads.map((ad)=>{
        return {
            ...ad,
            hourStart: minutesToHours(ad.hourStart),
            hourEnd: minutesToHours(ad.hourEnd),
            weekDays: ad.weekDays.split(',')
        }
    })

    return res.json(adsFormated)

})

app.get('/ads/:id/discord', async (req, res) => {
    
    const adId = req.params.id
    const ad = await prisma.ad.findUniqueOrThrow({
        where:{
            id: adId
        },
        select: {
            discordUser: true
        }
    })
    return res.json({
        discordUser: ad.discordUser
    })

})

app.listen(PORT)