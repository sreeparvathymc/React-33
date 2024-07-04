
import React, { useState } from "react";




const AddContact = ({ handleAddContact }) => {


    // 1
    const [contactData, setContactData] = useState({ name: "", email: "", phone: "" });



    // 2
    const handleChange = (e) => {
        const { name, value } = e.target;
        setContactData({ ...contactData, [name]: value }); 
    };


    // 3
    const handleAdd = (e) => {
        e.preventDefault(); // Prevent form submission
        if (contactData.name === "" || contactData.email === "" || contactData.phone === "") {
            alert("Please fill all the details");
            return;
        }
        handleAddContact(contactData);
        setContactData({ name: "", email: "", phone: "" });
    };




    return (
        <div>
            <form className="bg-purple-100 text-center py-6">



                <label className="mr-4">Name</label>

                <input
                    className="p-2 focus:outline-none"
                    type="text"
                    placeholder="Enter Name"
                    name="name"
                    value={contactData.name}
                    onChange={handleChange}
                />
                <br />
                <br />
                <label className="mr-4">Phone</label>
                <input
                    className="p-2 focus:outline-none"
                    type="text"
                    placeholder="Enter Phone Number"
                    name="phone"
                    value={contactData.phone}
                    onChange={handleChange}
                />
                <br />
                <br />
                <label className="mr-4">Email</label>
                <input
                    className="p-2 focus:outline-none"
                    type="email"
                    placeholder="Enter Email"
                    name="email"
                    value={contactData.email}
                    onChange={handleChange}
                />
                <br />
                <br />
                <button className="bg-purple-900 text-white px-7 py-2 rounded-md hover:bg-purple-800" onClick={handleAdd}>Add Contact</button>
            </form>
        </div>
    );
};

export default AddContact;
