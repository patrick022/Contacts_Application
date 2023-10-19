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
					className="bg-white text-white h-full rounded-lg shadow-md mb-5"
					key={index}
				>
					<div className="text-center mt-5">
						<p className="text-gray-700 font-semibold text-xl">
							{contact.name}
						</p>
						<p className="text-gray-500">
							<span className="font-medium">Username: </span>
							{contact.username}
						</p>
						<p className="text-gray-500">
							<span className="font-medium">Email: </span>
							{contact.email}
						</p>
						<p className="text-gray-500">
							<span className="font-medium">Phone: </span>
							{contact.phone}
						</p>
						<p className="text-gray-500">
							<span className="font-medium">Website: </span>
							{contact.website}
						</p>
					</div>
				</div>
			))}
		</>
	);
};

export default ContactCards;
