function Footer() {
    return (
        <footer className=" h-auto py-5 sm:py-10 px-5 text-center bg-(--bg) text-(--text) 
                            shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
            <p>© 2025-{new Date().getFullYear()} Kody Wood. All rights reserved.</p>
        </footer>
    );
}

export default Footer;