import styles from './Hero.module.scss'

export default function Hero() {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<div className={styles.title}>Hey! I&apos;m Ebuka.</div>
				<div className={styles.desc}>- A Software developer passionate about building bold applications, web experiences and everything in between.</div>
			</div>
			<div className={styles.heroBackground}/>
		</div>
	)
}