<script setup>
import { useI18n } from 'vue-i18n'
import PrivacyPolicy from '@webflorist/privacy-policy-vue'
import PageHeader from './components/PageHeader.vue'

const { locale } = useI18n()

const singular =
	new URLSearchParams(window.location.search).get('singular') !== null

const dataController = {
	organisation: 'Acme Corporation',
	name: 'John Doe',
	address: 'Acme Street 1, 123456 Acme City, USA',
	email: 'privacy@example.com',
	phone: '+1 555-0123',
}

let cookies = {
	first_party: [
		{
			name: 'session',
			purpose: 'session', // session | xsrf | hide_alert | analytics | maps | analytics_third_party | maps_third_party
			written_on: 'every_visit', // every_visit | hide_alert | maps | accept_cookies
			duration: 'end_of_session', // end_of_session | 1_year | 2_years | 24_hours | 1_minute | various
		},
	],
	third_party: [
		{
			name: '_ga, _gat, _gid',
			purpose: 'analytics_third_party',
			written_on: 'accept_cookies',
			duration: 'various',
			processor: 'google_eu',
			service: 'Google Analytics',
		},
	],
}

const dataProcessing = {
	webhosting: {
		processor: ['netlify', 'storyblok'],
		data_categories: ['usage_data'],
	},
	analytics: {
		processor: 'google_eu',
		service: 'Google Analytics',
		data_categories: ['usage_data', 'usage_statistics'],
	},
	maps: {
		processor: 'google_usa',
		service: 'Google Maps',
		data_categories: ['usage_data', 'geo_data'],
	},
	send_emails: {
		processor: 'twilio_eu',
		service: 'Twilio Sendgrid',
		data_categories: ['usage_data', 'inventory_data'],
	},
	payment: {
		processor: 'stripe',
		service: 'Stripe Payments',
		data_categories: ['usage_data', 'inventory_data', 'payment_data'],
	},
}
</script>

<template>
	<PageHeader :singular="singular" />
	<article class="container mx-auto prose lg:prose-lg my-10 px-10">
		<h1>{{ $t('privacy_policy') }}</h1>
		<PrivacyPolicy
			:singular="singular"
			:locale="locale"
			:data-controller="dataController"
			:cookies="cookies"
			:data-processing="dataProcessing"
		/>
	</article>
</template>
