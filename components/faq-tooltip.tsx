import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const FAQBox = ({ question, answer }: { question: string; answer: string }) => {
	const [hovered, setHovered] = useState(false);

	return (
		<StyledWrapper>
			<div
				className={`faq-box ${hovered ? "animate" : ""}`}
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
			>
				<h2 className="faq-title">{question}</h2>
				<p className={`faq-text ${hovered ? "show" : "hide"}`}>{answer}</p>
			</div>
		</StyledWrapper>
	);
};

const jelloVertical = keyframes`
	0% { transform: scale3d(1, 1, 1); }
	30% { transform: scale3d(0.75, 1.25, 1); }
	40% { transform: scale3d(1.25, 0.75, 1); }
	50% { transform: scale3d(0.85, 1.15, 1); }
	65% { transform: scale3d(1.05, 0.95, 1); }
	75% { transform: scale3d(0.95, 1.05, 1); }
	100% { transform: scale3d(1, 1, 1); }
`;

const StyledWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2rem;

	.faq-box {
		max-width: 600px;
		width: 100%;
		background: linear-gradient(147deg, #ffe53b 0%, #ff2525 74%);
		color: white;
		padding: 2rem;
		border-radius: 20px;
		box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
		text-align: center;
		transition: transform 0.3s ease;
	}

	.faq-box.animate {
		animation: ${jelloVertical} 1s both;
	}

	.faq-title {
		font-size: 1.8rem;
		margin-bottom: 1rem;
		font-weight: bold;
	}

	.faq-text {
		font-size: 1.2rem;
		line-height: 1.5;
		opacity: 0;
		max-height: 0;
		overflow: hidden;
		transition: opacity 0.4s ease, max-height 0.4s ease;
	}

	.faq-text.show {
		opacity: 1;
		max-height: 200px;
		margin-top: 1rem;
	}
`;

export default FAQBox;
