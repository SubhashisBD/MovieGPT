import React from 'react'

const Footer = () => {
    return (
        <div className="bg-black text-gray-400 w-full px-4 md:px-10 pt-10">
            <div className="max-w-6xl mx-auto">
                <h1 className="mb-6">Questions? Call <span className="underline">000-800-919-1743</span></h1>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="space-y-3">
                        <p className="text-sm underline cursor-pointer">FAQ</p>
                        <p className="text-sm underline cursor-pointer">Investor Relations</p>
                        <p className="text-sm underline cursor-pointer">Privacy</p>
                        <p className="text-sm underline cursor-pointer">Speed Test</p>
                    </div>
                    <div className="space-y-3">
                        <p className="text-sm underline cursor-pointer">Help Centre</p>
                        <p className="text-sm underline cursor-pointer">Jobs</p>
                        <p className="text-sm underline cursor-pointer">Cookie Preferences</p>
                        <p className="text-sm underline cursor-pointer">Legal Notices</p>
                    </div>
                    <div className="space-y-3">
                        <p className="text-sm underline cursor-pointer">Account</p>
                        <p className="text-sm underline cursor-pointer">Ways to Watch</p>
                        <p className="text-sm underline cursor-pointer">Corporate Information</p>
                        <p className="text-sm underline cursor-pointer">Only on Netflix</p>
                    </div>
                    <div className="space-y-3">
                        <p className="text-sm underline cursor-pointer">Media Centre</p>
                        <p className="text-sm underline cursor-pointer">Terms of Use</p>
                        <p className="text-sm underline cursor-pointer">Contact Us</p>
                        <p className="text-sm underline cursor-pointer">Ad Choices</p>
                    </div>
                </div>
                
                <p className="text-gray-400 pb-16 pt-8">Netflix India</p>
            </div>
        </div>
    )
}

export default Footer;