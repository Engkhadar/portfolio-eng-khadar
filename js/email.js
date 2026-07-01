/**
 * CONTACT FORM & EMAILJS INTEGRATION
 * Author: Eng-Khadar (Mohamad Abdirahman Hassan)
 * Features: Validation, Spinner state, EmailJS service triggers, and feedback dialogs.
 */

// ==========================================================
// EMAILJS CONFIGURATION PLACEHOLDERS
// Replace these with your actual EmailJS credentials
// ==========================================================
const EMAILJS_PUBLIC_KEY = "y6hFALopEk2vIjWtc"; // e.g. "user_xxxxxxxxxxxxxxxx"
const EMAILJS_SERVICE_ID = "service_0b2i2yc"; // e.g. "service_xxxxxxx"
const EMAILJS_TEMPLATE_ID = "template_bdcjppm"; // e.g. "template_xxxxxxx"

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('contact-submit');
    const formMsg = document.getElementById('form-message');

    // Initialize EmailJS if the public key is provided
    if (typeof emailjs !== 'undefined') {
        if (EMAILJS_PUBLIC_KEY !== "YOUR_EMAILJS_PUBLIC_KEY" && EMAILJS_PUBLIC_KEY.trim() !== "") {
            emailjs.init(EMAILJS_PUBLIC_KEY);
            console.log("EmailJS successfully initialized.");
        } else {
            console.warn("EmailJS Public Key is still placeholder. Please configure it in js/email.js.");
        }
    } else {
        console.error("EmailJS SDK failed to load. Check your internet connection or script tag.");
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Clear previous messages
            hideMessage();

            // Get form values
            const name = document.getElementById('from_name').value.trim();
            const email = document.getElementById('from_email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            // --- Form Validation ---
            if (!name || !email || !subject || !message) {
                showMessage('Please fill in all fields.', 'error');
                return;
            }

            if (!isValidEmail(email)) {
                showMessage('Please enter a valid email address.', 'error');
                return;
            }

            // --- Send Email via EmailJS ---
            setLoadingState(true);

            // If the user hasn't replaced the placeholders, simulate success for visual presentation
            if (EMAILJS_PUBLIC_KEY === "YOUR_EMAILJS_PUBLIC_KEY" || EMAILJS_PUBLIC_KEY.trim() === "") {
                console.log("Simulating EmailJS send (placeholders active)...");
                setTimeout(() => {
                    setLoadingState(false);
                    showMessage('Demo Mode: Message simulated successfully! (Please set your credentials in js/email.js)', 'success');
                    contactForm.reset();
                }, 1500);
                return;
            }

            // Real EmailJS Send
            emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, contactForm)
                .then(() => {
                    setLoadingState(false);
                    showMessage('Your message has been sent successfully!', 'success');
                    contactForm.reset();
                })
                .catch((error) => {
                    setLoadingState(false);
                    console.error('EmailJS Error:', error);
                    showMessage('Failed to send message. Please try again later or email directly.', 'error');
                });
        });
    }

    // --- Helper Functions ---
    
    function isValidEmail(email) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    }

    function setLoadingState(isLoading) {
        if (!submitBtn) return;
        if (isLoading) {
            submitBtn.classList.add('btn-loading');
            submitBtn.disabled = true;
        } else {
            submitBtn.classList.remove('btn-loading');
            submitBtn.disabled = false;
        }
    }

    function showMessage(text, type) {
        if (!formMsg) return;
        formMsg.textContent = text;
        formMsg.className = `form-msg ${type}`;
        formMsg.style.display = 'flex';

        // Auto-scroll to message for better mobile UX
        formMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    function hideMessage() {
        if (!formMsg) return;
        formMsg.style.display = 'none';
        formMsg.textContent = '';
        formMsg.className = 'form-msg';
    }
});
