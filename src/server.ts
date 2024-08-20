import express from "express";
import path from "path";
import fs from "fs";
import yaml from "js-yaml";
import { Config } from "./typings";
import axios from "axios";
import SysTray from "systray2";
import os from "os";

const open = async (url: string) => {
	const { default: openModule } = await import("open");
	return openModule(url);
};

// Load configuration
const configFilePath = path.join(__dirname, "../config.yaml");
let config: Config;

if (!fs.existsSync(configFilePath)) {
	const defaultConfig: Config = {
		server: {
			port: 5000,
			externalApiUrl: "http://localhost:1025/",
		},
		style: {
			padding: "0px",
			borderSize: "1px",
			titleFontSize: "23px",
			artistFontSize: "18px",
			width: "280px",
			refreshInterval: 5000,
		},
	};
	fs.writeFileSync(configFilePath, yaml.dump(defaultConfig));
	config = defaultConfig;
} else {
	config = yaml.load(fs.readFileSync(configFilePath, "utf8")) as Config;
}

const app = express();
const PORT = config.server.port;

// API endpoint to fetch data from the external API
app.get("/api/data", async (req, res) => {
	try {
		const response = await axios.get(config.server.externalApiUrl);
		res.json({ ...response.data, style: config.style });
	} catch (error) {
		res.status(500).json({
			error:
				"Songify is not started, or the web-server is not configured properly",
		});
	}
});

// Serve the React build for non-API routes
app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});

// Create tray icon functionality using systray2
function createTrayIcon() {
	const iconPath = path.join(__dirname, "../assets/tray_icon.png");

	const itemOpen = {
		title: "Open Widget",
		tooltip: "Open the widget in the browser",
		checked: false,
		enabled: true,
		click: () => {
			open(`http://localhost:${PORT}`);
		},
	};

	const itemExit = {
		title: "Exit",
		tooltip: "Quit the application",
		checked: false,
		enabled: true,
		click: () => {
			systray.kill(false);
		},
	};

	const systray = new SysTray({
		menu: {
			icon:
				os.platform() === "win32"
					? path.join(__dirname, "../assets/tray_icon.ico")
					: iconPath,
			isTemplateIcon: os.platform() === "darwin",
			title: "Songify Widget",
			tooltip: "Songify Widget Controls",
			items: [itemOpen, SysTray.separator, itemExit],
		},
		debug: false,
		copyDir: false,
	});

	systray.onClick((action: any) => {
		if (action.item.click != null) {
			action.item.click();
		}
	});

	systray
		.ready()
		.then(() => {
			console.log("systray started!");
		})
		.catch((err: any) => {
			console.log("systray failed to start: " + err.message);
		});
}

createTrayIcon();
