<script lang="ts">
	import type { PageData } from './$types'
	import RegisterUserForm from './RegisterUserForm.svelte'

	let { data }: { data: PageData } = $props()
</script>

<RegisterUserForm data={data.form} />
