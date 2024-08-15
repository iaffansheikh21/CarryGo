'use client'
import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { IoMailOutline } from "react-icons/io5";

const ContactForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        let valid = true;

        const newErrors = { name: '', email: '', subject:'', message: '' };

        if (name.trim() === '') {
            newErrors.name = 'Name is required.';
            valid = false;
        }
     

        if (email.trim() === '') {
            newErrors.email = 'Email is required.';
            valid = false;
        } else if (!validateEmail(email)) {
            newErrors.email = 'Please enter a valid email address.';
            valid = false;
        }
        if (subject.trim() === '') {
            newErrors.subject = 'Subject is required.';
            valid = false;
        }

        if (message.trim() === '') {
            newErrors.message = 'Message is required.';
            valid = false;
        }

        setErrors(newErrors);

        if (valid) {
            console.log('Form submitted successfully:', { name, email, subject, message });
            // Clear form fields if necessary
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
            setErrors({ name: '', email: '', subject:'', message: '' });
        } else {
            console.log('Validation failed:', newErrors);
        }
    };

    return (
        <>
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d426.1187087589636!2d73.0893009!3d31.4235715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922690b735d0f31%3A0x30385f1a9208be0!2sFaisalabad%2C%20Pakistan!5e0!3m2!1sen!2suk!4v1692128888888!5m2!1sen!2suk"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
            ></iframe>

            <div className="flex flex-col md:flex-row justify-between items-start bg-[#F2F2F2] p-8 md:p-16">
                <div className="w-full md:w-[35%] mt-8 md:mb-0">
                    <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
                    <p className="text-gray-600 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec tincidunt arcu, sit amet fermentum sem.
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra.
                    </p>
                    <ul className="space-y-2">
                        <li className="flex items-center text-red-600">
                            <span className="material-icons mb-1"><FaMapMarkerAlt size={14} /></span>
                            <span className="ml-2 text-gray-800 text-md">2519 Stanley Avenue, Huntington, NY 11743</span>
                        </li>
                        <li className="flex items-center text-red-600">
                            <span className="material-icons mb-1" ><FaPhoneAlt size={14} /></span>
                            <span className="ml-2 text-gray-800">+92-3101048485</span>
                        </li>
                        <li className="flex items-center text-red-600 cursor-pointer">
                            <span className="material-icons"><IoMailOutline /></span>
                            <span className="ml-2 text-gray-800 hover:text-red-600 transition duration-400">hello@example.com</span>
                        </li>
                        <li className="flex items-center text-red-600 cursor-pointer">
                            <span className="material-icons"><IoMailOutline /></span>
                            <span className="ml-2 text-gray-800 hover:text-red-600 transition duration-400">support@example.com</span>
                        </li>
                    </ul>
                </div>

                <div className="w-full md:w-[65%] mx-0 md:mx-4 mt-8 md:mt-0">
                    <form className="bg-[#F2F2F2] p-8 rounded-lg space-y-6" onSubmit={handleSubmit}>
                        <h2 className="text-2xl font-semibold ">Contact Form</h2>
                        <div className='flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8'>
                            <div className="flex flex-col space-y-2 w-full md:w-1/2">
                                <label htmlFor="name" className="text-gray-600">Your Name <span className='text-red-500'>*</span></label>
                                <input
                                    type="text"
                                    id="name"
                                    className="border border-gray-300 p-2 h-14 shadow-inner rounded-sm"
                                    placeholder="Your Name"
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                        console.log('Name:', e.target.value);
                                    }}
                                />
                                {errors.name && <span className="text-red-600 text-sm">{errors.name}</span>}
                            </div>
                            <div className="flex flex-col space-y-2 w-full md:w-1/2">
                                <label htmlFor="email" className="text-gray-600">Your Email <span className='text-red-500'>*</span></label>
                                <input
                                    type="email"
                                    id="email"
                                    className="border border-gray-300 p-2 h-14 shadow-inner rounded-sm"
                                    placeholder="Your Email"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        console.log('Email:', e.target.value);
                                    }}
                                />
                                {errors.email && <span className="text-red-600 text-sm">{errors.email}</span>}
                            </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="subject" className="text-gray-600">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                className="border border-gray-300 p-2 h-14 shadow-inner rounded-sm"
                                placeholder="Subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                            />
                            {errors.subject && <span className="text-red-600 text-sm">{errors.subject}</span>}
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="message" className="text-gray-600">Your Message <span className='text-red-500'>*</span></label>
                            <textarea
                                id="message"
                                className="border border-gray-300 p-2 rounded-sm shadow-inner h-32 resize-y"
                                placeholder="Your Message"
                                value={message}
                                onChange={(e) => {
                                    setMessage(e.target.value);
                                    console.log('Message:', e.target.value);
                                }}
                            />
                            {errors.message && <span className="text-red-600 text-sm">{errors.message}</span>}
                        </div>
                        <button
                            type="submit"
                            className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ContactForm;

