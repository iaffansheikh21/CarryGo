'use client'
import React, { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useDropzone } from 'react-dropzone';
const AdForm: React.FC = () => {
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [galleryFiles, setGalleryFiles] = useState<File[]>([]);

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};
        const requiredFields = [
            { id: 'typeInput', message: 'Type is required' },
            { id: 'titleInput', message: 'Title is required' },
            { id: 'priceInput', message: 'Price is required' },
            { id: 'nameInput', message: 'Name is required' },
            { id: 'emailInput', message: 'Email is required' },
            { id: 'phoneInput', message: 'Phone is required' },
            { id: 'cityInput', message: 'City is required' },
            { id: 'districtInput', message: 'District is required' },
        ];

        requiredFields.forEach(field => {
            const element = document.getElementById(field.id) as HTMLInputElement;
            if (!element?.value.trim()) {
                newErrors[field.id] = field.message;
            }
        });

        setErrors(newErrors);
    };
    const onDropGallery = (acceptedFiles: File[]) => {
        setGalleryFiles([...galleryFiles, ...acceptedFiles]);
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: onDropGallery,
        accept: {
            'image/*': []
        }
    });

    const removeGalleryFile = (file: File) => {
        setGalleryFiles(galleryFiles.filter(f => f !== file));
    };

    return (
        <div className="w-full mt-6 mx-auto p-6 bg-[#F2F2F2]">
            <div className="bg-yellow-50 p-4 rounded mb-6 mt-6">
                <p>You don&apos;t have an account!</p>
                <p className="text-sm">You can submit only 1 ad at a time. To submit more, you need to <a href="sing-in" className="text-red-500">Sign in</a> or <a href="register" className="text-red-500">Register</a></p>
            </div>
            <div className="bg-[#F2F2F2] rounded-lg p-6">
                <h2 className="text-lg font-semibold mb-4">Basic Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block mb-1 font-semibold">Type*</label>
                        <div className="flex items-center space-x-4">
                            <div className='bg-gray-50 border hover:bg-white cursor-pointer'>
                                <label className="flex items-center mx-2 my-2">
                                    <input type="radio" name="type" className="mr-2" /> Offer
                                </label>
                            </div>
                            <div className='bg-gray-50 border hover:bg-white cursor-pointer'>
                                <label className="flex items-center mx-2 my-2">
                                    <input type="radio" name="type" className="mr-2" /> Demand
                                </label>
                            </div>
                        </div>
                        {errors.typeInput && <p className="text-red-600 text-sm">{errors.typeInput}</p>}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 mt-6">
                    <div>
                        <label className="block mb-1 font-semibold">Title*</label>
                        <input id="titleInput" type="text" placeholder="Title" className="w-full p-2 border rounded" />
                        {errors.titleInput && <p className="text-red-600 text-sm">{errors.titleInput}</p>}
                    </div>
                    <div>
                        <label className="block mb-1 font-semibold">Price*</label>
                        <input id="priceInput" type="text" placeholder="$" className="w-96 p-2 border rounded" />
                        {errors.priceInput && <p className="text-red-600 text-sm">{errors.priceInput}</p>}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div>
                        <label className="block mb-1 font-semibold">Your Name*</label>
                        <input id="nameInput" type="text" placeholder="Name" className="w-full p-2 border rounded" />
                        {errors.nameInput && <p className="text-red-600 text-sm">{errors.nameInput}</p>}
                    </div>
                    <div>
                        <label className="block mb-1 font-semibold">Your Email*</label>
                        <input id="emailInput" type="email" placeholder="Email" className="w-full p-2 border rounded" />
                        {errors.emailInput && <p className="text-red-600 text-sm">{errors.emailInput}</p>}
                    </div>
                    <div>
                        <label className="block mb-1 font-semibold">Your Phone*</label>
                        <input id="phoneInput" type="text" placeholder="Phone" className="w-full p-2 border rounded" />
                        {errors.phoneInput && <p className="text-red-600 text-sm">{errors.phoneInput}</p>}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block mb-1 font-semibold">Category*</label>
                        <select className="w-full p-2 border rounded">
                            <option>Select Category</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-1 font-semibold">Features</label>
                        <div className="p-4 border rounded h-full flex items-center justify-center text-gray-500">
                            Please Select a Category
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <h1 className='font-normal my-8 text-3xl'>Details</h1>
                    <label className="block mb-2 font-normal">Additional Details</label>
                    <textarea placeholder="Details" className="w-full p-2 border rounded h-24 mb-10" />
                </div>
                <h1 className="text-3xl font-normal mb-10">Location</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                        <label className="block mb-1 font-semibold">City*</label>
                        <input id="cityInput" type="text" placeholder="City" className="w-full p-2 border rounded" />
                        {errors.cityInput && <p className="text-red-600 text-sm">{errors.cityInput}</p>}
                    </div>
                    <div>
                        <label className="block mb-1 font-semibold">District*</label>
                        <input id="districtInput" type="text" placeholder="District" className="w-full p-2 border rounded" />
                        {errors.districtInput && <p className="text-red-600 text-sm">{errors.districtInput}</p>}
                    </div>
                    <div>
                        <label className="block mb-1 font-semibold">Street</label>
                        <input type="text" placeholder="Street" className="w-full p-2 border rounded" />
                    </div>
                </div>
                <div className="relative mb-4">
                    <label className="block mb-1 font-semibold">Exact Location</label>
                    <input id="exactLocationInput" type="text" placeholder="Enter Location" className="w-full p-2 border rounded pr-10" />
                    <div className="absolute top-3 right-0 flex items-center justify-center h-full w-10 text-black">
                        <FaMapMarkerAlt />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block mb-1 font-semibold">Map</label>
                    <div className="w-full h-64 border rounded overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.83543450989!2d144.95592631535718!3d-37.81720974202127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce7e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1631298877647!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
                <h2 className="text-lg font-semibold mb-4">Gallery</h2>
                <div {...getRootProps()} className={`border-dashed border-2 border-gray-300 p-6 text-center mb-8 hover:bg-gray-200 cursor-pointer ${isDragActive ? 'border-red-500' : ''}`}>
                    <input {...getInputProps()} />
                    <p className="text-gray-500"><span className="text-red-500">+</span> Click or drag images here</p>
                </div>
                {galleryFiles.length > 0 && (
                    <div className="mt-4">
                        <h2 className="text-lg font-semibold mb-2">Uploaded Photos</h2>
                        <ul className="grid grid-cols-3 gap-2">
                            {galleryFiles.map((file, index) => (
                                <li key={index} className="relative">
                                    <img
                                        src={URL.createObjectURL(file)}
                                        alt={file.name}
                                        className="w-full h-32 object-cover rounded my-4"
                                    />
                                    <button
                                        onClick={() => removeGalleryFile(file)}
                                        className="absolute top-1 right-1 bg-red-500 text-white mt-4 rounded-full p-1"
                                    >
                                        ✕
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                <h2 className="text-lg font-semibold mb-4">Additional Information</h2>
                    <div className="mb-4">
                        <label className="block mb-2 font-normal">Opening Hours (optional)</label>
                        <div className="bg-white p-4 rounded flex items-center justify-between">
                            <span className="text-gray-700">Add opening hours</span>
                        </div>
                    </div>
                <div className="mt-4 flex justify-end">
                        <button onClick={validateForm} className="bg-blue-500 hover:bg-blue-700 ease-in-out transition duration-400 text-white p-2 rounded">Preview</button>
                    </div>

            </div>
        </div>
    );
}

export default AdForm;
