import { useState } from 'react'
import styles from './Experience.module.scss'

export default function Experience() {
	const experience = [
		{
			id: 1,
			company: 'Flexibly',
			title: 'Full Stack Software Engineer',
			duration: 'February 2022 - Present',
			description: [
				"Developed and maintained core application features through modular, secure, and well-tested code using React, TypeScript, Node, and Next.js.",
				"Improved test speed by 80% through implementation of Cypress mocks for end-to-end tests.",
				"Lead developer in an agile software development team which completed various epics through sprints, working in conjunction with other developers and engineers.",
				"Implemented smart features for application through integration of natural language processing API’s to improve the user experience"
			],
			link: "http://www.flexibly.ai",
		},
		{
			id: 2,
			company: 'Wiz Kid Coding',
			title: 'Coding Instructor',
			duration: 'January - April 2021',
			description: [
				"Taught coding fundamentals, problem solving and computational thinking skills through video game development using Python and Roblox Studio.",
				"Delivered innovative programs to private and group classes on how to design, code, and publish video games.",
				"Helped kids ages 3 to 16 develop coding skills as an avenue to enhance their ability to think critically and improve their current academic performance."
			],
			link: "https://www.wizkidlearning.com/"
		}
	]

	const [currentJob, setCurrentJob] = useState(experience[0])

	return (
		<div className={styles.container}>
			<div className={styles.jobContainer}>
				<div className={styles.jobTab}>
					{experience.map((job) => {
						return <div key={job.id}>{job.company}</div>
					})}
				</div>
				<div className={styles.jobPanel}></div>
			</div>

			<div className={styles.sectionDiv}>
				<div className={styles.sectionDivContent}></div>
			</div>
		</div>
	)
}