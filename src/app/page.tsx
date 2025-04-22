'use client'

import { useState } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'

import { HomeTab } from './tabs/homeTab'
import { StatsTab } from './tabs/statsTab'
import { OptionsTab } from './tabs/optionsTab'
import { InfoTab } from './tabs/infoTab'

export default function Home() {
	const [tab, setTab] = useState('home')

	return (
		<div className="h-screen flex flex-col">
			{/* Top bar */}
			<div className="flex justify-between items-center px-4 py-2 border-b">
				<div>© 2025 Logboy2000</div>
				<div className="font-bold">STORE</div>
			</div>

			{/* Main layout */}
			<div className="flex flex-1 overflow-hidden">
				{/* Left - Cookie Area */}
				<div className="w-1/5 border-r flex items-center justify-center p-4">
					<div className="text-center">
						<p>cookie area</p>
						<p className="text-sm opacity-50">(leave blank)</p>
					</div>
				</div>

				{/* Center - Tabs + Content */}
				<div className="w-3/5 flex flex-col">
					{/* Tabs */}
					<Tabs value={tab} onValueChange={setTab} className="w-full">
						<TabsList className="w-full justify-center border-b rounded-none">
							<TabsTrigger value="home">Home</TabsTrigger>
							<TabsTrigger value="stats">Stats</TabsTrigger>
							<TabsTrigger value="options">Options</TabsTrigger>
							<TabsTrigger value="info">Info</TabsTrigger>
						</TabsList>

						{/* Content */}
						<div className="flex-1 overflow-auto p-4">
							<TabsContent value="home">
								<HomeTab />
							</TabsContent>
							<TabsContent value="options">
								<OptionsTab />
							</TabsContent>

							<TabsContent value="stats">
								<StatsTab />
							</TabsContent>
							<TabsContent value="info">
								<InfoTab />
							</TabsContent>
						</div>
					</Tabs>
				</div>

				{/* Right - Upgrade Area */}
				<div className="w-1/5 border-l p-4 inline justify-center ">
					<Card>
						<CardContent className="p-6 text-center">
							🚀 Upgrade section coming soon...
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	)
}
