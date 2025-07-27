import { DonationTable } from "./_components/donates";
import { Stats } from "./_components/analytics";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { getLoginOnboardAccount } from "./_data-access/create-onboard-account";
import { CreateAccountButton } from "./_components/create-account-button";

export default async function Dashboard() {
    const session = await auth();

    if(!session?.user){
        redirect("/")
    }

    const accountUrl = await getLoginOnboardAccount(session.user.connectedStripeAccountId)
    return(
        <div className="p-4">
            <section className="flex items-center justify-between mb-4">
                <div className="w-full flex items-center gap-2 justify-between">
                    <h1 className="text-2xl font-semibold">Minha conta</h1>
                        {accountUrl &&  (
                            <a
                            href={accountUrl}
                             className="bg-zinc-900 px-4 py-1 rounded-md text-white cursor-pointer">
                        Ajusta conta
                    </a>)}
                </div>
            </section>
            {!session.user.connectedStripeAccountId && (
                <CreateAccountButton />
            )}
            <Stats userId={session.user.id} stripeAccountId={session.user.connectedStripeAccountId ?? ''} />
            <h2 className="text-2xl font-semibold mb-2">últimas doações</h2>
            {session.user.connectedStripeAccountId &&(
                <DonationTable />

            )}
        </div>
    );
}