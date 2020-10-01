/* eslint-disable no-undef */
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { App } from './App'

jest.mock('./taxi_app/Home', () => ({ Home: () => <div>Home component</div> }))
jest.mock('./taxi_app/About', () => ({ About: () => <div>About component</div> }))
jest.mock('./taxi_app/Profile', () => ({ Profile: () => <div>Profile component</div> }))

const newLocal = render(<App />)
describe("App", () => {
	it("renders correctly", () => {
		const { container } = newLocal
		expect(container.innerHTML).toMatch("Home component")
	})

	describe("when click on navigation buttons", () => {
		it("opens the corresponding page", () => {
			const { getByText, container } = render(<App />)

			fireEvent.click(getByText('About'))
			expect(container.innerHTML).toMatch("About component")
			fireEvent.click(getByText('Profile'))
			expect(container.innerHTML).toMatch("Profile component")
		})
	})
})