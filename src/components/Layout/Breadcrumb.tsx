import React from "react";
import { FaGreaterThan } from "react-icons/fa";

interface BreadcrumbProps {
    pages: string[];
    currentPage: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ pages, currentPage }) => {
    return (
        <nav className="bg-[#E0E9F7]">
        <ol className="flex items-center gap-2 px-4 py-2">
        {
            pages.map((page, index) => (
            <>
            <li key= {`${index}-page`}>
                <a className="text-xs" href={`/${page}`}> { page } </a>
            </li>
            < span className = "text-primary text-lg">&#62; </span>
            </>
        ))}
<li className="text-tertiary"> { currentPage } </li>
    </ol>
    </nav>
  );
};

export default Breadcrumb;