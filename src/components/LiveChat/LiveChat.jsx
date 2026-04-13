import React, { useEffect } from 'react'

const LiveChat = () => {
      useEffect(() => {
        // Ensure Tawk_API is attached to the window object
        window.Tawk_API = window.Tawk_API || {};
        
        // Create the script element for Tawk.to widget
        const tawkScript = document.createElement('script');
        tawkScript.src = 'https://embed.tawk.to/69dc9696d27c0d1c369ea8dd/1jm2qoffd';
        tawkScript.async = true;
        tawkScript.charset = 'UTF-8';
        tawkScript.setAttribute('crossorigin', '*');
        
        // Append the script to the body
        document.body.appendChild(tawkScript);
        
        // Cleanup the script on component unmount
        return () => {
          document.body.removeChild(tawkScript);
        };
      }, []);
      
      return null;
    };

export default LiveChat