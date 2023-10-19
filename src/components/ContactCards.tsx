import { UserType } from '../types';
import { useEffect, useState } from 'react';
import useFetch from 'react-fetch-hook';

const ContactCards = () => {
	const url = 'https://jsonplaceholder.typicode.com/users';
	const { data } = useFetch<UserType>(url);
	const [contactList, setContactList] = useState<UserType | undefined>([]);

	useEffect(() => {
		setContactList(data);
	}, [data]);
	return (
		<>
			{contactList?.map((contact, index) => (
				<div
					className="bg-indigo-500 hover:text-green-200 text-white h-full rounded-lg shadow-md mb-5 cursor-pointer"
					key={index}
				>
					<div className="text-center mt-5">
						<p className="text-white-700 font-semibold text-xl">
							{contact.name}
						</p>
						<p className="text-white-500">
							<span className="font-medium">Username: </span>
							{contact.username}
						</p>
						<p className="text-white-500">
							<span className="font-medium">Email: </span>
							{contact.email}
						</p>
						<p className="text-white-500">
							<span className="font-medium">Phone: </span>
							{contact.phone}
						</p>
						<p className="text-white-500">
							<span className="font-medium">Website: </span>
							{contact.website}
						</p>
						<p className="text-white-500">
							<span className="font-medium">Company: </span>
							{contact.company.name}
						</p>
						<p className="text-white-500">
							<span className="font-medium">Address: </span>
							{contact.address.city}
						</p>
					</div>
				</div>
			))}
		</>
	);
};

export default ContactCards;
