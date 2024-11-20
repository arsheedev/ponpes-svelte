import BookOpen from 'lucide-svelte/icons/book-open'
import Bot from 'lucide-svelte/icons/bot'
import SquareTerminal from 'lucide-svelte/icons/square-terminal'

export type AdminNavMenutype = {
	title: string
	url: string
	icon: typeof SquareTerminal | typeof BookOpen | typeof Bot
	isActive?: boolean
	items: {
		title: string
		url: string
	}[]
}[]

export const adminNavMenu: AdminNavMenutype = [
	{
		title: 'User',
		url: '/admin/user',
		icon: SquareTerminal,
		isActive: true,
		items: [
			{
				title: 'Semua User',
				url: '/admin/user'
			},
			{
				title: 'Perlu Verifikasi',
				url: '/admin/user?verified=false'
			}
		]
	},
	{
		title: 'Pembayaran',
		url: '/admin/pembayaran',
		icon: Bot,
		items: [
			{
				title: 'Semua Pembayaran',
				url: '/admin/pembayaran'
			}
		]
	},
	{
		title: 'Pembayaran User',
		url: '#',
		icon: BookOpen,
		items: [
			{
				title: 'Histori Pembayaran',
				url: '#'
			},
			{
				title: 'Perlu Verifikasi',
				url: '#'
			}
		]
	}
]
