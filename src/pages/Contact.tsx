import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
    // Your email address for contact form submissions
    const emailAddress = "somanikhilsai13@gmail.com";
    const [form, setForm] = useState({ email: '', subject: '', message: '' });
    const [status, setStatus] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Set loading state
        setIsSubmitting(true);
        setStatus('Opening email client...');

        // Create mailto URL with form data
        const subject = form.subject || 'Website Contact';
        const body = `Email: ${form.email}\n\nMessage:\n${form.message}`;
        const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        // Open default mail client
        window.location.href = mailtoUrl;   
        
        // Reset form after a delay
        setTimeout(() => {
            setStatus('Email client opened. Thank you!');
            setForm({ email: '', subject: '', message: '' });
            setIsSubmitting(false);
        }, 1000);
    };

    return (
        <div className="min-h-screen flex flex-col justify-center bg-pattern text-white px-6 py-20">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl font-bold mb-12 text-white">
                        Contact
                    </h2>

                    {status && (
                        <motion.div 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`mb-6 p-4 rounded ${status.includes("Failed") ? "bg-red-900/30" : "bg-green-900/30"}`}
                        >
                            <p className="text-center">
                                {status}
                            </p>
                        </motion.div>
                    )}
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <p className="text-lg mb-2">Your Email</p>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                placeholder="What's your Email?"
                                className="w-full p-4 bg-gray-900/50 border border-purple-900/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none text-white placeholder-gray-500"
                            />
                        </div>

                        <div>
                        <p className="text-lg mb-2">Subject</p>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={form.subject}
                                onChange={handleChange}
                                placeholder="Subject"
                                className="w-full p-4 bg-gray-900/50 border border-purple-900/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none text-white placeholder-gray-500"
                            />
                        </div>

                        <div>
                            <p className="text-lg mb-2">Your Message</p>
                            <textarea
                                id="message"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                placeholder="What's your message?"
                                className="w-full p-4 bg-gray-900/50 border border-purple-900/30 rounded-lg h-40 resize-none focus:ring-2 focus:ring-purple-500 focus:outline-none text-white placeholder-gray-500"
                            />
                        </div>

                        <motion.button 
                            type="submit" 
                            disabled={isSubmitting}
                            className={`px-8 py-3 ${isSubmitting ? 'bg-purple-700 cursor-not-allowed' : 'bg-purple-700 hover:bg-purple-800'} text-white font-medium rounded-lg transition-all duration-200`}
                            whileHover={{ scale: isSubmitting ? 1 : 1.03 }}
                            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                        >
                            {isSubmitting ? 'Sending...' : 'Send'}
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
