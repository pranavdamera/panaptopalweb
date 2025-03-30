// Header Component
const Header = () => {
    return (
        <header>
            <div className="container">
                <nav>
                    <div className="logo">
                        <img src="panopto_logo.png" alt="PanoptoPal Logo" />
                        <h1>PanoptoPal</h1>
                    </div>
                    <ul className="nav-links">
                        <li><a href="#features">Features</a></li>
                        <li><a href="#how-it-works">How It Works</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                        <li><a href="#download" className="btn">Download</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

// Hero Component
const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <h2>Your AI Assistant for UVA Panopto Videos</h2>
                <p>
                    PanoptoPal makes learning from lecture videos easier by allowing you to chat with your content,
                    get summaries, and find answers instantly.
                </p>
                <div>
                    <a href="#download" className="btn">Get PanoptoPal</a>
                    <a href="#demo" className="btn btn-secondary">See Demo</a>
                </div>
            </div>
        </section>
    );
};

// Features Component
const Features = () => {
    const features = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
            ),
            title: "Chat with Your Lectures",
            description: "Ask questions about lecture content and get instant answers based on the video transcript."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
            title: "Instant Summaries",
            description: "Get concise summaries of entire lectures with just one click, saving you valuable review time."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: "Fast Setup",
            description: "Works instantly with any UVA Panopto video. Just click 'Create PanoptoPal' and you're ready to go."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
            ),
            title: "Secure & Private",
            description: "Your lecture transcripts are stored locally on your device. We never store your data on our servers."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
            ),
            title: "Advanced AI",
            description: "Powered by state-of-the-art AI models that provide accurate and helpful responses to your questions."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Time-Saving",
            description: "Find specific information without having to rewatch entire lectures or manually search through content."
        }
    ];

    return (
        <section id="features" className="features">
            <div className="container">
                <div className="section-header">
                    <h2>Features</h2>
                    <p>Discover how PanoptoPal transforms the way you learn from UVA Panopto videos</p>
                </div>
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon">
                                {feature.icon}
                            </div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Demo Component
const Demo = () => {
    return (
        <section id="demo" className="demo">
            <div className="container">
                <div className="demo-content">
                    <div className="demo-text">
                        <h2>See PanoptoPal in Action</h2>
                        <p>Watch how easily you can extract key insights from your lecture videos with our AI-powered assistant.</p>
                        <p>Simply install the extension, navigate to any UVA Panopto video, and create your PanoptoPal. From there, you can ask questions, get summaries, and interact with your lecture content in a whole new way.</p>
                        <a href="#download" className="btn" style={{marginTop: '1rem'}}>Try It Now</a>
                    </div>
                    <div className="demo-image">
                        <div className="browser-mockup">
                            <img src="panoptopal_demo.png" alt="PanoptoPal Demo" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// How It Works Component
const HowItWorks = () => {
    const steps = [
        {
            number: 1,
            title: "Install the Extension",
            description: "Download and install the PanoptoPal Chrome extension from the Chrome Web Store."
        },
        {
            number: 2,
            title: "Open a UVA Panopto Video",
            description: "Navigate to any UVA Panopto video in your browser."
        },
        {
            number: 3,
            title: "Create PanoptoPal",
            description: "Click the 'Create PanoptoPal' button to analyze the video transcript."
        },
        {
            number: 4,
            title: "Ask Questions",
            description: "Chat with your video content or get instant summaries of the lecture."
        }
    ];

    return (
        <section id="how-it-works" className="how-it-works">
            <div className="container">
                <div className="section-header">
                    <h2>How It Works</h2>
                    <p>Getting started with PanoptoPal is quick and easy</p>
                </div>
                <div className="steps">
                    {steps.map((step, index) => (
                        <div key={index} className="step">
                            <div className="step-number">{step.number}</div>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Testimonials Component
const Testimonials = () => {
    const testimonials = [
        {
            text: "PanoptoPal has completely changed how I review lectures. I can now quickly find the information I need without rewatching hours of content.",
            name: "Alex Johnson",
            role: "UVA Computer Science Student",
            image: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            text: "The summary feature is a game-changer for exam preparation. It extracts all the key points from lectures so efficiently.",
            name: "Sarah Miller",
            role: "UVA Biology Major",
            image: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
            text: "As someone with ADHD, having the ability to ask specific questions about lecture content has made a huge difference in my studies.",
            name: "Michael Taylor",
            role: "UVA Engineering Student",
            image: "https://randomuser.me/api/portraits/men/62.jpg"
        }
    ];

    return (
        <section id="testimonials" className="testimonials">
            <div className="container">
                <div className="section-header">
                    <h2>What Students Say</h2>
                    <p>Hear from UVA students who are already using PanoptoPal</p>
                </div>
                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            <div className="testimonial-text">
                                <p>{testimonial.text}</p>
                            </div>
                            <div className="testimonial-author">
                                <img src={testimonial.image} alt={testimonial.name} />
                                <div className="author-info">
                                    <h4>{testimonial.name}</h4>
                                    <p>{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// CTA Component
const CTA = () => {
    return (
        <section id="download" className="cta">
            <div className="container">
                <h2>Ready to Transform Your Learning Experience?</h2>
                <p>Download PanoptoPal now and start getting more out of your UVA Panopto lecture videos.</p>
                <a href="https://chrome.google.com/webstore/detail/panoptopal/placeholder" className="btn" target="_blank" rel="noopener noreferrer">
                    Download PanoptoPal
                </a>
            </div>
        </section>
    );
};

// Footer Component
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <img src="panopto_logo.png" alt="PanoptoPal Logo" />
                        <p>Your AI assistant for UVA Panopto videos that helps understand and analyze lecture content.</p>
                    </div>
                    <div className="footer-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#features">Features</a></li>
                            <li><a href="#how-it-works">How It Works</a></li>
                            <li><a href="#testimonials">Testimonials</a></li>
                            <li><a href="#download">Download</a></li>
                        </ul>
                    </div>
                    <div className="footer-links">
                        <h3>Resources</h3>
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                    <p>&copy; {new Date().getFullYear()} PanoptoPal. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

// Main App Component
const App = () => {
    return (
        <div className="app">
            <Header />
            <Hero />
            <Features />
            <Demo />
            <HowItWorks />
            <Testimonials />
            <CTA />
            <Footer />
        </div>
    );
};

// Render App
ReactDOM.createRoot(document.getElementById('root')).render(<App />);