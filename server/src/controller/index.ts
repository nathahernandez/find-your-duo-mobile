import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

import { minutesToHours, hoursToMinutes } from "../utils";

const prisma = new PrismaClient();

export const getGames = async (req : Request, res : Response) => {
	await prisma.game
		.findMany({
			include: {
				_count:{
					select: {
						ads: true
					}
				}
			}
		})
		.then(games => res.status(201).json(games))
		.catch(err => res.status(404).json(err));
};

export const createGameAds = async (req : Request, res : Response) => {
	const { id } = req.params;
	const {
		name,
		discordUser,
		yearsPlaying,
		hourStart,
		hourEnd,
		useVoice,
		weekDays
	} = req.body;

	await prisma.ad
		.create({
			data:{
				gameId: id,
				name: name,
				discordUser: discordUser,
				weekDays: weekDays.join(","),
				yearsPlaying: yearsPlaying,
				hourStart: hoursToMinutes(hourStart),
				hourEnd: hoursToMinutes(hourEnd),
				useVoice: useVoice
			}
		})
		.then(ad => res.status(201).json(ad))
		.catch(err => res.status(400).json(err));
};

export const listGameAds = async (req : Request, res : Response) => {
	const { id } = req.params;

	await prisma.ad
		.findMany({
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
				gameId: id
			}
		})
		.then(ads => {
			const adsFormated = ads.map(({ hourStart, hourEnd, weekDays, ...rest }) => {
				return {
					...rest,
					hourStart: minutesToHours(hourStart),
					hourEnd: minutesToHours(hourEnd),
					weekDays: weekDays.split(",")
				};
			});

			return res.status(200).json(adsFormated);
		})
		.catch(err => res.status(400).json(err));
};

export const getDiscordUser = async (req : Request, res : Response) => {
	const { id } = req.params;

	await prisma.ad
		.findUniqueOrThrow({
			where:{
				id: id
			},
			select: {
				discordUser: true
			}
		})
		.then(({ discordUser }) => res.status(201).json({ discordUser: discordUser }))
		.catch(err => res.status(400).json(err));

};