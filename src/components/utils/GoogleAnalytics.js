import { useEffect } from 'react'

const GoogleAnalyticsScript = () => {
	useEffect(() => {
		const script = document.createElement('script')
		script.src = 'https://www.googletagmanager.com/gtag/js?id=G-FXMDB8MDW6'
		script.async = true
		document.head.appendChild(script)
		/* global dataLayer */
		window.dataLayer = window.dataLayer || []
		function gtag() {
			dataLayer.push(arguments)
		}
		gtag('js', new Date())

		gtag('config', 'G-FXMDB8MDW6')

		return () => {
			document.head.removeChild(script)
		}
	}, [])

	return null
}

export default GoogleAnalyticsScript
