    import React, { useState } from 'react';
    import axios from 'axios';

    const Contact: React.FC = () => {
        const [form, setForm] = useState({ name: '', email: '', message: '' });
        const [status, setStatus] = useState<string | null>(null);
        const [isSubmitting, setIsSubmitting] = useState(false);

        const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setForm({ ...form, [e.target.name]: e.target.value });
        };

        const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault();
            
            // Set loading state
            setIsSubmitting(true);
            setStatus('Sending your message...');

            try {
                // Use the Vercel API route
                const response = await axios.post("/api/send-email", form);
                setStatus(response.data.message);
                setForm({ name: '', email: '', message: '' });
            } catch (error) {
                console.error('Error submitting form:', error);
                setStatus('Failed to send the message. Please try again.');
            } finally {
                setIsSubmitting(false);
            }
        };

        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4">
                <div className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-center mb-4">Contact Me</h2>
                    
                    {status && (
                        <p className={`text-center text-sm mb-3 ${status.includes("Failed") ? "text-red-400" : "text-green-400"}`}>
                            {status}
                        </p>
                    )}
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                placeholder="Enter your name"
                                className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                placeholder="Enter your email"
                                className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                placeholder="Write your message here"
                                className="w-full p-2 bg-gray-700 border border-gray-600 rounded h-28 resize-none focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            />
                        </div>

                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className={`w-full ${isSubmitting ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'} text-white font-medium py-2 rounded transition-all duration-200`}
                        >
                            {isSubmitting ? 'Sending...' : 'Submit'}
                        </button>
                    </form>
                </div>
            </div>
        );
    };

    export default Contact;
