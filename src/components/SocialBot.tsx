// import { useState } from "react";

// export default function SocialBot() {
//   const [open, setOpen] = useState(false);

//   return (
    // <div className="fixed bottom-12 right-6 z-[60] flex flex-col items-center">
    //   {/* Social icons */}
    //   <div
    //     className={`flex flex-col items-end mb-2 transition-all duration-300 ${
    //       open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
    //     }`}
    //   >
    //     {/* WhatsApp */}
    //     <a
    //       href="https://wa.me/919876543210?text=Hello! I'm interested in your services. Can you provide more information?"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //       className="mb-2 p-2 rounded-full bg-white hover:bg-green-100 whatsapp-glow shadow-lg"
    //       title="WhatsApp"
    //     >
    //       {/* WhatsApp SVG */}
    //       <svg className="w-6 h-6" viewBox="0 0 48 48">
    //         <path fill="#4CAF50" d="M4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5c5.1,0,9.8,2,13.4,5.6C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19h0c-3.2,0-6.3-0.8-9.1-2.3L4.9,43.3z"></path>
    //         <path fill="#FAFAFA" d="M19.3,16c-0.4-0.8-0.7-0.8-1.1-0.8c-0.3,0-0.6,0-0.9,0s-0.8,0.1-1.3,0.6c-0.4,0.5-1.7,1.6-1.7,4s1.7,4.6,1.9,4.9s3.3,5.3,8.1,7.2c4,1.6,4.8,1.3,5.7,1.2c0.9-0.1,2.8-1.1,3.2-2.3c0.4-1.1,0.4-2.1,0.3-2.3c-0.1-0.2-0.4-0.3-0.9-0.6s-2.8-1.4-3.2-1.5c-0.4-0.2-0.8-0.2-1.1,0.2c-0.3,0.5-1.2,1.5-1.5,1.9c-0.3,0.3-0.6,0.4-1,0.1c-0.5-0.2-2-0.7-3.8-2.4c-1.4-1.3-2.4-2.8-2.6-3.3c-0.3-0.5,0-0.7,0.2-1c0.2-0.2,0.5-0.6,0.7-0.8c0.2-0.3,0.3-0.5,0.5-0.8c0.2-0.3,0.1-0.6,0-0.8C20.6,19.3,19.7,17,19.3,16z" clipRule="evenodd"></path>
    //       </svg>
    //     </a>
    //     {/* LinkedIn */}
    //     <a
    //       href="#your-linkedin"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //       className="mb-2 p-2 rounded-full bg-white hover:bg-blue-100 linkedin-glow shadow-lg"
    //       title="LinkedIn"
    //     >
    //       {/* LinkedIn SVG */}
    //       <svg className="w-6 h-6" viewBox="0 0 48 48">
    //         <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path>
    //         <path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
    //       </svg>
    //     </a>
    //     {/* Gmail */}
    //     <a
    //       href="#your-gmail"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //       className="mb-2 p-2 rounded-full bg-white hover:bg-red-100 gmail-glow shadow-lg"
    //       title="Gmail"
    //     >
    //       {/* Gmail SVG */}
    //       <svg className="w-6 h-6" viewBox="0 0 48 48">
    //         <path fill="#4CAF50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path>
    //         <path fill="#1E88E5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path>
    //         <path fill="#E53935" d="M35,11.2L24,19.45L13,11.2L12,17L13,23.7L24,31.95L35,23.7L36,17L35,11.2z"></path>
    //         <path fill="#C62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path>
    //         <path fill="#FBC02D" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0C43.076,8,45,9.924,45,12.298z"></path>
    //       </svg>
    //     </a>
    //     {/* Close (X) */}
        
    //   </div>
//       {/* Logo Button */}
//       <button
//         onClick={() => setOpen((v) => !v)}
//         className="w-20 h-20 rounded-full bg-transparent shadow-lg flex items-center justify-center border-2 border-orange-500 hover:scale-105 transition-transform"
//         aria-label="Open Social Media"
//         style={{ boxShadow: "0 4px 24px 0 rgba(0,0,0,0.10)" }}
//       >
//         {/* Your logo SVG or image */}
//         <img src="/sclogo.gif" alt="Logo" className="w-59 h-59" />
//       </button>
//     </div>
//   );
// }


