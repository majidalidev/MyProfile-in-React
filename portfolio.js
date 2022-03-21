import emoji from "react-easy-emoji";

export const greetings = {
	name: "Ali Hamza Zaidi",
	title: "Hi all, I'm Hamza",
	description:
		"A passionate Full Stack Web Developer having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Nextjs and some other cool libraries and frameworks and Cross Platform Mobile Apps With Flutter.",
};

export const openSource = {
	githubUserName: "alihamzazaidi",
};

export const contact = {};

export const socialLinks = { 
	stackoverflow: "https://stackoverflow.com/users/5201178/hamza-zaidi",
	github: "https://github.com/alihamzazaidi", 
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	skills: [
		emoji(
			"⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
		),
		emoji(
			"⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"
		),
		emoji(
			"⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
		),
	],

	softwareSkills: [
		{
			skillName: "html-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "css3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		{
			skillName: "sass",
			fontAwesomeClassname: "logos:sass",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		{
			skillName: "TypeScript",
			fontAwesomeClassname: "logos:typescript-icon",
		},
		{
			skillName: "reactjs",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "nodejs",
			fontAwesomeClassname: "logos:nodejs-icon",
		},
		{
			skillName: "flutter",
			fontAwesomeClassname: "logos:flutter",
		},
		{
			skillName: "swift",
			fontAwesomeClassname: "vscode-icons:file-type-swift",
		},
		{
			skillName: "npm",
			fontAwesomeClassname: "vscode-icons:file-type-npm",
		},
		{
			skillName: "sql-database",
			fontAwesomeClassname: "vscode-icons:file-type-sql",
		},
		{
			skillName: "mongoDB",
			fontAwesomeClassname: "vscode-icons:file-type-mongo",
		},
		{
			skillName: "aws",
			fontAwesomeClassname: "logos:aws",
		},
		{
			skillName: "firebase",
			fontAwesomeClassname: "logos:firebase",
		},
		{
			skillName: "python",
			fontAwesomeClassname: "logos:python",
		},
		{
			skillName: "git",
			fontAwesomeClassname: "logos:git-icon",
		},
		{
			skillName: "docker",
			fontAwesomeClassname: "logos:docker-icon",
		},
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "70",
	},
	{
		Stack: "Programming",
		progressPercentage: "60",
	},
];

export const educationInfo = [
	{
		schoolName: "University of Punjab",
		subHeader: "BS(Hons) in Computer Science",
		duration: "Feb 2013 - Feb 2016",
		desc: "Develope multiple projects on different technologies during academics",
		descBullets: [
			"Ride Booking App (React Native | Node.js)",
			"Order Management System (React JS | .Net Core)",
			"Carehome Software (Next JS | Node.js)"
		],
	}
	
	
];

export const experience = [
	{
		role: "Software Engineer",
		company: "RedPyrax",
		companylogo: "/img/icons/common/redpyrax.png",
		date: "June 2017 – Feb 2021",
		desc: "Leading different teams of software engineers for accomplishing different projects on small, medium tolarge scale, developing customized applications, using the latest trends and technologies.",
	},
	{
		role: "Front-End Developer",
		company: "Senserve",
		companylogo: "/img/icons/common/senserve.jpg",
		date: "March 2016 – April 2017",
		desc: "Build a web-based platform to monitor power plant systems",
	},
	{
		role: "Backend Developer Intern",
		company: "Soft System (Pvt)",
		companylogo: "/img/icons/common/intern.png", 
		date: "Jan 2015 – Jun 2015",
		desc: "Node.Js application development, server side scripting, database design and implementation",
	},
];

export const projects = [
	{
		name: "Hyper Planner App",
		desc: "Hyperplanner helps you organize your tasks fast and easy with a clean overview. Scheduling your day makes you more productive and focused. With calendar integration, it makes it easier to find time between your everyday activities.",
		link: "https://hyperplannerapp.com/",
	},
	{
		name: "Jewellery Ecommerce Store",
		desc: "Jewellery Store using React jS front-end technology",
		link: "https://www.radsjewellery.com/ ",
	},
	{
		name: "Fitness specialist",
		link: "https://www.marieforleo.com/",
	},
];

export const feedbacks = [
	{
		name: "Mark Que (Fiverr)",
		feedback:
			"The seller is great, always updates me with the progress of the program. He divided the order into two, so this review is only for Part 1. He is flexible with changes, and he listens to what i want. Hoping to have a great product for the part 2.",
	},
	{
		name: "Antoine Sherman (Fiverr)",
		feedback:
			"I have to say this guy is so patient and understanding. He goes to the end of the earth to make you happy. I had a difficult task to get completed. I was turned down by several other developer and he took the task and completed it. I will always continue to work with him. Thank you again!!!",
	},
];
