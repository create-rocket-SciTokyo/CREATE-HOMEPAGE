import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "FUND & SPONSOR",
};

export default function FundLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
