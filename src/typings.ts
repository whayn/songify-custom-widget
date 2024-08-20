export interface Style {
	padding: string;
	borderSize: string;
	titleFontSize: string;
	artistFontSize: string;
	width: string;
	refreshInterval: number;
}

export interface Config {
	server: {
		port: number;
		externalApiUrl: string;
	};
	style: Style;
}