import { useState } from "react";

export default function SocialBot() {
  const [open, setOpen] = useState(false);

  return (
        <div className="fixed bottom-12 right-6 z-[60] flex flex-col items-center">
      {/* Social icons */}
      <div
        className={`flex flex-col items-end mb-2 transition-all duration-300 ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {/* WhatsApp */}
        <a
          href="https://wa.me/919494669228?text=Hello! I'm interested in your services. Can you provide more information?"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-2 p-2 rounded-full bg-white hover:bg-green-100 whatsapp-glow shadow-lg"
          title="WhatsApp"
        >
          {/* WhatsApp SVG */}
          <svg className="w-6 h-6" viewBox="0 0 48 48">
            <path fill="#4CAF50" d="M4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5c5.1,0,9.8,2,13.4,5.6C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19h0c-3.2,0-6.3-0.8-9.1-2.3L4.9,43.3z"></path>
            <path fill="#FAFAFA" d="M19.3,16c-0.4-0.8-0.7-0.8-1.1-0.8c-0.3,0-0.6,0-0.9,0s-0.8,0.1-1.3,0.6c-0.4,0.5-1.7,1.6-1.7,4s1.7,4.6,1.9,4.9s3.3,5.3,8.1,7.2c4,1.6,4.8,1.3,5.7,1.2c0.9-0.1,2.8-1.1,3.2-2.3c0.4-1.1,0.4-2.1,0.3-2.3c-0.1-0.2-0.4-0.3-0.9-0.6s-2.8-1.4-3.2-1.5c-0.4-0.2-0.8-0.2-1.1,0.2c-0.3,0.5-1.2,1.5-1.5,1.9c-0.3,0.3-0.6,0.4-1,0.1c-0.5-0.2-2-0.7-3.8-2.4c-1.4-1.3-2.4-2.8-2.6-3.3c-0.3-0.5,0-0.7,0.2-1c0.2-0.2,0.5-0.6,0.7-0.8c0.2-0.3,0.3-0.5,0.5-0.8c0.2-0.3,0.1-0.6,0-0.8C20.6,19.3,19.7,17,19.3,16z" clipRule="evenodd"></path>
          </svg>
        </a>
        {/* LinkedIn */}
        <a
          href="#your-linkedin"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-2 p-2 rounded-full bg-white hover:bg-blue-100 linkedin-glow shadow-lg"
          title="LinkedIn"
        >
          {/* LinkedIn SVG */}
          <svg className="w-6 h-6" viewBox="0 0 48 48">
            <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path>
            <path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
          </svg>
        </a>
        {/* Gmail */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=Info@synnectify.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-2 p-2 rounded-full bg-white hover:bg-red-100 gmail-glow shadow-lg"
          title="Gmail"
        >
          {/* Gmail SVG */}
          <svg className="w-6 h-6" viewBox="0 0 48 48">
            <path fill="#4CAF50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path>
            <path fill="#1E88E5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path>
            <path fill="#E53935" d="M35,11.2L24,19.45L13,11.2L12,17L13,23.7L24,31.95L35,23.7L36,17L35,11.2z"></path>
            <path fill="#C62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path>
            <path fill="#FBC02D" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0C43.076,8,45,9.924,45,12.298z"></path>
          </svg>
        </a>
        {/* Close (X) */}
        
      </div>
      {/* Logo Button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-20 h-20 rounded-full bg-transparent shadow-lg flex items-center justify-center border-2 border-orange-500 hover:scale-105 transition-transform relative z-20"
        aria-label="Open Social Media"
        style={{ boxShadow: "0 4px 24px 0 rgba(0,0,0,0.10)" }}
      >
        <img src="/sclogo.gif" alt="Logo" className="w-58 h-58" />
      </button>
    </div>
  );
}
