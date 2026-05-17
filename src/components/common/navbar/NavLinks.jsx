import Link from 'next/link';

export const NavLinks = ({ links, className }) => (
    <div className={className}>
        {links.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-medium text-gray-700 hover:text-[#1DA1C1]">
                {link.name}
            </Link>
        ))}
    </div>
);