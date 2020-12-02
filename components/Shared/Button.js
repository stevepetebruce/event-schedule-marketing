import React from "react";

const Button = (props) => {
	if (props.href) {
		return (
			<a
				className={`px-5 py-2 rounded-full no-underline mr-4 uppercase inline-block button ${
					props.style
				} button--${props.size || "default"} ${
					props.default &&
					"bg-indigo-500 hover:bg-indigo-600 text-white focus:outline-none focus:bg-indigo-500 focus:text-white"
				} ${
					props.inverse &&
					"bg-transparent hover:bg-indigo-500 text-indigo-500 border border-indigo-500 hover:border-transparent hover:text-white focus:outline-none button"
				} ${
					props.danger &&
					"bg-red-700 hover:bg-red-600 text-white button focus:bg-red-700 focus:outline-none"
				}`}
				href={props.href}>
				{props.children}
			</a>
		);
	}
	return (
		<button
			className={`px-5 py-2 rounded-full no-underline mr-4 uppercase inline-block button ${
				props.style
			} button--${props.size || "default"} ${
				props.default &&
				"bg-indigo-500 hover:bg-indigo-600 text-white focus:outline-none focus:bg-indigo-500 focus:text-white button"
			} ${
				props.inverse &&
				"bg-transparent hover:bg-indigo-500 text-indigo-500 border border-indigo-500 hover:border-transparent hover:text-white focus:outline-none button"
			} ${
				props.danger &&
				"bg-red-700 hover:bg-red-600 text-white button focus:bg-red-700 focus:outline-none"
			}`}
			type={props.type}
			onClick={props.onClick}
			disabled={props.disabled}>
			{props.children}
		</button>
	);
};

export default Button;