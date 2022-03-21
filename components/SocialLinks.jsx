import React from "react";

import { Button } from "reactstrap";

import { socialLinks } from "../portfolio";

const SocialLinks = () => {
	return (
		<div className="btn-wrapper text-lg">
			
			
			
			<Button
				className="btn-icon-only rounded-circle ml-1"
				color="github"
				href={socialLinks.github}
				rel="noopener"
				aria-label="Github"
				target="_blank"
			>
				<span className="btn-inner--icon">
					<i className="fa fa-github" />
				</span>
			</Button>
			<Button
				className="btn-icon-only rounded-circle ml-1"
				color="#ffb831"
				href={socialLinks.stackoverflow}
				rel="noopener"
				aria-label="Stackoverflow"
				target="_blank"
			>
				<span className="btn-inner--icon">
					<i className="fa fa-stack-overflow" />
				</span>
			</Button>
		</div>
	);
};

export default SocialLinks;
