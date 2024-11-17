<script lang="ts">
	import type { PageData } from './$types'
	import EditUserForm from './EditUserForm.svelte'

	let { data }: { data: PageData } = $props()

	if (data.user) {
		data.form.data.name = data.user.name
		data.form.data.username = data.user.username
		data.form.data.password = 'asdfasdf'
		data.form.data.confirmPassword = 'asdfasdf'
		data.form.data.santriName = data.user.waliSantri?.name || ''
	}
</script>

<EditUserForm data={data.form} />
