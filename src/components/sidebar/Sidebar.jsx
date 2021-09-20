import React from 'react'
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './../../utils/context';
import { social, links } from './../../utils/data'
import logo from './../../img/logo.svg'

export default function Sidebar() {
   return (
		<aside
			className={`sidebar show-sidebar`}
		>
			<div className='sidebar-header'>
				{/* <img src={logo} className='logo' alt='pro-tech' width='250px' height='auto'/>  */}
            <h3 className='logo-brand'>Pro-Technologies</h3>
            
				<button className='close-btn'>
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
