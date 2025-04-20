'use client'

import { Toaster } from '@/components/ui/sonner'

import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<Toaster />
			<Button
				variant="link"
				onClick={() =>
					toast('Toast', {
						description: 'yipppeeeee',
						action: {
							label: 'ok',
							onClick: () => {},
						},
					})
				}
			>
				Show Toast
			</Button>
		</div>
	)
}
