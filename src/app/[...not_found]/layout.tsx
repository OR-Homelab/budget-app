import Navbar from "@/components/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <main>
                { children }
            </main>
        </div>
    );
}