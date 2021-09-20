import React from 'react'
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './../../utils/context';

export default function HomePage() {
   return (
		<main>
			<button className='sidebar-toggle'>
				<FaBars />
			</button>
			<button className='btn'>
				show modal
			</button>
		</main>
	);
}