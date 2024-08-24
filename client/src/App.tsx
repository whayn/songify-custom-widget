import React, { useEffect, useState } from "react";

interface Album {
	Url: string;
	Width: number;
	Height: number;
}

interface StyleConfig {
	padding: string;
	borderSize: string;
	titleFontSize: string;
	artistFontSize: string;
	width: string;
}

interface ApiResponse {
	Artists: string;
	Title: string;
	Albums: Album[];
	Url: string;
	style: StyleConfig;
	error?: string;
	refreshInterval: number;
}

const App: React.FC = () => {
	const [data, setData] = useState<ApiResponse | null>(null);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = () => {
			fetch("/api/data")
				.then((response) => response.json())
				.then((data) => {
					if (data.error) {
						setError(data.error);
					} else {
						setData(data);
						setError(null);
					}
				})
				.catch(() => {
					setError(
						"Songify is not started, or the web-server is not configured properly",
					);
				});
		};

		fetchData();
		const interval = setInterval(fetchData, 3000);
		return () => clearInterval(interval);
	}, []);

	if (error) {
		return <div className="container mx-40 p-4 text-red-500">{error}</div>;
	}

	return (
		<div
			className="flex items-center justify-center min-h-screen bg-white"
			style={{
				padding: data?.style?.padding || "0px",
			}}
		>
			{data ? (
				<div
					className="inline-flex h-[80px] bg-spotify-black text-white"
					style={{
						padding: data.style.padding || "0px",
						border: `${data.style.borderSize || "1px"} solid #4ecca3`,
						boxSizing: "initial",
					}}
				>
					<img
						src={data.Albums[0].Url}
						alt={data.Title}
						className="w-[80px] h-[80px]"
					/>
					<div
						className="h-full flex relative overflow-hidden"
						style={{ width: data.style.width || "280px" }}
					>
						<div className="absolute block overflow-hidden w-full top-[14%]">
							<div
								className="text-white inline-block overflow-hidden whitespace-nowrap font-bold ml-2.5"
								style={{
									fontSize: data.style.titleFontSize || "23px",
									textShadow: "1px 1px 1px rgb(0, 0, 0)",
								}}
							>
								{data.Title}
							</div>
						</div>
						<div className="absolute block overflow-hidden w-full top-[55%]">
							<div
								className="text-spotify-green inline-block overflow-hidden whitespace-nowrap ml-2.5"
								style={{
									fontSize: data.style.artistFontSize || "18px",
									textShadow: "1px 1px 2px rgb(0, 0, 0)",
								}}
							>
								{data.Artists}
							</div>
						</div>
						<div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-spotify-black to-transparent pointer-events-none"></div>{" "}
						{/* Reverted to original gradient color */}
					</div>
				</div>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
};

export default App;
