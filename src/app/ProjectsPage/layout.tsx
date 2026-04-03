import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "PROJECTS",
};

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
