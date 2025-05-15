import { Linkedin, Mail, Github, CodeXml } from "lucide-react";


export default function Footer({ className }) {
    const links = [
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/anthpham/",
            icon: Linkedin,
        },
        {
            name: "Email",
            href: "mailto:phamanthony47@gmail.com",
            icon: Mail, 
        },
        {
            name: "Github",
            href: "https://github.com/anthskti",
            icon: Github,
        },
        {
            name: "Repo",
            href: "https://github.com/anthskti/pw-main",
            icon: CodeXml,
        }
    ];

    return (
        <footer className={`flex flex-col gap-4 text-sm text-stone-700 dark:text-stone-400 ${className}`}>
            <hr className="border-b border-stone-500 dark:border-neutral-200" />
            <div className="flex flex-row justify-between gap-4">
                <div className="flex flex-wrap gap-4">
                    {links.map((link, index) => (
                      <a 
                        key={index}
                        href={link.href}
                        className="group flex items-center hover:text-neutral-800 dark:hover:text-neutral-200"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.icon && (
                            <>
                                <link.icon className="w-5 h-5 hover:scale-110 transition-transform duration-500 ease-out" />
                                <span className="hidden md:inline-block md:w-0 md:overflow-hidden md:group-hover:w-auto md:group-hover:ml-2 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 ease-out">
                                    {link.name}
                                </span>
                            </>
                            )}

                    </a>
                    ))}

                </div>
            </div>

            <p>{new Date().getFullYear()} &copy; Anthony Pham</p>
        </footer>
    );
}