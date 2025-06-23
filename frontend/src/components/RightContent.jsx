import React from 'react';
import { useThemeStore } from '../store/useThemeStore';

const RightContent = () => {
    const { theme } = useThemeStore();

    // Define text colors based on theme
    const textColor =
        theme === 'dark' ? 'text-gray-300' :
            theme === 'light' ? 'text-gray-800' :
                theme === 'coffee' ? 'text-brown-600' :
                    'text-green-600'; // Default color

    return (
        <>
            <div className="hidden lg:flex flex-col justify-center items-center bg-primary/10 p-10">
                <h2 className="text-2xl font-bold mt-6">Welcome back!</h2>
                <blockquote className={`text-lg italic text-center ${textColor} mt-4`}>
                    "Editing and deleting a chat can lead to mistakes."
                </blockquote>
                <p className="text-base-content/60 text-center max-w-sm mt-2">
                    Sign in to continue your conversations and catch up with your messages.
                </p>
            </div>
        </>
    );
};

export default RightContent;
