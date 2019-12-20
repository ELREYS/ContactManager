import React, { useEffect } from "react";

const Test = () => {
	useEffect(() => console.log("mounted"), []);
	useEffect(() => {
		return () => {
			console.log("will unmont");
		};
	}, []);
	return <h1>Test</h1>;
};

export default Test;
