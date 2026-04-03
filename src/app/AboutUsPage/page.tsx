import type { Metadata } from "next";
import Header from "@/components/ui/Header";
import Overview from "./Overview";

export const metadata: Metadata = {
    title: "ABOUT US",
};


export default function AboutUsPage() {
    return (
        <section>
            <Header />
            <Overview />
        </section>
    )
}