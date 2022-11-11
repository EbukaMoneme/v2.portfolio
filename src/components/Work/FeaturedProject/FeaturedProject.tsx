import Image, { StaticImageData } from "next/image";
import  {IoLogoGithub}  from "react-icons/io5";
import  {FiExternalLink, FiGithub}  from "react-icons/fi";
import styles from './FeaturedProject.module.scss';
import classNames from "classnames";
export default function FeaturedProject ({
	src, 
	title,
	id,
	desc,
	techUsed,
	github,
	live
}:{
	src: StaticImageData, 
	title: string,
	id: number,
	desc: string,
	techUsed: string[],
	github: string,
	live: string
}) {

	const flip = id % 2 === 0;

	return (
		<div className={styles.container}>
			<div className={classNames(styles.projectContent, {[styles.switchProjectContent]: flip})}>
				<p className={styles.overline}>Featured Project</p>
				<h3 className={styles.projectTitle}>
					<a href={live || github} target="_blank" rel="noreferrer">
						{title}
					</a>
				</h3>
				<div className={styles.projectDescription}>
					<p>
						{desc}
					</p>
				</div>
				<div className={classNames(styles.techList, {[styles.switchTechList]: flip})}>
					{techUsed.map((tech, index) => <span key={index}>{tech}</span>)}
				</div>
				<div className={classNames(styles.projectLinks, {[styles.switchProjectLinks]: flip})}>
					<a href={github} target="_blank" rel="noreferrer">
						<FiGithub/> 
					</a>
					{live && 
						<a href={live} target="_blank" rel="noreferrer">
							<FiExternalLink/>
						</a>
					}
				</div>
			</div>
			<div className={classNames(styles.projectImage, {[styles.switchProjectImage]: flip})}>
				<a href={live || github} target="_blank" rel="noreferrer">
					<Image 
						src={src} 
						alt="experience image" 
						objectFit="contain" 
					/>
				</a>
			</div>
		</div>
	)
}