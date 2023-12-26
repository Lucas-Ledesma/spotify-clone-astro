import { create } from 'zustand'

export const usePlayerStore = create((set) => ({
	volume: 1,
	setVolume: (volume) => set({ volume }),
	isPlaying: false,
	currentMusic: { playlist: null, song: null, songs: [] },
	setIsPlaying: (isPlaying) => set({ isPlaying }),
	setCurrentMusic: (currentMusic) => set({ currentMusic }),
}))
