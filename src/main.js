import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import './index.css'

const i18n = createI18n({
	locale: 'en',
	legacy: true,
	globalInjection: true,
	messages: {
		en: {
			privacy_policy: 'Privacy Policy',
			h1: {
				line1: 'Demo Application for an',
				line2: 'Open Source Privacy Policy',
			},
			intro: {
				p1: 'The privacy policy below is created using the open source package <a href="https://github.com/webflorist/privacy-policy-vue" target="_blank">webflorist/privacy-policy-vue</a>.',
				p2: 'This text <i>should</i> be GDPR-compliant, although the author takes <strong>no responsibility</strong> whatsowever for this.',
				p3: 'Feel free to use it as you wish.',
			},
			source_code_demo: 'Source code of this demo',
			source_code_parent: 'Source code of parent package',
		},
		de: {
			privacy_policy: 'Datenschutzerklärung',
			h1: {
				line1: 'Demo Applikation für eine',
				line2: 'Open Source Datenschutzerklärung',
			},
			intro: {
				p1: 'Die folgende Datenschutzerklärung wurde mit dem open source paket <a href="https://github.com/webflorist/privacy-policy-vue" target="_blank">webflorist/privacy-policy-vue</a> erstellt.',
				p2: 'Dieser Text <i>sollte</i> DSGVO-konform sein. Der Autor übernimmt allerdings <strong>keinerlei Verantwortung</strong> dafür.',
				p3: 'Der Text steht zur freien Verfügung.',
			},
			source_code_demo: 'Quellcode dieser Demo',
			source_code_parent: 'Quellcode des Elternpakets',
		},
	},
})

createApp(App).use(i18n).mount('#app')
