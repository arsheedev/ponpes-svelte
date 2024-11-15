<script lang="ts">
	import type { PageData } from './$types'
	import LoginUserForm from './LoginUserForm.svelte'

	let { data }: { data: PageData } = $props()
</script>

<LoginUserForm data={data.form} />
<a href="/register">Register</a>
