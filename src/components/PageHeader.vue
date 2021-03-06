<script setup>
import { useI18n } from 'vue-i18n'
import GithubLogo from './GithubLogo.vue'

defineProps({
	singular: {
		type: Boolean,
		required: true,
	},
})

const { locale } = useI18n({ useScope: 'global' })

const languages = [
	{ name: 'English', locale: 'en' },
	{ name: 'German', locale: 'de' },
]
</script>

<template>
	<div class="relative bg-gray-50 overflow-hidden">
		<div class="relative pt-6 pb-16 sm:pb-24">
			<div class="max-w-7xl mx-auto px-4 sm:px-6">
				<nav
					class="relative flex flex-wrap items-center justify-between sm:h-10"
					aria-label="Global"
				>
					<div class="flex items-center flex-1 basis-10 mb-5 xs:mb-0">
						<div
							class="flex items-center justify-between w-full md:w-auto"
						>
							<a
								href="https://github.com/webflorist"
								class="no-style"
							>
								<span class="sr-only">Webflorist</span>
								<img
									alt="Webflorist logo"
									src="/webflorist.svg"
									class="w-10"
								/>
							</a>
						</div>
					</div>
					<div
						class="flex text-center flex-wrap items-center gap-5 justify-center"
					>
						<div class="button-group relative z-0 inline-flex">
							<a
								href="/"
								class="button"
								:class="{
									active: !singular,
								}"
							>
								Plural
							</a>
							<a
								class="button"
								href="/?singular"
								:class="{
									active: singular,
								}"
							>
								Singular
							</a>
						</div>
						<div class="button-group relative z-0 inline-flex">
							<button
								v-for="(language, key) in languages"
								:key="key"
								type="button"
								:class="{
									active: locale === language.locale,
								}"
								:disabled="locale === language.locale"
								@click="locale = language.locale"
							>
								{{ language.name }}
							</button>
						</div>
					</div>
				</nav>
			</div>

			<main class="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
				<div class="text-center">
					<h1
						class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-5xl"
					>
						<span class="block">{{ $t('h1.line1') }}</span>
						{{ ' ' }}
						<span class="block text-primary-600">{{
							$t('h1.line2')
						}}</span>
					</h1>
					<div
						class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
					>
						<p v-html="$t('intro.p1')" />
						<p class="mt-3" v-html="$t('intro.p2')" />
						<p class="mt-3" v-html="$t('intro.p3')" />
					</div>
					<div
						class="mt-5 max-w-xl mx-auto xs:flex xs:justify-center md:mt-8"
					>
						<div class="rounded-md shadow">
							<a
								href="https://github.com/webflorist/privacy-policy-vue-demo"
								target="_blank"
								class="no-style w-full h-full flex items-center justify-between px-8 py-3 border border-transparent text-base font-medium rounded-md xs:rounded-r-none text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10 leading-tight"
							>
								<GithubLogo
									alt="Github logo"
									class="w-10 mr-5 text-white"
								/>
								{{ $t('source_code_demo') }}
							</a>
						</div>
						<div class="mt-3 rounded-md shadow xs:mt-0">
							<a
								href="https://github.com/webflorist/privacy-policy-vue"
								target="_blank"
								class="no-style w-full h-full flex items-center justify-between px-8 py-3 border border-transparent text-base font-medium rounded-md xs:rounded-l-none text-primary-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 leading-tight"
							>
								<GithubLogo
									alt="Github logo"
									class="w-10 mr-5 text-primary"
								/>
								{{ $t('source_code_parent') }}
							</a>
						</div>
					</div>
				</div>
			</main>
		</div>
	</div>
</template>

<style scoped>
button,
.button {
	@apply relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500;

	&.active {
		@apply bg-primary text-white font-bold hover:bg-primary;
	}
}

.button-group {
	@apply shadow-sm rounded-md;

	button,
	.button {
		&:first-child {
			@apply rounded-l-md;
		}

		&:last-child {
			@apply rounded-r-md;
		}
	}
}
</style>
