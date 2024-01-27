import {ColorPalette} from "../components/molicules/colours.tsx"
import {Typography} from "../components/molicules/typographyDoc.tsx"
import {Components} from "../components/molicules/components.tsx"


export function DesignSystem() {
    return (
        <>
        <div className="min-h-screen">
            <h1 className="h1 text-accent font-serif py-8">Design System</h1>
            <h2 className="h2 text-forground pt-16 pb-8">Typography</h2>
            <Typography />
            <h2 className="h2 text-forground pt-16 pb-8">Colours</h2>
            <ColorPalette />
            <h2 className="h2 text-forground pt-16 pb-8">Components</h2>
            <Components />
        </div>
        </>
    )
}