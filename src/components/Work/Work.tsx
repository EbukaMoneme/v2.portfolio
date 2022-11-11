import Image from 'next/image'
import MaintenancePro from '../../../public/images/MaintenancePro.png'
import Bubbles from '../../../public/images/Bubbles.png'
import Scheduler from '../../../public/images/Scheduler.png'
import Jungle from '../../../public/images/Jungle.png'
import Experience from './FeaturedProject/FeaturedProject'
import styles from './Work.module.scss'
import FeaturedProject from './FeaturedProject/FeaturedProject'


export default function Work() {

	const projects = [
		{
			id: 1,
			title: "MaintenacePro",
			desc: "A computerized maintenance management system that allows property and maintenance managers to work more efficiently.",
			src: MaintenancePro,
			techUsed: ["MongoDb", "React", "Socket.io"],
			github: "https://github.com/EbukaMoneme/MaintenancePro",
			live: "https://maintenancepro.netlify.app/"

		},
		{
			id: 2,
			title: "Scheduler",
			desc: "A computerized maintenance management system that allows property and maintenance managers to work more efficiently.",
			src: Scheduler,
			techUsed: ["React", "Axios", "Storybook"],
			github: "https://github.com/EbukaMoneme/scheduler",
			live: ""
		},
		{
			id: 3,
			title: "Jungle",
			desc: "A computerized maintenance management system that allows property and maintenance managers to work more efficiently.",
			src: Jungle,
			techUsed: ["Ruby", "Rails", "PSQL", "Stripe"],
			github: "https://github.com/EbukaMoneme/jungle-rails",
			live: ""
		}
	]
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<div className={styles.title}>Things I&apos;ve Built</div>
				<div>
					{projects.map((project) => 
						<FeaturedProject 
							key={project.id} 
							src={project.src}
							id={project.id}
							title={project.title} 
							desc={project.desc}
							techUsed={project.techUsed}
							github={project.github}
							live={project.live}
						/>
					)}
					
				</div>
			</div>
		</div>
	)
}