


import { Trash } from 'lucide-react';
import React from 'react';

const ContactList = ({ contacts, onDeleteContact }) => {


    
    return (
        <div className='mt-10'>
            <h1 className='text-center text-3xl font-bold text-purple-900'>Contacts</h1>
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2">Name</th>
                        <th className="py-2">Phone</th>
                        <th className="py-2">Email</th>
                        <th className="py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact, index) => (
                        <tr key={index} className="text-center">
                            <td className="border px-4 py-2">{contact.name}</td>
                            <td className="border px-4 py-2">{contact.phone}</td>
                            <td className="border px-4 py-2">{contact.email}</td>
                            <td className="border px-4 py-2">
                                <span 
                                    onClick={() => {
                                        console.log(`Deleting contact at index: ${index}`);
                                        onDeleteContact(index);
                                    }} 
                                    style={{ cursor: 'pointer', marginLeft: '10px' }}
                                >
                                    <Trash className='text-purple-700'/>
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ContactList;

