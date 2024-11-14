import db from '$lib/server/db'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
	const user = await db.user.findMany({ where: { role: { not: 'ADMIN' } } })
	await db.payment.create({
		data: {
			name: 'test payment 3',
			price: 100_000,
			userNeedToPay: { connect: user }
		}
	})
	// const user = await db.user.findUnique({
	// 	where: { id: 'cm3h5rch30000sndsv76hst1s' },
	// 	include: { needToPay: true }
	// })

	// return { user }
}
