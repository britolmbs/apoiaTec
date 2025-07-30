import Image from "next/image";
import { getInfoUser } from "./_data-access/get-info-user";
import { notFound } from "next/navigation";
import { FormDonate } from "./_components/form";
import { CoverSection } from "./_components/cover-section";

export default async function Apoia ({
    params,
}: {
    params: Promise<{username: string}>
}) {
    const { username } = await params;
    const user = await getInfoUser({ username });

    if(!user){
      notFound()
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
            <CoverSection 
            coverImage={user?.image ?? ""}
            profileImage={user?.image ?? ""}
            name={user?.name ?? "Sem nome"}
            />

            <main className="cointainer mx-auto max-w-6xl p-4 sm:p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                    <div></div>
                    <div></div>
                </div>

            </main>
           

        </div>
    )
}