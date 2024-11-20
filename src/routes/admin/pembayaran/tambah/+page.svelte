<script lang="ts">
	import type { PageData } from './$types'
	import TambahPembayaranForm from './TambahPembayaranForm.svelte'

	let { data }: { data: PageData } = $props()
</script>

<TambahPembayaranForm data={data.form} />
