import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface AboutSectionProps {
    name: string;
    description: string;
}
export function AboutSection({ description, name }: AboutSectionProps) {
    return (
        <div>
            <Card className="shadow-xl border-0 bg-white/95">
                <CardHeader>
                    <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-2">
                        <div className="h-6 w-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
                   Sobre {name}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="">
                        <p className="text-sm sm:text-base lg:text-lg text-gray-600 ">
                            {description}
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}