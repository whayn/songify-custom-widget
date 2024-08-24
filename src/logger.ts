import { createLogger, format, transports } from "winston";
import path from "path";
import fs from "fs";

const logDir = path.join(__dirname, "../logs");
const logFilePath = path.join(logDir, "server-logs.log");

// Ensure the logs directory exists
if (!fs.existsSync(logDir)) {
	fs.mkdirSync(logDir, { recursive: true });
}

// Ensure the log file exists before truncating
if (!fs.existsSync(logFilePath)) {
	fs.writeFileSync(logFilePath, "");
}

// Truncate the log file on startup
fs.truncateSync(logFilePath, 0);

const logger = createLogger({
	level: "info",
	format: format.combine(
		format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
		format.printf(
			({ timestamp, level, message }) => `${timestamp} ${level}: ${message}`,
		),
	),
	transports: [
		new transports.File({ filename: logFilePath }),
		new transports.Console(),
	],
});

export default logger;
