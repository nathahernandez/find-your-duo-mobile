import express from "express";
import cors from "cors";

import { router } from "./router";

const PORT = process.env.PORT;
const app = express();

try {
	app.use(express.json());
	app.use(cors());
	app.use(router);
	app.listen(PORT, () => console.log(`Server is running on https://localhost:${PORT}`));
}
catch (err) {
	console.log(err);
}