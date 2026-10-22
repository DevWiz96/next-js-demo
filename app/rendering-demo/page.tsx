import Counter from "@/app/components/rendering-demo/counter";
import RenderingDemoHeader from "@/app/components/rendering-demo/header";

export default function RenderingDemo ()
{
    return (
        <div className="flex justify-center flex-col items-center w-full min-h-screen bg-pink-200">
            <RenderingDemoHeader/>
            <Counter />
        </div>
    )
}