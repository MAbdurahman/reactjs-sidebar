import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './../../utils/context';
import { social, links } from './../../utils/data';

export default function Sidebar() {
	const { isSidebarOpen, closeSidebar } = useGlobalContext();
	return (
		<aside
			className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}
		>
			<div className='sidebar-header'>
				<h3 className='logo-brand'>Pro-Technologies</h3>

				<button className='close-btn' onClick={closeSidebar}>
					<FaTimes />
				</button>
			</div>
			<ul className='links'>
				{links.map(link => {
					const { id, url, text, icon } = link;
					return (
						<li key={id}>
							<a href={url}>
								{icon}
								{text}
							</a>
						</li>
					);
				})}
			</ul>
			<ul className='social-icons'>
				{social.map(link => {
					const { id, url, icon } = link;
					return (
						<li key={id}>
							<a href={url}>{icon}</a>
						</li>
					);
				})}
			</ul>
		</aside>
	);
}
