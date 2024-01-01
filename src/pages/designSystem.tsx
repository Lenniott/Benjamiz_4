import {ColorPalette} from "../components/colours.tsx"
import {Typography} from "../components/typographyDoc.tsx"
import {Components} from "../components/components.tsx"


export function DesignSystem() {
    return (
        <>
        <div className="min-h-screen">

            <Typography />
            <ColorPalette />
            <Components />
        </div>
        </>
    )
}