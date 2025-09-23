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
		color: var(--foreground);
		padding: 2rem;
		border-radius: 20px;
		box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
		text-align: center;
		transition: all 0.3s ease;
		position: relative;
		overflow: hidden;
	}

	.faq-box::before {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: inherit;
		padding: 2px;
		background: linear-gradient(90deg, #ef4444, #f59e0b); /* red to yellow */
		mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
		mask-composite: xor;
		-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
		-webkit-mask-composite: xor;
		pointer-events: none;
		z-index: -1;
	}

	.faq-box {
		background: rgba(255, 255, 255, 0.07); /* semi-transparent for blur effect */
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		border: none;
	}

	.faq-box:hover {
		transform: translateY(-5px);
		box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);
	}

	.faq-box:hover::before {
		background: linear-gradient(90deg, #ef4444, #f59e0b); /* keep red to yellow on hover */
		animation: none;
	}

	@keyframes gradient-shift {
		0%, 100% {
			background: linear-gradient(135deg, #4F46E5, #10B981, #F59E0B, #EF4444, #8B5CF6, #06B6D4);
		}
		25% {
			background: linear-gradient(225deg, #10B981, #F59E0B, #EF4444, #8B5CF6, #06B6D4, #4F46E5);
		}
		50% {
			background: linear-gradient(315deg, #F59E0B, #EF4444, #8B5CF6, #06B6D4, #4F46E5, #10B981);
		}
		75% {
			background: linear-gradient(45deg, #EF4444, #8B5CF6, #06B6D4, #4F46E5, #10B981, #F59E0B);
		}
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
