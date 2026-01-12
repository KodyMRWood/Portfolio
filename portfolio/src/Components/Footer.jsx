function Footer() {
    return (
        <footer className="h-auto py-5 sm:py-10 px-5 text-center bg-(--navfoot) text-(--navfoottext)">
            <p>© 2025-{new Date().getFullYear()} Kody Wood. All rights reserved.</p>
        </footer>
    );
}

export default Footer;